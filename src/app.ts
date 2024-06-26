import express, { Express } from "express"
import path from "path"

import routes from "./routes"

import "./database"

class App {
	server: Express

	constructor() {
		this.server = express()
		this.middlewares()
		this.routes()
	}

	middlewares() {
		this.server.use(express.json())
		this.server.use(
			"/products",
			express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
		)
	}

	routes() {
		this.server.use(routes)
	}
}

export default new App().server
