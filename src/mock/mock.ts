import { IIngredient } from "./IIngredient";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: ProductCategoryType;
  picture: string;
  includedIngredients: IIncludedIngredients[];
  extras: IExtraIngredient[];
  tags: TagType[];
  stars: string;
}

export interface IProductsByCategory {
  id: number;
  category: ProductCategoryType;
  title: string;
  products: IProduct[];
}

export interface IExtraIngredient {
  ingredient: IIngredient;
  quantity: number;
  maxQuantity: number;
  additionalPrice: number;
}

export interface IIncludedIngredients {
  ingredient: IIngredient;
}

export interface IIngredients {
  id: number;
  title: string;
  image: string;
}

export interface IAllProducts {
  id: number;
  title: string;
  image: string;
}

export type ProductCategoryType = "pizza" | "burger" | "drink" | "dessert";

export type TagType =
  | "Vegan"
  | "No porc"
  | "No sugar"
  | "Fat food"
  | "Sodas"
  | "Healthy";


export const PRODUCTS: IProductsByCategory[] = [
  {
    id: 1,
    category: "pizza",
    title: "Les Pizzas de la Peszata",
    products: [
      {
        id: 1,
        title: "Pizza Chicken",
        description:
          "Pizza Chicken",
        price: 900,
        category: "pizza",
        picture: "/imgs/pizza.png",
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
          },
          {
            ingredient: {
              id: 2,
              title: "Poulet fumé",
            },
          },
          {
            ingredient: {
              id: 3,
              title: "Pomme de terre",
            },
          },
        ],
        extras: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 2,
              title: "Viande hachée",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 3,
              title: "Oignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
        ],
        tags: ["No porc"],
        stars: "/icons/stars.png",
      },

      {
        id: 2,
        title: "Vegan Pizza",
        description:
          "Pizza Vegan",
        price: 900,
        category: "pizza",
        picture: "/imgs/veganPizza.jpg",
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
          },
          {
            ingredient: {
              id: 2,
              title: "Poulet fumé",
            },
          },
          {
            ingredient: {
              id: 3,
              title: "Pomme de terre",
            },
          },
        ],
        extras: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 2,
              title: "Viande hachée",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 25,
              title: "Oignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
        ],
        tags: ["Vegan"],
        stars: "/icons/stars.png",
      },
    ],
  },
  {
    id: 2,
    category: "burger",
    title: "Les Burgers de la Peszata",
    products: [
      {
        id: 3,
        title: "Burgers",
        description:
          "Délicieux burger",
        price: 900,
        category: "burger",
        picture: "/imgs/burger.jpg",
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
          },
          {
            ingredient: {
              id: 4,
              title: "Poulet fumé",
            },
          },
          {
            ingredient: {
              id: 24,
              title: "Pomme de terre",
            },
          },
        ],
        extras: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 2,
              title: "Viande hachée",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 25,
              title: "Oignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
        ],
        tags: ["Fat food"],
        stars: "/icons/stars.png",
      },
      {
        id: 4,
        title: "Burgers Chicken",
        description:
          "Délicieux burger",
        price: 900,
        category: "burger",
        picture: "imgs/chickenBurger.jpg",
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
          },
          {
            ingredient: {
              id: 4,
              title: "Poulet fumé",
            },
          },
          {
            ingredient: {
              id: 24,
              title: "Pomme de terre",
            },
          },
        ],
        extras: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
          {
            ingredient: {
              id: 2,
              title: "Viande hachée",
            },
            quantity: 0,
            maxQuantity: 2,
            additionalPrice: 200,
          },
          {
            ingredient: {
              id: 25,
              title: "Oignons",
            },
            quantity: 0,
            maxQuantity: 1,
            additionalPrice: 100,
          },
        ],
        tags: ["No porc"],
        stars: "/icons/stars.png",
      },
    ],
  },
  {
    id: 3,
    category: "dessert",
    title: "Les Desserts de la Peszata",
    products: [
      {
        id: 5,
        title: "Soufflé au chocolat",
        description:
          "Délicieux dessert",
        price: 900,
        category: "dessert",
        picture: "/imgs/chocolat.jpg",
        includedIngredients: [],
        extras: [],
        tags: ["Fat food"],
        stars: "/icons/stars.png",
      },
      {
        id: 6,
        title: "Milkshake",
        description:
          "Délicieux dessert",
        price: 900,
        category: "dessert",
        picture: "/imgs/milkshake.png",
        includedIngredients: [],
        extras: [],
        tags: ["Fat food"],
        stars: "/icons/stars.png",
      },
      {
        id: 7,
        title: "Pana Cotta",
        description:
          "Délicieux dessert",
        price: 900,
        category: "dessert",
        picture: "imgs/panaCotta.jpg",
        includedIngredients: [],
        extras: [],
        tags: ["Fat food"],
        stars: "/icons/stars.png",
      },
      {
        id: 8,
        title: "Pancake",
        description:
          "Délicieux dessert",
        price: 900,
        category: "dessert",
        picture: "imgs/pancakes.jpg",
        includedIngredients: [],
        extras: [],
        tags: ["No sugar"],
        stars: "/icons/stars.png",

      },
      {
        id: 9,
        title: "Tiramisu",
        description:
          "Délicieux dessert",
        price: 900,
        category: "dessert",
        picture: "imgs/tiramisu.jpg",
        includedIngredients: [],
        extras: [],
        tags: ["Fat food"],
        stars: "/icons/stars.png",
      },
    ],
  },

  {
    id: 4,
    category: "drink",
    title: "Les Sodas de la Peszata",
    products: [
      {
        id: 10,
        title: "eau",
        description:
          "eau",
        price: 900,
        category: "drink",
        picture: "imgs/water.jpg",
        includedIngredients: [],
        extras: [],
        tags: ["Healthy" && "Sodas"],
        stars: "/icons/stars.png",
      },
      {
        id: 11,
        title: "Coca",
        description:
          "eau",
        price: 900,
        category: "drink",
        picture: "imgs/coca.png",
        includedIngredients: [],
        extras: [],
        tags: ["Sodas"],
        stars: "/icons/stars.png",
      },
      {
        id: 12,
        title: "Coca Zero",
        description:
          "eau",
        price: 900,
        category: "drink",
        picture: "imgs/cocaZero.jpg",
        includedIngredients: [],
        extras: [],
        tags: ["Healthy"],
        stars: "/icons/stars.png",
      },
      {
        id: 13 ,
        title: "Limonade",
        description:
          "eau",
        price: 900,
        category: "drink",
        picture: "imgs/lemonade.jpg",
        includedIngredients: [],
        extras: [],
        tags: ["Sodas"],
        stars: "/icons/stars.png",
      },
    ],
  },
];


