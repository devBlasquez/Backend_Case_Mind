import { QueryInterface, DataTypes } from "sequelize"

module.exports = {
	up: (queryInterface: QueryInterface, Sequelize: typeof DataTypes) => {
		return queryInterface.createTable("products", {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			image_path: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			price: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			amount: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		})
	},

	down: (queryInterface: QueryInterface) => {
		return queryInterface.dropTable("products")
	},
}
