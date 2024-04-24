"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = __importDefault(require("../models/Product"));
var Yup = __importStar(require("yup"));
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    ProductController.prototype.store = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, description, price, amount, image_path, product;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, description = _a.description, price = _a.price, amount = _a.amount;
                        image_path = req.file.filename;
                        return [4 /*yield*/, Product_1.default.create({
                                name: name,
                                description: description,
                                image_path: image_path,
                                price: price,
                                amount: amount,
                            })];
                    case 1:
                        product = _b.sent();
                        return [2 /*return*/, res.json(product)];
                }
            });
        });
    };
    ProductController.prototype.updateFile = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var image_path, productId, product, newProduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        image_path = req.file.filename;
                        productId = req.body.id;
                        return [4 /*yield*/, Product_1.default.findByPk(productId)];
                    case 1:
                        product = _a.sent();
                        return [4 /*yield*/, product.update({ image_path: image_path })];
                    case 2:
                        newProduct = _a.sent();
                        return [2 /*return*/, res.json(newProduct)];
                }
            });
        });
    };
    ProductController.prototype.updateFields = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var schema, _a, productId, newName, product, productExists, newProduct;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        schema = Yup.object().shape({
                            id: Yup.number(),
                            name: Yup.string(),
                            description: Yup.string(),
                            price: Yup.number(),
                            amount: Yup.number(),
                        });
                        return [4 /*yield*/, schema.isValid(req.body)];
                    case 1:
                        if (!(_b.sent()))
                            return [2 /*return*/, res.status(400).json({ error: "Validation fails" })];
                        _a = req.body, productId = _a.id, newName = _a.name;
                        return [4 /*yield*/, Product_1.default.findByPk(productId)];
                    case 2:
                        product = _b.sent();
                        if (!(newName != product.name)) return [3 /*break*/, 4];
                        return [4 /*yield*/, Product_1.default.findOne({ where: { name: newName } })];
                    case 3:
                        productExists = _b.sent();
                        if (productExists)
                            return [2 /*return*/, res.status(400).json({ error: "Product already exists." })];
                        _b.label = 4;
                    case 4: return [4 /*yield*/, product.update(req.body)];
                    case 5:
                        newProduct = _b.sent();
                        return [2 /*return*/, res.json(newProduct)];
                }
            });
        });
    };
    ProductController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, page, products;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.query.page, page = _a === void 0 ? 1 : _a;
                        return [4 /*yield*/, Product_1.default.findAll({
                                order: ["name"],
                                limit: 10,
                                offset: (page - 1) * 10,
                            })];
                    case 1:
                        products = _b.sent();
                        return [2 /*return*/, res.json(products)];
                }
            });
        });
    };
    return ProductController;
}());
exports.default = new ProductController();
