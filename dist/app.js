"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var routes_1 = __importDefault(require("./routes"));
require("./database");
var App = /** @class */ (function () {
    function App() {
        this.server = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    App.prototype.middlewares = function () {
        this.server.use(express_1.default.json());
        this.server.use("/products", express_1.default.static(path_1.default.resolve(__dirname, "..", "tmp", "uploads")));
    };
    App.prototype.routes = function () {
        this.server.use(routes_1.default);
    };
    return App;
}());
exports.default = new App().server;
