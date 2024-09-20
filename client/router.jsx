import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./src/layouts/RootLayout";
import ErrorMessage from "./src/pages/ErrorMessage";
import ActiveProjects from "./src/pages/ActiveProjects";
import Pending from "./src/pages/Pending";
import Completed from "./src/pages/Completed";
import AddProject from "./src/pages/AddProject";
import { DashboardRoute } from "./src/pages/Dashboard";
import { ProjectItemRoute } from "./src/pages/ProjectItem";

const containerStyle =
  "p-4 md:p-16 grid grid-cols-1 gap-4 md:gap-16 w-full max-h-[100svh] overflow-y-scroll";

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
            path: "active",
            element: <ActiveProjects containerStyle={containerStyle} />,
          },
          {
            path: "pending",
            element: <Pending containerStyle={containerStyle} />,
          },
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
