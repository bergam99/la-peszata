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
  allergens: IAllergen[];
  nutritionValues: INutritionValues;
}

export interface IAllergen {
  title: string;
  image: {
    src: string;
  }
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
  image : {
    src : string;
  }
}

export interface IIncludedIngredients {
  ingredient: IIngredient;
  quantity: number;
  image: {
    src: string;
  }

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
              title: "Sauce tomate",
            },
            image: {
              src: "https://images.unsplash.com/photo-1608949621301-dc970e104c90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 2,
              title: "Poulet",
            },
            image: {
              src: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1913&q=80",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 3,
              title: "Fromage",
            },
            image: {
              src: "https://images.unsplash.com/photo-1619860862294-1e96abc03d5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            },
            quantity: 1,
          },
        ],
        extras: [
          {
            ingredient: {
              id: 1,
              title: "Champignons",
            },
            image : {
              src : "https://images.unsplash.com/photo-1504545102780-26774c1bb073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1923&q=80"
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },

          {
            ingredient: {
              id: 2,
              title: "Olives",
            },
            image : {
              src : "https://images.unsplash.com/photo-1612879988258-0d819c297621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
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
            image : {
              src : "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
        ],
        allergens: [
          { title: "Gluten", image: { src: "https://plus.unsplash.com/premium_photo-1677100463916-0c8f463d2738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2x1dGVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" } },
          { title: "Lactose", image: { src: "https://media.istockphoto.com/id/1197819069/fr/photo/le-gamin-refuse-de-boire-du-lait-intol%C3%A9rance-au-lactose-un-enfant-intol%C3%A9rant-aux-produits.jpg?s=612x612&w=0&k=20&c=sx9WlASZSZW02GJYMF990_2yh3_Mi3fyLGTAipYU0FM=" } },
        ],

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
              title: "Fromage végétalien",
            },
            image: {
              src: "https://images.unsplash.com/photo-1573810655264-8d1e50f1592d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 2,
              title: "Légumes",
            },
            image: {
              src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1884&q=80",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 3,
              title: "Sauce tomate",
            },
            image: {
              src: "https://images.unsplash.com/photo-1608949621301-dc970e104c90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            },
            quantity: 1,
          },
        ],
        extras: [
          {
            ingredient: {
              id: 3,
              title: "Champignons",
            },
            image : {
              src : "https://images.unsplash.com/photo-1504545102780-26774c1bb073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1923&q=80"
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 2,
              title: "Olives",
            },
            image : {
              src : "https://images.unsplash.com/photo-1612879988258-0d819c297621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 25,
              title: "Poivrons",
            },
            image : {
              src : "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 25,
              title: "Épinards",
            },
            image : {
              src : "https://images.unsplash.com/photo-1580910365203-91ea9115a319?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 25,
              title: "Tomates cerises",
            },
            image : {
              src : "https://images.unsplash.com/photo-1570543375343-63fe3d67761b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
        ],
        allergens: [
          { title: "Gluten", image: { src: "https://plus.unsplash.com/premium_photo-1677100463916-0c8f463d2738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2x1dGVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" } },
          { title: "Soja", image: { src: "https://allergiesalimentairescanada.ca/wp-content/uploads/iStock-489566212-2.jpg" } },
          { title: "Fructose", image: { src: "https://plus.unsplash.com/premium_photo-1671379086168-a5d018d583cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" } },
        ],
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
              title: "Viande de boeuf",
            },
            image: {
              src: "https://images.unsplash.com/photo-1588347818036-558601350947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 4,
              title: "Fromage",
            },
            image: {
              src:
                "https://images.unsplash.com/photo-1619860862294-1e96abc03d5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 24,
              title: "Légumes",
            },
            image: {
              src:
                "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1884&q=80",
            },
            quantity: 1,
          },
        ],
        extras: [
          {
            ingredient: {
              id: 1,
              title: "Bacon",
            },
            image : {
              src : "https://images.unsplash.com/photo-1606851094655-b2593a9af63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 2,
              title: "Champignons",
            },
            image : {
              src : "https://images.unsplash.com/photo-1504545102780-26774c1bb073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1923&q=80"
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 25,
              title: "Œuf",
            },
            image : {
              src : ""
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 25,
              title: "Guacamole",
            },
            image : {
              src : "https://plus.unsplash.com/premium_photo-1679435364636-9ec5e2db10a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
        ],
        allergens: [
          { title: "Gluten", image: { src: "https://plus.unsplash.com/premium_photo-1677100463916-0c8f463d2738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2x1dGVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" } },
          { title: "Lactose", image: { src: "https://media.istockphoto.com/id/1197819069/fr/photo/le-gamin-refuse-de-boire-du-lait-intol%C3%A9rance-au-lactose-un-enfant-intol%C3%A9rant-aux-produits.jpg?s=612x612&w=0&k=20&c=sx9WlASZSZW02GJYMF990_2yh3_Mi3fyLGTAipYU0FM=" } },
        ],
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
              title: "Poulet pâné",
            },
            image: {

              src: "https://images.unsplash.com/photo-1615322681853-52a81fb318ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 4,
              title: "Légumes",
            },
            image: {

              src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1884&q=80",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 24,
              title: "Fromage",
            },
            image: {
              src: "https://images.unsplash.com/photo-1619860862294-1e96abc03d5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            },
            quantity: 1,
          },
        ],
        extras: [
          {
            ingredient: {
              id: 1,
              title: "Bacon",
            },
            image : {
              src : "https://images.unsplash.com/photo-1606851094655-b2593a9af63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 2,
              title: "Champignons",
            },
            image : {
              src : "https://images.unsplash.com/photo-1504545102780-26774c1bb073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1923&q=80"
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 25,
              title: "Œuf",
            },
            image : {
              src: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 25,
              title: "Guacamole",
            },
            image : {
              src : "https://plus.unsplash.com/premium_photo-1679435364636-9ec5e2db10a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
        ],
        allergens: [
          { title: "Gluten", image: { src: "https://plus.unsplash.com/premium_photo-1677100463916-0c8f463d2738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2x1dGVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" } },
          { title: "Lactose", image: { src: "https://media.istockphoto.com/id/1197819069/fr/photo/le-gamin-refuse-de-boire-du-lait-intol%C3%A9rance-au-lactose-un-enfant-intol%C3%A9rant-aux-produits.jpg?s=612x612&w=0&k=20&c=sx9WlASZSZW02GJYMF990_2yh3_Mi3fyLGTAipYU0FM=" } },
        ],
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
              title: "Viande de boeuf",
            },
            image: {
              src: "https://images.unsplash.com/photo-1588347818036-558601350947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 4,
              title: "Fromage",
            },
            image: {
              src: "https://images.unsplash.com/photo-1619860862294-1e96abc03d5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 24,
              title: "Bacon",
            },
            image: {
              src : "https://images.unsplash.com/photo-1606851094655-b2593a9af63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
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
            image : {
              src : "https://plus.unsplash.com/premium_photo-1677619680421-0711c670a970?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
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
            image : {
              src : ""
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
            image : {
              src : "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 1,
              title: "Bacon",
            },
            image : {
              src : "https://images.unsplash.com/photo-1606851094655-b2593a9af63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 2,
              title: "Champignons",
            },
            image : {
              src : "https://images.unsplash.com/photo-1504545102780-26774c1bb073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1923&q=80"
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 25,
              title: "Œuf",
            },
            image : {
              src : ""
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },
          {
            ingredient: {
              id: 25,
              title: "Guacamole",
            },
            image : {
              src : "https://plus.unsplash.com/premium_photo-1679435364636-9ec5e2db10a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            },
            quantity: 0,
            maxQuantity: 3,
            additionalPrice: 0.5,
          },

        ],
        allergens: [
          { title: "Gluten", image: { src: "https://plus.unsplash.com/premium_photo-1677100463916-0c8f463d2738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2x1dGVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" } },
          { title: "Lactose", image: { src: "https://media.istockphoto.com/id/1197819069/fr/photo/le-gamin-refuse-de-boire-du-lait-intol%C3%A9rance-au-lactose-un-enfant-intol%C3%A9rant-aux-produits.jpg?s=612x612&w=0&k=20&c=sx9WlASZSZW02GJYMF990_2yh3_Mi3fyLGTAipYU0FM=" } },
        ],
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
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Chocolat noir",
            },
            image: {
              src: "https://images.unsplash.com/photo-1610450949065-1f2841536c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",

            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 1,
              title: "Crème",
            },
            image: {
              src:
                "https://images.unsplash.com/photo-1519915051686-9fe6ee13633e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 1,
              title: "Oeufs",
            },
            image: {
              src: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            },
            quantity: 1,
          },
        ],
        extras: [],
        allergens: [
          {
            title: "Oeuf",
            image: {
              src: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            }
          },
          { title: "Lactose", image: { src: "https://media.istockphoto.com/id/1197819069/fr/photo/le-gamin-refuse-de-boire-du-lait-intol%C3%A9rance-au-lactose-un-enfant-intol%C3%A9rant-aux-produits.jpg?s=612x612&w=0&k=20&c=sx9WlASZSZW02GJYMF990_2yh3_Mi3fyLGTAipYU0FM=" } },



        ], nutritionValues: {
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
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Lait",
            },
            image: {
              src: "https://images.unsplash.com/photo-1600788907416-456578634209?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 1,
              title: "Crème glacée",
            },
            image: {
              src: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            },
            quantity: 1,
          },
        ],
        extras: [],
        allergens: [
          { title: "Fructose", image: { src: "https://plus.unsplash.com/premium_photo-1671379086168-a5d018d583cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" } },
          { title: "Lactose", image: { src: "https://media.istockphoto.com/id/1197819069/fr/photo/le-gamin-refuse-de-boire-du-lait-intol%C3%A9rance-au-lactose-un-enfant-intol%C3%A9rant-aux-produits.jpg?s=612x612&w=0&k=20&c=sx9WlASZSZW02GJYMF990_2yh3_Mi3fyLGTAipYU0FM=" } },
        ], nutritionValues: {
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
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Crème",
            },
            image: {
              src: "https://images.unsplash.com/photo-1519915051686-9fe6ee13633e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 1,
              title: "Vanille",
            },
            image: {
              src: "https://www.mamienova.com/wp-content/uploads/2021/04/Vanille-min.png",

            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 1,
              title: "Gélatine",
            },
            image: {
              src: ""
            },
            quantity: 1,
          },
        ],
        extras: [],
        allergens: [
          { title: "Gélatine", image: { src: "chemin_vers_image_gluten" } },
          { title: "Lactose", image: { src: "https://media.istockphoto.com/id/1197819069/fr/photo/le-gamin-refuse-de-boire-du-lait-intol%C3%A9rance-au-lactose-un-enfant-intol%C3%A9rant-aux-produits.jpg?s=612x612&w=0&k=20&c=sx9WlASZSZW02GJYMF990_2yh3_Mi3fyLGTAipYU0FM=" } },
        ], nutritionValues: {
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
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Farine",
            },
            image: {
              src: "https://images.unsplash.com/photo-1638405803129-07b101e6a205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",

            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 1,
              title: "Oeufs",
            },
            image: {
              src: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",

            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 1,
              title: "Lait",
            },
            image: {
              src: "https://images.unsplash.com/photo-1600788907416-456578634209?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",

            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 1,
              title: "Beurre",
            },
            image:
            {
              src: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            },
            quantity: 1,
          },
        ],
        extras: [],
        allergens: [
          { title: "Gluten", image: { src: "https://plus.unsplash.com/premium_photo-1677100463916-0c8f463d2738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2x1dGVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" } },
          { title: "Lactose", image: { src: "https://media.istockphoto.com/id/1197819069/fr/photo/le-gamin-refuse-de-boire-du-lait-intol%C3%A9rance-au-lactose-un-enfant-intol%C3%A9rant-aux-produits.jpg?s=612x612&w=0&k=20&c=sx9WlASZSZW02GJYMF990_2yh3_Mi3fyLGTAipYU0FM=" } },
          {
            title: "Oeuf", image: {
              src: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            }
          },

        ],
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
        includedIngredients: [
          {
            ingredient: {
              id: 1,
              title: "Biscuits",
            },
            image: {

              src: "https://images.unsplash.com/photo-1622405207562-735fa49ff7f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 1,
              title: "Mascarpone",
            },
            image: {
              src: "https://images.unsplash.com/photo-1603807744454-568f048512b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 1,
              title: "Oeufs",
            },
            image: {
              src: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 1,
              title: "Café",
            },
            image: {
              src:
                "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            },
            quantity: 1,
          },
          {
            ingredient: {
              id: 1,
              title: "Cacao",
            },
            image: {
              src: "https://images.unsplash.com/photo-1493925410384-84f842e616fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
            },
            quantity: 1,
          },
        ],
        extras: [],
        allergens: [
          { title: "Gluten", image: { src: "https://plus.unsplash.com/premium_photo-1677100463916-0c8f463d2738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2x1dGVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" } },
          { title: "Lactose", image: { src: "https://media.istockphoto.com/id/1197819069/fr/photo/le-gamin-refuse-de-boire-du-lait-intol%C3%A9rance-au-lactose-un-enfant-intol%C3%A9rant-aux-produits.jpg?s=612x612&w=0&k=20&c=sx9WlASZSZW02GJYMF990_2yh3_Mi3fyLGTAipYU0FM=" } },
        ],
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
        price: 2.0,
        category: "drink",
        picture: {
          src: "https://images.unsplash.com/photo-1612134678926-7592c521aa52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
          alt: "eau",
        },
        includedIngredients: [],
        extras: [],
        allergens: [],
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
        price: 3.0,
        category: "drink",
        picture: {
          src: "https://images.unsplash.com/photo-1594971475674-6a97f8fe8c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
          alt: "Coca",
        },
        includedIngredients: [],
        extras: [],
        allergens: [],
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
        price: 3.0,
        category: "drink",
        picture: {
          src: "https://images.unsplash.com/photo-1543253687-c931c8e01820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
          alt: "Coca Zero",
        },
        includedIngredients: [],
        extras: [],
        allergens: [],
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
        price: 2.0,
        category: "drink",
        picture: {
          src: "https://images.unsplash.com/photo-1575596510825-f748919a2bf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
          alt: "Limonade",
        },
        includedIngredients: [],
        extras: [],
        allergens: [],
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
