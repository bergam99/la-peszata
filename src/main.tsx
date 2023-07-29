import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./Router/AppRouter.tsx";
import { CartProvider } from "./context/ShoppingCartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </CartProvider>
);
