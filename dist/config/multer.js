"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var crypto_1 = __importDefault(require("crypto"));
var path_1 = require("path");
exports.default = {
    storage: multer_1.default.diskStorage({
        destination: (0, path_1.resolve)(__dirname, "..", "..", "tmp", "uploads"),
        filename: function (req, product, cb) {
            crypto_1.default.randomBytes(16, function (err, res) {
                if (err)
                    return cb(err, product.filename);
                return cb(null, res.toString("hex") + (0, path_1.extname)(product.originalname));
            });
        },
    }),
};
