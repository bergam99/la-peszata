import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import DetailProduct, { productLoader } from "../pages/DetailProduct/DetailProduct";
import Panier from "../pages/Panier/Panier";
import Payment from "../pages/Payment/Payment";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";
import Products, { productsLoader } from "../pages/Products/Products";


const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
          loader: productsLoader

        },
        {
          path: "/products/:id",
          element: <DetailProduct />,
          loader: productLoader

        },
        {
          path: "/panier",
          element: <Panier />,
        },
        {
          path: "/payment",
          element: <Payment />,
        },
        {
          path: "/paymentsuccess",
          element: <PaymentSuccess />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
