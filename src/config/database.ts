import { Options } from "sequelize"

const config: Options = {
	dialect: "mysql",
	host: "localhost",
	username: "root",
	password: "sonic.9521",
	database: "mind_produtos",
	define: {
		timestamps: true,
		underscored: true,
	},
}

export default config
