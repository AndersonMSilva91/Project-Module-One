"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRegisterRecipe = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let creator = '';
let recipeName = '';
let ingredients = '';
let preparationMode = '';
let description = '';
function handleRegisterRecipe(userName) {
    do {
        creator = userName;
        console.log('Qual é o nome da receita?');
        recipeName = prompt('--> ');
        console.log('Quais são os igredientes da receita?');
        ingredients = prompt('--> ');
        console.log('Digite uma descrição da receita');
        description = prompt('--> ');
    } while (recipeName.length < 2 && ingredients.length < 2 && description.length);
}
exports.handleRegisterRecipe = handleRegisterRecipe;
