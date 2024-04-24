import jwt from "jsonwebtoken"
import { promisify } from "util"
import { Response, NextFunction } from "express"

import authConfig from "../../config/auth"
import { AuthRequest } from "../../@types/request"

type PromisifiedFunctionType = (
	token: string,
	secret: string
) => Promise<{ id: number }>

export default async (req: AuthRequest, res: Response, next: NextFunction) => {
	const authHeader = req.headers.authorization

	if (!authHeader) return res.status(401).json({ error: "token not provided" })

	const [, token] = authHeader.split(" ")

	try {
		const promisifiedFunction: PromisifiedFunctionType = promisify(jwt.verify)
		const decoded = await promisifiedFunction(token, authConfig.secret)
		req.userId = decoded.id

		return next()
	} catch (error) {
		return res.status(401).json({ error: "Invalid token" })
	}
}
