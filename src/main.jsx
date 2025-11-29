import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./layout/Root";
import Home from "./Pages/Home/Home";
import ShopNow from "./Pages/ShopNow/ShopNow";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import ProductDetails from "./Pages/ShopNow/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/shop-now", element: <ShopNow /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/shop-now/:id", element: <ProductDetails /> },
    ],
  },
  {
    path: "/dashboard",
    element: <h1>dashboard</h1>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
