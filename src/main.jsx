import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Users from "./Components/Home/Users/Users";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <div>Hello from react router!</div>,
  // },
  // {
  //   path: "/about",
  //   element: <div>I am from about page</div>,
  // },
  // {
  //   path: "/contact",
  //   element: <div>Call me right now!!</div>,
  // },

  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
