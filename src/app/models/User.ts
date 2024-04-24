import { DataTypes, Model } from "sequelize"
import bcrypt from "bcryptjs"

import db from "../../database"

type UserType = {
	name: string
	email: string
	password: string
	password_hash: string
}

class User extends Model<UserType> {
	declare id: number
	declare name: string
	declare email: string
	declare password: string
	declare password_hash: string

	checkPassword(password: string) {
		return bcrypt.compare(password, this.password_hash)
	}
}

User.init(
	{
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.VIRTUAL,
		password_hash: DataTypes.STRING,
	},
	{
		sequelize: db,
		hooks: {
			beforeSave: async (instance) => {
				if (instance.password)
					instance.password_hash = await bcrypt.hash(instance.password, 8)
			},
		},
	}
)

export default User
