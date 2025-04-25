import { createBrowserRouter, Navigate } from "react-router";
import { App } from "./app";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <App />
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  }

]);
