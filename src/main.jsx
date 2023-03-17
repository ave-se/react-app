import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root";
import About from "./routes/About";
import Contact from "./routes/Contact";
import CounsellorGallery, {
  loader as counsellorGalleryLoader,
} from "./routes/CounsellorGallery";
import Homepage from "./routes/Homepage";
import ProfileView, {
  loader as profileViewLoader,
} from "./components/ProfileView";

import "./index.css";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
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
        loader: counsellorGalleryLoader,
      },
      {
        path: "gallery/:profileId",
        element: <ProfileView />,
        loader: profileViewLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
