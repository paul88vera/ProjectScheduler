import { Link, useLoaderData } from "react-router-dom";
import { Calendar } from "../components/Calendar";
import { getAllProjects } from "../api/projects";

export default function Dashboard() {
  const projects = useLoaderData();

  return (
    <div
      id="dashboard_container"
      className={`p-4 md:p-16 grid-cols-1 grid-rows-2 md:gap-16 w-full h-[100svh] flex flex-col gap-8`}>
      <div
        id="top_grid"
        className="border-l-rose-300 border p-4 rounded-md w-full h-[50svh]">
        <Calendar />
      </div>
      <div
        id="bottom_grid"
        className="border-l-rose-300 border p-4 rounded-md w-full h-[50svh]">
        {/* TODO: Make this a map inside Dashboard first and then try to make it a prop  */}
        <div>
          Project Data Stuff:{" "}
          <div className="flex flex-col gap-2 p-2">
            {projects.map((item) => (
              <Link
                to={`/dashboard/projects/${item.id}`}
                key={item.id}
                className="hover:bg-white hover:text-black p-4 rounded-md">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function loader({ request: { signal } }) {
  return getAllProjects({ signal });
}

// eslint-disable-next-line react-refresh/only-export-components
export const DashboardRoute = {
  loader,
  element: <Dashboard />,
};
