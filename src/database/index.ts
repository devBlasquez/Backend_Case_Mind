import { Sequelize } from "sequelize"

import databaseConfig from "../config/database"

const db = new Sequelize(databaseConfig)

export default db
