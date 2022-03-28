"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllIngredients = exports.getIngredientsByCategory = void 0;
const data_1 = require("./data");
const getIngredientsByCategory = (category) => {
    const map = {
        shellsAndMolluscs: 0,
        crustaceans: 1,
        fruits: 2,
        games: 3,
        frog: 4,
        vegetable: 5,
        fishes: 6,
        poultryAndRabbit: 7,
    };
    return data_1.allIngredients[map.category];
};
exports.getIngredientsByCategory = getIngredientsByCategory;
const getAllIngredients = data_1.allIngredients;
exports.getAllIngredients = getAllIngredients;
