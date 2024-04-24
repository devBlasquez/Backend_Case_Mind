import { Request } from "express"
import { Query } from "express-serve-static-core"

export interface AuthRequest extends Request {
	userId: number
}

export interface RequestBody<T> extends Request {
	body: T
}

export interface RequestQuery<T extends Query> extends Request {
	query: T
}
