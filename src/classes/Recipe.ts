export class Recipe {
    public creator: string;
    public recipeName: string;
    public type: string;
    public ingredients: string;
    public preparationMode: string;




    constructor(creator: string, recipeName: string, type: string, ingredients: string, preparationMode: string) {
        this.creator = creator;
        this.recipeName = recipeName;
        this.type = type;
        this.ingredients = ingredients;
        this.preparationMode = preparationMode;


    }

}