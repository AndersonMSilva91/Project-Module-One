"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMember = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const Recipe_1 = require("./Recipe");
const User_1 = require("./User");
class UserMember extends User_1.User {
    constructor(userName, password) {
        super(userName, password);
        this.recipes = [];
    }
    handleCreateRecipe(creator, recipeName, type, ingredients, preparationMode) {
        const recipe = new Recipe_1.Recipe(creator, recipeName, type, ingredients, preparationMode);
        this.recipes.push(recipe);
    }
}
exports.UserMember = UserMember;
