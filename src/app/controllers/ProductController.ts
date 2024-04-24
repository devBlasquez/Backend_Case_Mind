import * as Yup from "yup"
import { Request, Response } from "express"

import Product from "../models/Product"
import { RequestQuery } from "../../@types/request"

class ProductController {
	async store(req: Request, res: Response) {
		const {
			name: name,
			description: description,
			price: price,
			amount: amount,
		} = req.body

		const { filename: image_path } = req.file

		const product = await Product.create({
			name,
			description,
			image_path,
			price,
			amount,
		})

		return res.json(product)
	}

	async updateFile(req: Request, res: Response) {
		const { filename: image_path } = req.file

		const { id: productId } = req.body

		const product = await Product.findByPk(productId)

		const newProduct = await product.update({ image_path })
		return res.json(newProduct)
	}

	async updateFields(req: Request, res: Response) {
		const schema = Yup.object().shape({
			id: Yup.number(),
			name: Yup.string(),
			description: Yup.string(),
			price: Yup.number(),
			amount: Yup.number(),
		})

		if (!(await schema.isValid(req.body)))
			return res.status(400).json({ error: "Validation fails" })

		const { id: productId, name: newName } = req.body

		const product = await Product.findByPk(productId)

		if (newName != product.name) {
			const productExists = await Product.findOne({ where: { name: newName } })
			if (productExists)
				return res.status(400).json({ error: "Product already exists." })
		}

		const newProduct = await product.update(req.body)
		return res.json(newProduct)
	}

	async index(req: RequestQuery<{ page: string }>, res: Response) {
		const { page = "1" } = req.query

		const products = await Product.findAll({
			order: ["name"],
			limit: 10,
			offset: (Number(page) - 1) * 10,
		})

		return res.json(products)
	}
}

export default new ProductController()
