import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Layout from "./components/layouts/layout";
import Genre from "./components/movie-components/genre";
import Trending from "./components/movie-components/trending";
import Upcoming from "./components/movie-components/upcoming";
import Favorite from "./components/movie-components/favorite";

//creating the browser route:
const router = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/movie",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Genre/>

      },
      {
        path: "trending",
        element: <Trending />,
      },
      {
        path: "upcoming",
        element: <Upcoming />,
      },
      {
        path: "favorite",
        element: <Favorite />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
