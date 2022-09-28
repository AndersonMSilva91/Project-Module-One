"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const userController_1 = require("../controllers/userController");
const profile_1 = require("./profile");
const prompt = (0, prompt_sync_1.default)();
let option = 4;
const users = [];
while (option != 0) {
    console.log('1 - login');
    console.log('2 - Cadastrar uma nova conta');
    console.log('0 - Sair do programa');
    option = Number(prompt('--> '));
    switch (option) {
        case 1:
            const user = (0, userController_1.handleLogin)(users);
            if (user) {
                console.clear();
                console.log('Login efetuado com sucesso!');
                (0, profile_1.handleProfile)(user, users);
            }
            else {
                console.clear();
                console.log('Usuário não encontrado!');
            }
            break;
        case 2:
            (0, userController_1.handleRegister)(users);
            break;
        case 0:
            console.clear();
            console.log('Programa finalizado!\n');
            break;
        default:
            console.clear();
            console.log('Opção Inválida!\n');
            break;
    }
}
