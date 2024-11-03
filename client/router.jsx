import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./src/layouts/RootLayout";
import ErrorMessage from "./src/pages/ErrorMessage";
import { PendingRoute } from "./src/pages/Pending";
import { CompletedRoute } from "./src/pages/Completed";
import { NewProject } from "./src/pages/AddProject";
import { DashboardRoute } from "./src/pages/Dashboard";
import { ProjectItemRoute } from "./src/pages/ProjectItem";
import { EditProjectRoute } from "./src/pages/EditProject";
import { ActiveProjectsRoute } from "./src/pages/ActiveProjects";
import Error from "./src/pages/Error";

// * CSS for Pages that are not Routes yet */
// const containerStyle =
//   "p-4 md:p-8 grid grid-cols-1 gap-4 md:gap-16 w-full h-full overflow-y-scroll";

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
            path: "overview",
            ...ActiveProjectsRoute,
          },
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
                  {
                    path: "edit",
                    ...EditProjectRoute,
                  },
                ],
              },
            ],
          },
          {
            path: "pending",
            ...PendingRoute,
          },
          {
            path: "completed",
            ...CompletedRoute,
          },
          {
            path: "add-project",
            ...NewProject,
          },
          {
            path: "*",
            element: <Error />,
          },
        ],
      },
    ],
  },
]);
