"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var database_1 = __importDefault(require("../../database"));
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Product;
}(sequelize_1.Model));
Product.init({
    name: sequelize_1.DataTypes.STRING,
    description: sequelize_1.DataTypes.STRING,
    image_path: sequelize_1.DataTypes.STRING,
    url: {
        type: sequelize_1.DataTypes.VIRTUAL,
        get: function () {
            return "http://localhost:3333/products/".concat(this.image_path);
        },
    },
    price: sequelize_1.DataTypes.FLOAT,
    amount: sequelize_1.DataTypes.INTEGER,
}, { sequelize: database_1.default });
exports.default = Product;
