import { useLoaderData } from "react-router";
import { getProject } from "../api/projects";

export default function ProjectItem() {
  const item = useLoaderData();
  return (
    <div className="p-4 md:p-16 grid grid-cols-1 gap-4 md:gap-16 w-full h-[100svh]">
      <div className="border-l-rose-300 border p-4 rounded-md w-full h-[50svh]">
        Project Item {item.id}
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
