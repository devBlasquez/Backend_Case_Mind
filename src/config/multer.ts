import multer from "multer"
import crypto from "crypto"
import { extname, resolve } from "path"

export default {
	storage: multer.diskStorage({
		destination: resolve(__dirname, "..", "..", "tmp", "uploads"),

		filename: (req, product, cb) => {
			crypto.randomBytes(16, (err, res) => {
				if (err) return cb(err, product.filename)
				return cb(null, res.toString("hex") + extname(product.originalname))
			})
		},
	}),
}
