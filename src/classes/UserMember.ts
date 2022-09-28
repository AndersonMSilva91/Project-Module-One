import PromptSync from "prompt-sync";

const prompt = PromptSync()

import { Recipe } from "./Recipe";
import { User } from "./User";

export class UserMember extends User {

    public recipes: Recipe[] = []

    constructor(userName: string, password: string) {
        super(userName, password);
    }

    public handleCreateRecipe(creator: string, recipeName: string, type: string, ingredients: string, preparationMode: string) {

        const recipe = new Recipe(creator, recipeName, type, ingredients, preparationMode)

        this.recipes.push(recipe)

    }
}
