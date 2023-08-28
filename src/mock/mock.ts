import { IIngredient } from "./IIngredient";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: ProductCategoryType;
  picture: {
    src: string;
    alt: string;
  };
  includedIngredients: IIncludedIngredients[];
  extras: IExtraIngredient[];
  tags: TagType[];
  stars: number;
  allergens: string[];
  nutritionValues: INutritionValues;
}

export interface INutritionValues {
  energy: string;
  fat: string;
  saturatedFat: string;
  carbohydrates: string;
  salt: string;
  proteins: string;
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
  quantity: number;
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
        // pizza 1
        id: 1,
        title: "Pizza Chicken",
        description: "Pizza Chicken",
        price: 9.99,
        category: "pizza",
        picture: {
          src: "https://images.unsplash.com/photo-1604917869287-3ae73c77e227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          alt: "Pizza Chicken",
        },
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 2,
              title: "Poulet fumé",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 3,
              title: "Pomme de terre",
            },
            quantity: 1,
          },
        ],
        extras: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },

          {
            ingredient: {
              id: 2,
              title: "Viande hachée",
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 3,
              title: "Oignons",
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
        ],
        allergens: ["Gluten", "Lactose", "Chicken"],
        nutritionValues: {
          energy: "300 kcal",
          fat: "15 g",
          saturatedFat: "5 g",
          carbohydrates: "35 g",
          salt: "1.5 g",
          proteins: "10 g",
        },
        tags: ["No porc"],
        stars: 5,
      },

      {
        // pizza 2
        id: 2,
        title: "Vegan Pizza",
        description: "Pizza Vegan",
        price: 8.99,
        category: "pizza",
        picture: {
          src: "https://images.unsplash.com/photo-1620374643809-b69c702d0ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          alt: "Vegan Pizza",
        },
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 2,
              title: "Poulet fumé",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 3,
              title: "Pomme de terre",
            },
            quantity: 1,
          },
        ],
        extras: [
          {
            ingredient: {
              id: 3,
              title: "Mozarella",
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 2,
              title: "Viande hachée",
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 25,
              title: "Oignons",
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
        ],
        allergens: ["Gluten", "Lactose", "Chicken"],
        nutritionValues: {
          energy: "250 kcal",
          fat: "8 g",
          saturatedFat: "1.5 g",
          carbohydrates: "35 g",
          salt: "2 g",
          proteins: "10 g",
        },
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
        // burger 1
        id: 3,
        title: "Burgers Triple Cheese",
        description: "Délicieux burger",
        price: 10.99,
        category: "burger",
        picture: {
          src: "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          alt: "Burgers Triple Cheese",
        },
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 4,
              title: "Poulet fumé",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 24,
              title: "Pomme de terre",
            },
            quantity: 1,
          },
        ],
        extras: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 2,
              title: "Viande hachée",
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 25,
              title: "Oignons",
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
        ],
        allergens: ["Gluten", "Lactose", "Chicken"],
        nutritionValues: {
          energy: "550 kcal",
          fat: "35 g",
          saturatedFat: "18 g",
          carbohydrates: "35 g",
          salt: "3 g",
          proteins: "25 g",
        },
        tags: ["Fat food"],
        stars: 4,
      },

      {
        // burger 2
        id: 4,
        title: "Burgers Chicken",
        description: "Délicieux burger",
        price: 11.99,
        category: "burger",
        picture: {
          src: "https://plus.unsplash.com/premium_photo-1683655058728-415f4f2674bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          alt: "Burgers Chicken",
        },
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 4,
              title: "Poulet fumé",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 24,
              title: "Pomme de terre",
            },
            quantity: 1,
          },
        ],
        extras: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 2,
              title: "Viande hachée",
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 25,
              title: "Oignons",
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
        ],
        allergens: ["Gluten", "Lactose", "Chicken"],
        nutritionValues: {
          energy: "400 kcal",
          fat: "15 g",
          saturatedFat: "3 g",
          carbohydrates: "40 g",
          salt: "5 g",
          proteins: "25 g",
        },
        tags: ["No porc"],
        stars: 3,
      },
      {
        // burger 3
        id: 5,
        title: "Triple cheese bacon",
        description: "Délicieux triple cheese supplément bacon",
        price: 12.99,
        category: "burger",
        picture: {
          src: "/imgs/burger.jpg",
          alt: "Triple cheese bacon",
        },
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 4,
              title: "Poulet fumé",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 24,
              title: "Pomme de terre",
            },
            quantity: 1,
          },
        ],
        extras: [
          {
            ingredient: {
              id: 1,
              title: "Mozarella",
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 2,
              title: "Viande hachée",
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 25,
              title: "Oignons",
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
        ],
        allergens: ["Gluten", "Lactose", "Chicken"],
        nutritionValues: {
          energy: "600 kcal",
          fat: "40 g",
          saturatedFat: "18 g",
          carbohydrates: "35 g",
          salt: "4 g",
          proteins: "25 g",
        },
        tags: ["Fat food"],
        stars: 3,
      },
    ],
  },

  {
    // dessert 1
    id: 3,
    category: "dessert",
    title: "Les Desserts de la Peszata",
    products: [
      {
        id: 6,
        title: "Mousse au chocolat",
        description: "Délicieux dessert",
        price: 3.99,
        category: "dessert",
        picture: {
          src: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          alt: "Mousse au chocolat",
        },
        includedIngredients: [],
        extras: [],
        allergens: ["Gluten", "Lactose", "Chicken"],
        nutritionValues: {
          energy: "250 kcal",
          fat: "18 g",
          saturatedFat: "10 g",
          carbohydrates: "20 g",
          salt: "15 g",
          proteins: "3 g",
        },
        tags: ["Fat food"],
        stars: 3,
      },

      {
        // dessert 2
        id: 7,
        title: "Milkshake",
        description: "Délicieux dessert",
        price: 4.99,
        category: "dessert",
        picture: {
          src: "https://images.unsplash.com/photo-1626078436898-7c7953c04778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          alt: "Milkshake",
        },
        includedIngredients: [],
        extras: [],
        allergens: ["Gluten", "Lactose", "Chicken"],
        nutritionValues: {
          energy: "300 kcal",
          fat: "10 g",
          saturatedFat: "6 g",
          carbohydrates: "45 g",
          salt: "30 g",
          proteins: "8 g",
        },
        tags: ["Fat food"],
        stars: 4,
      },

      {
        // dessert 3
        id: 8,
        title: "Pana Cotta",
        description: "Délicieux dessert",
        price: 3.99,
        category: "dessert",
        picture: {
          src: "https://images.unsplash.com/photo-1559564121-d12c8f29e8cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          alt: "Pana Cotta",
        },
        includedIngredients: [],
        extras: [],
        allergens: ["Gluten", "Lactose", "Chicken"],
        nutritionValues: {
          energy: "250 kcal",
          fat: "20 g",
          saturatedFat: "12 g",
          carbohydrates: "15 g",
          salt: "10 g",
          proteins: "3 g",
        },
        tags: ["Fat food"],
        stars: 3,
      },

      {
        // dessert 4
        id: 9,
        title: "Pancake",
        description: "Délicieux dessert",
        price: 4.99,
        category: "dessert",
        picture: {
          src: "https://images.unsplash.com/photo-1565299543923-37dd37887442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=481&q=80",
          alt: "Pancake",
        },
        includedIngredients: [],
        extras: [],
        allergens: ["Gluten", "Lactose", "Chicken"],
        nutritionValues: {
          energy: "200 kcal",
          fat: "8 g",
          saturatedFat: "2 g",
          carbohydrates: "25 g",
          salt: "6 g",
          proteins: "6 g",
        },
        tags: ["No sugar"],
        stars: 3,
      },

      {
        // dessert 5
        id: 10,
        title: "Tiramisu",
        description: "Délicieux dessert",
        price: 4.99,
        category: "dessert",
        picture: {
          src: "https://images.unsplash.com/photo-1586040140378-b5634cb4c8fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80",
          alt: "Tiramisu",
        },
        includedIngredients: [],
        extras: [],
        allergens: ["Gluten", "Lactose", "Chicken"],
        nutritionValues: {
          energy: "350 kcal",
          fat: "20 g",
          saturatedFat: "12 g",
          carbohydrates: "35 g",
          salt: "1.5 g",
          proteins: "8 g",
        },
        tags: ["Fat food"],
        stars: 4,
      },
    ],
  },

  {
    // boisson 1
    id: 4,
    category: "drink",
    title: "Les Sodas de la Peszata",
    products: [
      {
        id: 11,
        title: "Eau",
        description: "eau",
        price: 2.00,
        category: "drink",
        picture: {
          src: "https://images.unsplash.com/photo-1612134678926-7592c521aa52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
          alt: "eau",
        },
        includedIngredients: [],
        extras: [],
        allergens: ["Gluten", "Lactose", "Chicken"],
        nutritionValues: {
          energy: "0 kcal",
          fat: "0 g",
          saturatedFat: "0 g",
          carbohydrates: "0 g",
          salt: "0 g",
          proteins: "0 g",
        },
        tags: ["Healthy"],
        stars: 5,
      },

      {
        // boisson 2
        id: 12,
        title: "Coca",
        description: "Coca Cola",
        price: 3.00,
        category: "drink",
        picture: {
          src: "https://images.unsplash.com/photo-1594971475674-6a97f8fe8c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          alt: "Coca",
        },
        includedIngredients: [],
        extras: [],
        allergens: ["Gluten", "Lactose", "Chicken"],
        nutritionValues: {
          energy: "140 kcal",
          fat: "15 g",
          saturatedFat: "0 g",
          carbohydrates: "39 g",
          salt: "1.5 g",
          proteins: "0 g",
        },
        tags: ["Sodas"],
        stars: 4,
      },

      {
        // boisson 3
        id: 13,
        title: "Coca Zero",
        description: "Coca Zero",
        price: 3.00,
        category: "drink",
        picture: {
          src: "https://images.unsplash.com/photo-1543253687-c931c8e01820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
          alt: "Coca Zero",
        },
        includedIngredients: [],
        extras: [],
        allergens: ["Gluten", "Lactose", "Chicken"],
        nutritionValues: {
          energy: "0 kcal",
          fat: "0 g",
          saturatedFat: "0 g",
          carbohydrates: "0 g",
          salt: "0g",
          proteins: "0 g",
        },
        tags: ["Healthy"],
        stars: 3,
      },

      {
        // boisson 4
        id: 14,
        title: "Limonade",
        description: "Limonade",
        price: 2.00,
        category: "drink",
        picture: {
          src: "https://images.unsplash.com/photo-1575596510825-f748919a2bf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          alt: "Limonade",
        },
        includedIngredients: [],
        extras: [],
        allergens: ["Gluten", "Lactose", "Chicken"],
        nutritionValues: {
          energy: "110 kcal",
          fat: "0 g",
          saturatedFat: "5 g",
          carbohydrates: "28 g",
          salt: "1.5 g",
          proteins: "0 g",
        },
        tags: ["Sodas"],
        stars: 5,
      },
    ],
  },
];
