import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",              // rota principal
    element: <App />,       // seu App
    errorElement: <ErrorPage />, // página de erro personalizada
  },
]);

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
