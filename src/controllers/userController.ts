import { User } from "../classes/User"
import PromptSync from "prompt-sync";
import { UserMember } from "../classes/UserMember";

const prompt = PromptSync();

let userName = ''
let password = ''
let option = 0

//Login
export function handleLogin(users: User[]) {
    do {
        console.clear();
        console.log('Digite seu userName: ');
        userName = prompt('--> ');
        console.log('Digite sua senha: ');
        password = prompt('--> ');
    } while (userName.length < 2 && password.length < 2);

    return users.find(user => user.userName == userName && user.password == password)

}

export function handleRegister(users: User[]) {
    do {
        console.clear();
        console.log('Qual é o seu nome? (Precisa ter mais de 2 caracteres)')
        userName = prompt('--> ');
        console.log('Qual é a sua senha? (Precisa ter mais de 2 caracteres)')
        password = prompt('--> ');

        console.log('Você deseja se tornar um cliente premium e postar receitas em nossa plataforma? ')
        console.log('1 - Sim');
        console.log('2 - Não');
        option = Number(prompt('-->'))

    } while (userName.length < 2 && password.length < 2 && option != 1 && option != 2);

    if (option == 1) {
        const newUser = new UserMember(userName, password);
        users.push(newUser);
    } else {
        const newUser = new User(userName, password);
        users.push(newUser);

    }
    console.clear();
    console.log("Usuário Criado com Sucesso!\n");

}
