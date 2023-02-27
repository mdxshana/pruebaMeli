import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Detail } from "../pages/detail/Detail";
import { Searchs } from "../pages/search/Searchs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/items",
        element: <Searchs></Searchs>,
      },
      {
        path: "/items/:id",
        element: <Detail></Detail>,
      },
    ],
  },
]);
