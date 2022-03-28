"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleNoIngredientsData = void 0;
const handleNoIngredientsData = (response, ingredientData) => {
    if (!ingredientData) {
        response.statusCode = 404;
        return response.json('Cannot get ingredient');
    }
    return response.json({ data: ingredientData });
};
exports.handleNoIngredientsData = handleNoIngredientsData;
