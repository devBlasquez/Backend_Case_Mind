import { DataTypes, Model } from "sequelize"

import db from "../../database"

type ProductType = {
	name: string
	description: string
	image_path: string
	url: string
	price: number
	amount: number
}

class Product extends Model<ProductType> {
	declare name: string
	declare description: string
	declare image_path: string
	declare price: number
	declare amount: number
}

Product.init(
	{
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		image_path: DataTypes.STRING,
		url: {
			type: DataTypes.VIRTUAL,
			get() {
				return `http://localhost:3333/products/${this.image_path}`
			},
		},
		price: DataTypes.FLOAT,
		amount: DataTypes.INTEGER,
	},
	{ sequelize: db }
)

export default Product
