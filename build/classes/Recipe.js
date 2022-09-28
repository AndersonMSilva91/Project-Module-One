"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
class Recipe {
    constructor(creator, recipeName, type, ingredients, preparationMode) {
        this.creator = creator;
        this.recipeName = recipeName;
        this.type = type;
        this.ingredients = ingredients;
        this.preparationMode = preparationMode;
    }
}
exports.Recipe = Recipe;
