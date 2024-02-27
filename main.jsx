import {createRoot} from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import { App } from "./src/App";
import { Category } from "./src/pages/Category";

import "./style.css"
import { About } from "./src/pages/About";
import { Collections } from "./src/pages/Collections";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
        path: "/category/all",
        element: <Category />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/collections",
        element: <Collections />
    },
  ]);

const root = createRoot(document.getElementById("app"))
root.render(<RouterProvider router={router} />)