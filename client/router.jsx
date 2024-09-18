import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./src/layouts/RootLayout";
import ErrorMessage from "./src/pages/ErrorMessage";
import InProgress from "./src/pages/InProgress";
import Late from "./src/pages/Late";
import Completed from "./src/pages/Completed";
import AddProject from "./src/pages/AddProject";
import { DashboardRoute } from "./src/pages/Dashboard";
import { ProjectItemRoute } from "./src/pages/ProjectItem";

const containerStyle =
  "p-4 md:p-16 grid grid-cols-1 gap-4 md:gap-16 w-full h-[100svh]";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorMessage />,
        children: [
          { index: true, element: <Navigate to="/dashboard" /> },
          {
            path: "dashboard",
            children: [
              {
                index: true,
                ...DashboardRoute,
              },
              {
                path: "projects/:id",
                children: [
                  {
                    index: true,
                    ...ProjectItemRoute,
                  },
                ],
              },
            ],
          },
          {
            path: "in-progress",
            element: <InProgress containerStyle={containerStyle} />,
          },
          { path: "late", element: <Late containerStyle={containerStyle} /> },
          {
            path: "completed",
            element: <Completed containerStyle={containerStyle} />,
          },
          {
            path: "/api/add-project",
            element: <AddProject containerStyle={containerStyle} />,
          },
        ],
      },
    ],
  },
]);
