import { User } from "../classes/User";
import PromptSync from "prompt-sync";
import { UserMember } from "../classes/UserMember";


const prompt = PromptSync();

let option = 0;

export function handleProfile(user: User, users: User[]) {

    if (user instanceof UserMember) {

        do {
            console.log('1 - Cadastrar receita');
            console.log('2 - Visualizar receita');
            console.log('3 - Sair');

            option = Number(prompt('--> '));

            switch (option) {

                case 1:
                    console.log('Digite o nome da receita')
                    const recipeName = prompt('--> ');
                    const creator = user.userName;

                    console.clear()
                    console.log('Digite o tipo de receita (Doce, Salgada ou Doce/Salgada');
                    const type = prompt('-->');

                    console.clear();

                    console.log('Quais são os ingredientes da sua receita?');
                    const ingredients = prompt('-->');

                    console.clear();

                    console.log('Modo de preparo?');
                    const preparationMode = prompt('-->');

                    user.handleCreateRecipe(creator, recipeName, type, ingredients, preparationMode)

                    console.clear()
                    console.log('Receita foi criada com sucesso!\n')

                    break;

                case 2:
                    console.clear()
                    users.map(user => {
                        if (user instanceof UserMember) {
                            user.recipes.forEach(recipe => {
                                console.log('------Receita------\n')
                                console.log(`Nome do criador da receita: ${recipe.creator}`)
                                console.log(`Nome da receita: ${recipe.recipeName}`)
                                console.log(`Tipo: ${recipe.type}`)
                                console.log(`Ingredientes: ${recipe.ingredients}`)
                                console.log(`Modo de preparo: ${recipe.preparationMode}\n`)

                            })
                        }
                    })

                    break;

                case 3:
                    console.clear();
                    console.log('Logout');

                    break;

                default:
                    console.log('Opção invalida, tente novamente')
                    break;
            }
        } while (option != 3)
    } else {

        do {
            console.log('1 - Visualizar receita');
            console.log('2 - Sair');

            option = Number(prompt('--> '));

            switch (option) {

                case 1:
                    console.clear()
                    users.map(user => {
                        if (user instanceof UserMember) {
                            user.recipes.forEach(recipe => {
                                console.log('------Receita------\n')
                                console.log(`Nome do criador da receita: ${recipe.creator}`)
                                console.log(`Nome da receita: ${recipe.recipeName}`)
                                console.log(`Tipo: ${recipe.type}`)
                                console.log(`Ingredientes: ${recipe.ingredients}`)
                                console.log(`Modo de preparo: ${recipe.preparationMode}\n`)

                            })
                        }
                    })
                    break;

                case 2:
                    console.clear()
                    console.log('Logout!')

                    break;

                default:
                    console.log('Opção invalida, tente novamente')
                    break;
            }
        } while (option != 2)

    }

}
