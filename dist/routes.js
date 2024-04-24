"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var UserController_1 = __importDefault(require("./app/controllers/UserController"));
var Sessioncontroller_1 = __importDefault(require("./app/controllers/Sessioncontroller"));
var ProductController_1 = __importDefault(require("./app/controllers/ProductController"));
var auth_1 = __importDefault(require("./app/middlewares/auth"));
var multer_2 = __importDefault(require("./config/multer"));
var routes = (0, express_1.Router)();
var upload = (0, multer_1.default)(multer_2.default);
routes.post("/users", UserController_1.default.store);
routes.post("/sessions", Sessioncontroller_1.default.store);
routes.use(auth_1.default);
//Todas as rotas que estão abaixo do middleware e forem ser testadas no insomniac tem de ser inserido o token na aba auth
routes.put("/users", UserController_1.default.update);
routes.post("/products", upload.single("file"), ProductController_1.default.store);
routes.put("/products/file", upload.single("file"), ProductController_1.default.updateFile);
routes.put("/products", ProductController_1.default.updateFields);
routes.get("/products", ProductController_1.default.index);
exports.default = routes;
