import PromptSync from "prompt-sync";
import { handleLogin, handleRegister } from "../controllers/userController";
import { User } from "../classes/User";
import { handleProfile } from "./profile";

const prompt = PromptSync();

let option = 4;

const users: User[] = []

while (option != 0) {

    console.log('1 - login')
    console.log('2 - Cadastrar uma nova conta')
    console.log('0 - Sair do programa')
    option = Number(prompt('--> '))

    switch (option) {
        case 1:
            const user = handleLogin(users);

            if (user) {
                console.clear()
                console.log('Login efetuado com sucesso!')

                handleProfile(user, users);


            } else {
                console.clear()
                console.log('Usuário não encontrado!')
            }

            break;

        case 2:
            handleRegister(users);
            break;

        case 0:
            console.clear()
            console.log('Programa finalizado!\n')
            break;

        default:
            console.clear()
            console.log('Opção Inválida!\n')
            break;
    }

}




