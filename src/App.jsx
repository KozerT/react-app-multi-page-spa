import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Root from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
