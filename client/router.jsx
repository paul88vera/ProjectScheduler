import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./src/layouts/RootLayout";
import ErrorMessage from "./src/pages/ErrorMessage";
import Dashboard from "./src/pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorMessage />,
        children: [
          { index: true, element: <Navigate to="/dashboard" /> },
          { path: "dashboard", element: <Dashboard /> },
        ],
      },
    ],
  },
]);
