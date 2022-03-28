"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middleware_1 = require("./middleware");
const models_1 = require("./models");
const router = express_1.default.Router();
router.get('/ingredients', (request, response) => {
    const ingredientData = models_1.getAllIngredients;
    return (0, middleware_1.handleNoIngredientsData)(response, ingredientData);
});
exports.default = router;
