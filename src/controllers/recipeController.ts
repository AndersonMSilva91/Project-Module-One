import PromptSync from 'prompt-sync'

const prompt = PromptSync();

let creator = ''
let recipeName = ''
let ingredients = ''
let preparationMode = ''
let description = ''

export function handleRegisterRecipe(userName: string) {
    do {

        creator = userName;

        console.log('Qual é o nome da receita?')
        recipeName = prompt('--> ')

        console.log('Quais são os igredientes da receita?')
        ingredients = prompt('--> ')

        console.log('Digite uma descrição da receita')
        description = prompt('--> ')

    } while (recipeName.length < 2 && ingredients.length < 2 && description.length)


}