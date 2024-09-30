import { useLoaderData } from "react-router";
import { getProject } from "../api/projects";
// import { Calendar } from "../components/Calendar";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatDate } from "@fullcalendar/core/index.js";

export default function ProjectItem() {
  const item = useLoaderData();

  return (
    <div className="p-4 md:p-8 grid grid-cols-1 gap-4 md:gap-4 w-full max-h-[100svh] overflow-y-scroll">
      <Link
        to={`/dashboard/projects/${item.id}/edit`}
        className="absolute right-4 top-4">
        <FaEdit className="cursor-pointer text-[1.5rem] hover:text-[1.7rem] text-[--global-color-warning] transition-all ease-in-out" />
      </Link>

      <div className="rounded-md w-full">
        <h1 className="text-2xl pb-4">{item.title}</h1>
        <div id="bottom_grid" className="rounded-md overflow-x-scroll">
          {item.length === 0 ? (
            <p>Wow! Such Empty...</p>
          ) : (
            <div className="flex flex-col gap-2 min-w-[800px] overflow-scroll">
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
                <div
                  key={item.id}
                  className="bg-[--global-color-dark-accent] p-4 rounded-md grid grid-cols-10 text-center"
                  title={item.title}>
                  <p className="overflow-x-scroll text-nowrap">{item.title}</p>
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
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="px-4 rounded-md w-full h-[50svh]">
        Project Schedule Bar: {item.title}
      </div>
    </div>
  );
}

function loader({ request: { signal }, params: { id } }) {
  return getProject(id, { signal });
}

// eslint-disable-next-line react-refresh/only-export-components
export const ProjectItemRoute = {
  loader,
  element: <ProjectItem />,
};
