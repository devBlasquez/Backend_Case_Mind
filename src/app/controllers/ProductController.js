import Product from "../models/Product"

class ProductController {
	async store(req, res) {
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
}

export default new ProductController()
