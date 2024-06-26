import * as Yup from "yup"
import jwt from "jsonwebtoken"
import { Request, Response } from "express"

import { RequestBody } from "../../@types/request"
import authConf from "../../config/auth"
import User from "../models/User"

type SessionStoreBody = { email: string; password: string }

class SessionController {
	async store(req: RequestBody<SessionStoreBody>, res: Response) {
		const schema = Yup.object().shape({
			email: Yup.string().email().required(),
			password: Yup.string().required(),
		})

		if (!(await schema.isValid(req.body)))
			return res.status(400).json({ error: "Validation fails" })

		const { email, password } = req.body

		const user = await User.findOne({ where: { email } })

		if (!user) return res.status(401).json({ error: "User not found" })

		if (!(await user.checkPassword(password)))
			return res.status(401).json({ error: "Password does not match" })

		const { id, name } = user

		return res.json({
			user: { id, name, email },
			token: jwt.sign({ id }, authConf.secret, {
				expiresIn: authConf.expiresIn,
			}),
		})
	}
}

export default new SessionController()
