"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var User_1 = __importDefault(require("../app/models/User"));
var Product_1 = __importDefault(require("../app/models/Product"));
var database_1 = __importDefault(require("../config/database"));
var models = [User_1.default, Product_1.default];
var Database = /** @class */ (function () {
    function Database() {
        this.init();
    }
    Database.prototype.init = function () {
        var _this = this;
        this.connection = new sequelize_1.Sequelize(database_1.default);
        models.map(function (model) { return model.init(_this.connection); });
    };
    return Database;
}());
exports.default = new Database();
