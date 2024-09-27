import { useLoaderData } from "react-router";
import { getProject } from "../api/projects";
import { Calendar } from "../components/Calendar";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProjectItem() {
  const item = useLoaderData();
  return (
    <div className="p-4 md:p-8 grid grid-cols-1 gap-4 md:gap-8 w-full max-h-[100svh] overflow-y-scroll">
      <Link to={`/dashboard/projects/${item.id}/edit`}>
        <FaEdit className="absolute right-2 top-2 cursor-pointer" />
      </Link>
      <div className="rounded-md w-full h-[50svh] overflow-x-scroll">
        <Calendar />
      </div>
      <div className="px-4 rounded-md w-full h-[50svh]">
        Project Information Bar: {item.title}
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
