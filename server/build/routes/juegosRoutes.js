"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const juegosController_1 = __importDefault(require("../controllers/juegosController"));
class JuegosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', juegosController_1.default.list);
        this.router.get('/:id', juegosController_1.default.getOne);
        this.router.post('/', juegosController_1.default.create);
        this.router.put('/:id', juegosController_1.default.update);
        this.router.delete('/:id', juegosController_1.default.delete);
    }
}
const juegosRoutes = new JuegosRoutes();
exports.default = juegosRoutes.router;
