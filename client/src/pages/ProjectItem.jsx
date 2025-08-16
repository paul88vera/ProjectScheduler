import { useLoaderData } from "react-router";
import { getProject } from "../api/projects";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatDate } from "@fullcalendar/core/index.js";

export default function ProjectItem() {
  const { item } = useLoaderData();

  return (
    <div className="p-4 md:p-8 flex flex-col flex-nowrap gap-4 md:gap-4 w-full max-h-[100svh] overflow-y-scroll justify-start">
      <Link
        to={`/dashboard/projects/${item[0].ProjectID}/edit`}
        className="absolute right-4 top-4">
        <FaEdit className="cursor-pointer text-[1.5rem] hover:text-[1.7rem] text-[--global-color-warning] transition-all ease-in-out" />
      </Link>

      <div className="rounded-md w-full">
        <h1 className="text-2xl pb-4">{item[0].ProjectName}</h1>
        <div id="bottom_grid" className="rounded-md overflow-x-scroll">
          {item[0].length === 0 ? (
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
                  key={item[0].ProjectID}
                  className="bg-[--global-color-dark-accent] p-4 rounded-md grid grid-cols-10 text-center"
                  title={item[0].ProjectName}>
                  <p className="overflow-x-scroll text-nowrap">
                    {item[0].ProjectName}
                  </p>
                  <p>
                    {formatDate(item[0].StartDate, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <p>
                    {formatDate(item[0].DueDate, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <p>{item[0].Am}</p>
                  <p>{item[0].Design}</p>
                  <p>{item[0].CopyName}</p>
                  <p>{item[0].Seo}</p>
                  <p>{item[0].Dev}</p>
                  <p>{item[0].Social}</p>
                  <p>{item[0].ProjectStatus}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="px-4 rounded-md w-full">
        <h2 className="text-2xl mt-2 mb-2">Project Comments/Notes:</h2>
        <p>{item[0].Notes}</p>
      </div>
    </div>
  );
}

async function loader({ request: { signal }, params: { id } }) {
  const item = await getProject(id, { signal });
  return { item: item };
}

// eslint-disable-next-line react-refresh/only-export-components
export const ProjectItemRoute = {
  loader,
  element: <ProjectItem />,
};
