import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root";
import About from "./routes/About";
import Contact from "./routes/Contact";
import CounsellorGallery from "./routes/CounsellorGallery";
import Homepage from "./routes/Homepage";

import "./index.css";
import ErrorPage from "./error-page";
import { redirect } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  //about | contact | gallery

  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Homepage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "gallery",
        element: <CounsellorGallery />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
