/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-empty-function */
import { useLocalStorage } from "../hooks/useLocalStorage";
import { IExtraIngredient, IIncludedIngredients, IProduct } from "../mock/mock";
import { createContext, useContext } from "react";
// import { v4 as uuidv4 } from "uuid";

/* Interface article dans le Panier */
interface ICartProduct {
  id: number;
  product: IProduct;
  quantity: number;
}

// interface ICartProduct
export interface ICustum {
  id: number;
  product: IProduct;
  extras: IExtraIngredient[];
  totalPrice: number;
  exclu: IIncludedIngredients[];
  // quantity: number;
}
/* Interface panier */
export interface ICart {
  products: ICartProduct[];
  addOne: (product: IProduct, quantity: number) => void;
  removeOne: (product: IProduct) => void;
  removeProduct: (product: IProduct) => void;
  getTotalProduct: () => number;
  getTotalPrice: () => number;
  resetCart: () => void;
  addCustumOne: (
    product: IProduct,
    // ingredientQuantities: { [id: number]: number },
    extras: IExtraIngredient[],
    exclu: IIncludedIngredients[]
  ) => void;
}

/* Initialisation d'un panier par défaut */
const defaultCart: ICart = {
  products: [],
  addOne: () => { },
  removeOne: () => { },
  removeProduct: () => { },
  getTotalProduct: () => 0,
  getTotalPrice: () => 0,
  resetCart: () => {},
  addCustumOne: () => {},
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
  const [custum, setCustum] = useLocalStorage<ICustum[]>("cart-custum", []);

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
    // ingredientQuantities: { [id: number]: number },
    extras: IExtraIngredient[],
    exclu: IIncludedIngredients[]
  ) => {
    // prix total de extra
    const totalExtraPrice = extras.reduce(
      (total, extra) => total + extra.additionalPrice * extra.quantity,
      0
    );

    // prix total + extra
    const totalPrice = product.price + totalExtraPrice;

    const custumedProduct: ICustum = {
      id: Date.now() + Math.random(),
      product,
      extras,
      totalPrice,
      exclu,
    };

    /* Check if product exists in the cart */
    const foundProductIndex = custum.findIndex(
      (p) => p.product === custumedProduct.product
    );
    const updatedCustum = [...custum];
    if (foundProductIndex === -1) {
      updatedCustum.push(custumedProduct);
    } else {
      updatedCustum[foundProductIndex] = {
        ...updatedCustum[foundProductIndex],
        extras,
        totalPrice,
        exclu,
      };
    }

    setCustum(updatedCustum);

    // Update localStorage with the new data
    localStorage.setItem("cart-custum", JSON.stringify(updatedCustum));
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
    console.log("index", index);
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
