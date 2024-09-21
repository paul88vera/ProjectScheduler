import { getAllProjects, createProject } from "../api/projects";
import { redirect, useActionData } from "react-router-dom";
import PostForm, { postFormValidator } from "../components/PostForm";

export default function AddProject() {
  const errors = useActionData();

  return (
    <div className="p-4 md:p-16 grid grid-cols-1 gap-4 md:gap-16 w-full max-h-[100svh] overflow-y-scroll">
      <PostForm errors={errors} />
    </div>
  );
}

async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");

  const errors = postFormValidator({
    title,
  });

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const project = await createProject(
    {
      title,
    },
    { signal: request.signal }
  );

  return redirect(`/dashboard/projects/${project.id}`);
}

function loader({ request: { signal } }) {
  return getAllProjects({ signal });
}

// eslint-disable-next-line react-refresh/only-export-components
export const NewProject = {
  loader,
  action,
  element: <AddProject />,
};
