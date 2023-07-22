export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    picture: string;
    stars : string;
    category : ProductCategoryType;
}

export type ProductCategoryType = "pizza" | "burger" | "drink" | "dessert";
 
export const PRODUCTS: IProduct[] = [
    {
        id: 1,
        title: "Pizza Chicken",
        description: "une belle pizza",
        price: 10,
        picture: "/imgs/pizza.png",
        stars : "public/stars.png",
        category : "pizza"
    },
    {
        id: 2,
        title: "Burgers",
        description: "un beau burger",
        price: 10,
        picture: "/imgs/burger.png",
        stars : "public/stars.png",
        category : "burger"


    },
    {
        id: 3,
        title: "Desserts",
        description: "un bon dessert",
        price: 10,
        picture: "/imgs/milkshake.png",
        stars : "public/stars.png",
        category : "dessert"


    },
    {
        id: 4,
        title: "Boissons",
        description: "coca bien frais chacal",
        price: 10,
        picture: "/imgs/coca.png",
        stars : "public/stars.png",
        category : "drink"


    },
];