import { Link, useLoaderData } from "react-router-dom";
import { getAllProjects } from "../api/projects";
import { formatDate } from "@fullcalendar/core/index.js";

export default function Completed() {
  const projects = useLoaderData();
  const filteredCompletedProjects = projects.filter((project) => {
    return project.status === "completed";
  });

  return (
    <div className="p-4 md:p-8 grid grid-cols-1 gap-4 md:gap-16 w-full max-h-[100svh] overflow-y-scroll">
      <div>
        <h1 className="text-2xl pb-4">Completed Projects</h1>
        {filteredCompletedProjects.length === 0 ? (
          <p>Wow! Such Empty... </p>
        ) : (
          <div className="rounded-md w-full max-h-[100svh]">
            <div className="flex flex-col gap-2 overflow-scroll">
              <div className="p-4 rounded-md grid grid-cols-10 text-center bg-[--global-color-dark-light-bg]">
                <h3>PROJECT</h3>
                <h3>START</h3>
                <h3>DUE</h3>
                <h3>AM</h3>
                <h3>DESIGN</h3>
                <h3>COPY</h3>
                <h3>SEO</h3>
                <h3>DEV</h3>
                <h3>SM</h3>
                <h3>STATUS</h3>
              </div>
              <div className="rounded-md grid grid-cols-1 text-center gap-2">
                {filteredCompletedProjects.map((item) => (
                  <Link
                    to={`/dashboard/projects/${item.id}`}
                    key={item.id}
                    className="hover:bg-[--global-color-light-accent] bg-[--global-color-dark-accent] p-4 rounded-md grid grid-cols-10 text-center"
                    title={item.title}>
                    <p className="overflow-x-scroll text-nowrap">
                      {item.title}
                    </p>
                    <p>
                      {formatDate(item.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                    <p>
                      {formatDate(item.due, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                    <p>{item.am}</p>
                    <p>{item.design}</p>
                    <p>{item.copy}</p>
                    <p>{item.seo}</p>
                    <p>{item.dev}</p>
                    <p>{item.social}</p>
                    <p>{item.status}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function loader({ request: { signal } }) {
  return getAllProjects({ signal });
}

// eslint-disable-next-line react-refresh/only-export-components
export const CompletedRoute = {
  loader,
  element: <Completed />,
};
