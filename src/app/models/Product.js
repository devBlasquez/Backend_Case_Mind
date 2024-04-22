import Sequelize, { Model } from "sequelize"

class Product extends Model {
	static init(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				description: Sequelize.STRING,
				image_path: Sequelize.STRING,
				url: {
					type: Sequelize.VIRTUAL,
					get() {
						return `http://localhost:3333/products/${this.image_path}`
					},
				},
				price: Sequelize.FLOAT,
				amount: Sequelize.INTEGER,
			},
			{ sequelize }
		)
		return this
	}
}

export default Product
