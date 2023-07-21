export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    picture: string;
    stars : string;
}

export const PRODUCTS: IProduct[] = [
    {
        id: 1,
        title: "Pizza Chicken",
        description: "une belle pizza",
        price: 10,
        picture: "/imgs/pizza.png",
        stars : "public/stars.png"
    },
    {
        id: 2,
        title: "Burgers",
        description: "un beau burger",
        price: 10,
        picture: "/imgs/burger.png",
        stars : "public/stars.png"

    },
    {
        id: 3,
        title: "Desserts",
        description: "un bon dessert",
        price: 10,
        picture: "/imgs/milkshake.png",
        stars : "public/stars.png"

    },
    {
        id: 4,
        title: "Boissons",
        description: "coca bien frais chacal",
        price: 10,
        picture: "/imgs/coca.jpg",
        stars : "public/stars.png"

    },
];