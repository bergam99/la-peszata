/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-empty-function */
import { useLocalStorage } from "../hooks/useLocalStorage";
import { IExtraIngredient, IProduct } from "../mock/mock";
import { createContext, useContext } from "react";
// import { v4 as uuidv4 } from "uuid";

/* Interface article dans le Panier */
interface ICartProduct {
  id: number;
  product: IProduct;
  quantity: number;
}

/* Interface panier */
interface ICart {
  products: ICartProduct[];
  addOne: (product: IProduct, quantity: number) => void;
  removeOne: (product: IProduct) => void;
  removeProduct: (product: IProduct) => void;
  getTotalProduct: () => number;
  getTotalPrice: () => number;
  resetCart: () => void;
  addCustumOne: (
    product: IProduct,
    ingredientQuantities: { [id: number]: number }, // Add ingredientQuantities parameter
    extras: IExtraIngredient[]
  ) => void;

  // addCustum: (
  //   product: IProduct,
  //   quantity: number,
  //   extras: IExtraIngredient[]
  // ) => void;
}

/* Initialisation d'un panier par défaut */
const defaultCart: ICart = {
  products: [],
  addOne: () => { },
  removeOne: () => { },
  removeProduct: () => { },
  getTotalProduct: () => 0,
  getTotalPrice: () => 0,
  resetCart: () => { },
  addCustumOne: () => { },
  // addCustum: () => {},
};

/* Initialisation d'un contexte */
const CartContext = createContext<ICart>(defaultCart);

/* Provider */
interface CartProviderProps {
  children: JSX.Element;
}

export const CartProvider = (props: CartProviderProps) => {
  const { children } = props;
  const [cartProducts, setCartProducts] = useLocalStorage<ICartProduct[]>(
    "cart",
    []
  );

  /* Function add product(s) to cart */
  const addOne = (product: IProduct, quantity: number) => {
    const newProduct = {
      id: Date.now() + Math.random(),
      product,
      quantity,
    };
    /* check if product exist in the cart */
    const foundProduct = cartProducts.find(
      (p) => p.product === newProduct.product
    );

    if (!foundProduct) {
      setCartProducts([...cartProducts, newProduct]);
    } else {
      /* add quantity */
      foundProduct.quantity += 1;
      setCartProducts([...cartProducts]);
    }
    // console.log(cartProducts);
  };
  // ============================== CUSTUM =====================================

  const addCustumOne = (
    product: IProduct,
    ingredientQuantities: { [id: number]: number }, // Add ingredientQuantities parameter
    extras: IExtraIngredient[]
  ) => {
    const totalExtraPrice = extras.reduce(
      (total, extra) => total + extra.additionalPrice * extra.quantity,
      0
    );
    console.log("totalExtraPrice : ", totalExtraPrice);

    const totalIncludedIngredients = Object.values(ingredientQuantities).reduce(
      (total, quantity) => total + quantity,
      0
    );

    const totalPrice = product.price + totalExtraPrice;

    const newProduct = {
      id: Date.now() + Math.random(),
      product,
      quantity: totalIncludedIngredients, // Use totalIncludedIngredients as quantity
      extras,
      totalPrice,
    };

    /* Check if product exists in the cart */
    const foundProduct = cartProducts.find(
      (p) => p.product === newProduct.product
    );

    if (!foundProduct) {
      setCartProducts([...cartProducts, newProduct]);
    } else {
      /* Add quantity */
      foundProduct.quantity += 1;
      setCartProducts([...cartProducts]);
    }

    /* Store the updated cartProducts in localStorage */
    // localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    // console.log("cartProducts", cartProducts);
  };

  /* Function to remove quantity from a product */
  const removeOne = (product: IProduct) => {
    const foundProduct = cartProducts.find((p) => p.product.id === product.id);

    // console.log("found", foundProduct);
    if (!foundProduct) {
      return;
    } else {
      if (foundProduct.quantity > 1) {
        foundProduct.quantity -= 1;
        setCartProducts([...cartProducts]);
      } else {
        removeProduct(product);
        setCartProducts([...cartProducts]);
      }
    }
    const index = cartProducts.indexOf(foundProduct);
    // console.log("index", index);
  };

  /*  Function to remove a product from the cart */
  const removeProduct = (product: IProduct) => {
    const foundProduct = cartProducts.find((p) => p.product.id === product.id);
    if (foundProduct) {
      const index = cartProducts.indexOf(foundProduct);
      cartProducts.splice(index, 1);
      setCartProducts([...cartProducts]);
    }
    return cartProducts;
  };

  /* Function to get the total quantity of the cart */
  const getTotalProduct = () => {
    const totalProducts = cartProducts.reduce(
      (accumulator: number, currentValue: ICartProduct) => {
        return (accumulator += currentValue.quantity);
      },
      0
    );
    return totalProducts;
  };

  /* Function to get the total price of the cart */
  const getTotalPrice = () => {
    const totalPrice = cartProducts.reduce(
      (accumulator: number, currentValue: ICartProduct) => {
        return (accumulator +=
          currentValue.product.price * currentValue.quantity);
      },
      0
    );
    return totalPrice;
  };

  /* Function to reset the cart */
  const resetCart = () => {
    setCartProducts([]);
  };

  
 
  const cart: ICart = {
    products: cartProducts,
    addOne,
    removeOne,
    removeProduct,
    getTotalProduct,
    getTotalPrice,
    resetCart,
    addCustumOne,
   
  };

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
