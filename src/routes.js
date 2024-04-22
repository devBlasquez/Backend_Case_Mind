import { Router } from "express"
import multer from "multer"

import UserController from "./app/controllers/UserController"
import Sessioncontroller from "./app/controllers/Sessioncontroller"
import ProductController from "./app/controllers/ProductController"

import authMiddleware from "./app/middlewares/auth"
import multerConfig from "./config/multer"

const routes = new Router()
const upload = multer(multerConfig)

routes.post("/users", UserController.store)
routes.post("/sessions", Sessioncontroller.store)

routes.use(authMiddleware)
//Todas as rotas que estão abaixo do middleware e forem ser testadas no insomniac tem de ser inserido o token na aba auth

routes.put("/users", UserController.update)

routes.post("/products", upload.single("file"), ProductController.store)

export default routes
