import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import MainLayout from "./Layout/MainLayout/MainLayout";
import AuthLayout from "./Layout/AuthLayout/AuthLayout";

import Register from "./Pages/Auth/Register/Register";
import Login from "./Pages/Auth/Login/Login";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Products from "./Pages/All Products/Products";
import Cart from "./Pages/Cart/Cart";
import Favorites from "./Pages/Favorites/Favorites";
import PaymentPage from "./Pages/Payment Page/PaymentPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Navigate to="/login" replace /> },
        { path: "home", element: <Home /> },
        { path: "productDetails", element: <ProductDetails /> },
        { path: "products", element: <Products /> },
        { path: "cart", element: <Cart /> },
        { path: "favorites", element: <Favorites /> },
        { path: "payment", element: <PaymentPage /> },
      ],
    },

    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
