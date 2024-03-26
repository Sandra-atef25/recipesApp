import { Ingredient } from "../shared/ingrdient.model";

export class Recipe{

    //can be initantiated and we can define how recipe should be available to users
    public name: string;
    public description: string;
    public imagePath:string;
    public ingredients:Ingredient[];

    constructor(name:string,desc:string,impath:string,ingredient:Ingredient[]){
        this.description=desc;
        this.imagePath=impath;
        this.name=name;
        this.ingredients=ingredient;

    }
}