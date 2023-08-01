import { IIngredient } from "./IIngredient";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: ProductCategoryType;
  picture: {
    src : string,
    alt : string
  } 
  includedIngredients: IIncludedIngredients[];
  extras: IExtraIngredient[];
  tags: TagType[];
  stars: number;
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
        description: "Pizza Chicken",
        price: 900,
        category: "pizza",
        picture: {
          src : "https://images.unsplash.com/photo-1604917869287-3ae73c77e227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          alt : "Pizza Chicken"
        }, 
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
        stars: 5,
      },

      {
        id: 2,
        title: "Vegan Pizza",
        description: "Pizza Vegan",
        price: 900,
        category: "pizza",
        picture: {
          src : "https://images.unsplash.com/photo-1620374643809-b69c702d0ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          alt : "Vegan Pizza"
        },         includedIngredients: [
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
        stars: 4,
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
        title: "Burgers Triple Cheese",
        description: "Délicieux burger",
        price: 900,
        category: "burger",
        picture: {
          src : "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          alt : "Burgers Triple Cheese"
        },         includedIngredients: [
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
        stars: 4,
      },
      {
        id: 4,
        title: "Burgers Chicken",
        description: "Délicieux burger",
        price: 900,
        category: "burger",
        picture: {
          src : "https://plus.unsplash.com/premium_photo-1683655058728-415f4f2674bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          alt : "Burgers Chicken"
        },         includedIngredients: [
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
        stars: 3,
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
        title: "Mousse au chocolat",
        description: "Délicieux dessert",
        price: 900,
        category: "dessert",
        picture: {
          src : "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          alt : "Mousse au chocolat"
        },         includedIngredients: [],
        extras: [],
        tags: ["Fat food"],
        stars: 3,
      },
      {
        id: 6,
        title: "Milkshake",
        description: "Délicieux dessert",
        price: 900,
        category: "dessert",
        picture: {
          src : "https://images.unsplash.com/photo-1626078436898-7c7953c04778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          alt : "Milkshake"
        },         includedIngredients: [],
        extras: [],
        tags: ["Fat food"],
        stars: 4,
      },
      {
        id: 7,
        title: "Pana Cotta",
        description: "Délicieux dessert",
        price: 900,
        category: "dessert",
        picture: {
          src : "https://images.unsplash.com/photo-1559564121-d12c8f29e8cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          alt : "Pana Cotta"
        },         includedIngredients: [],
        extras: [],
        tags: ["Fat food"],
        stars: 2,
      },
      {
        id: 8,
        title: "Pancake",
        description: "Délicieux dessert",
        price: 900,
        category: "dessert",
        picture: {
          src : "https://images.unsplash.com/photo-1565299543923-37dd37887442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=481&q=80",
          alt : "Pancake"
        },         includedIngredients: [],
        extras: [],
        tags: ["No sugar"],
        stars: 3,
      },
      {
        id: 9,
        title: "Tiramisu",
        description: "Délicieux dessert",
        price: 900,
        category: "dessert",
        picture: {
          src : "https://images.unsplash.com/photo-1586040140378-b5634cb4c8fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80",
          alt : "Tiramisu"
        },         includedIngredients: [],
        extras: [],
        tags: ["Fat food"],
        stars: 1,
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
        description: "eau",
        price: 900,
        category: "drink",
        picture: {
          src : "https://images.unsplash.com/photo-1612134678926-7592c521aa52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
          alt : "eau"
        },         includedIngredients: [],
        extras: [],
        tags: ["Healthy" && "Sodas"],
        stars: 5,
      },
      {
        id: 11,
        title: "Coca",
        description: "eau",
        price: 900,
        category: "drink",
        picture: {
          src : "https://images.unsplash.com/photo-1594971475674-6a97f8fe8c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          alt : "Coca"
        },         includedIngredients: [],
        extras: [],
        tags: ["Sodas"],
        stars: 4,
      },
      {
        id: 12,
        title: "Coca Zero",
        description: "eau",
        price: 900,
        category: "drink",
        picture: {
          src : "https://images.unsplash.com/photo-1543253687-c931c8e01820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
          alt : "Coca Zero"
        },         includedIngredients: [],
        extras: [],
        tags: ["Healthy"],
        stars: 3,
      },
      {
        id: 13,
        title: "Limonade",
        description: "eau",
        price: 900,
        category: "drink",
        picture: {
          src : "https://images.unsplash.com/photo-1575596510825-f748919a2bf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          alt : "Limonade"
        },         includedIngredients: [],
        extras: [],
        tags: ["Sodas"],
        stars: 5,
      },
    ],
  },
];
