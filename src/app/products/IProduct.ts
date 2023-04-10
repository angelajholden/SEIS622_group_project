export interface IProduct{
    id:number;
    productName: string;
    image: string;
    alt: string;
    productSummary: string;
    productLongDescription: string;
    servingOptions:string[];
    cost:number[];
    gluten: boolean;
    soy: boolean;
    nuts: boolean;
    peanuts: boolean;
    eggs: boolean;
    dairy: boolean;
    calories:number;
    protein: number;
    carb: number;
    fat: number;
    sugar: number;
}