import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { deleteProject, getProject, updateProject } from "../api/projects";
import PostForm, { postFormValidator } from "../components/PostForm";

export default function EditProject() {
  const project = useLoaderData();
  const errors = useActionData();
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";

  return (
    <div className="p-4 md:p-16 grid grid-cols-1 gap-4 md:gap-16 w-full max-h-[100svh] overflow-y-scroll">
      <PostForm
        isSubmitting={isSubmitting}
        errors={errors}
        defaultValues={project}
        buttonText={"save"}
      />
      <div className="absolute bottom-4 right-4 z-50">
        <button onClick={() => deleteProject(project.id)}>
          Delete Project
        </button>
      </div>
    </div>
  );
}

async function action({ request, params: { id } }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const start = formData.get("start");
  const status = formData.get("status");
  const priority = formData.get("priority");
  const due = formData.get("due");
  const am = formData.get("am");
  const amDays = formData.get("am-days");
  const seo = formData.get("seo");
  const seoDays = formData.get("seo-days");
  const copy = formData.get("copy");
  const copyDays = formData.get("copy-days");
  const design = formData.get("design");
  const designDays = formData.get("design-days");
  const social = formData.get("social");
  const socialDays = formData.get("social-days");
  const dev = formData.get("dev");
  const devDays = formData.get("dev-days");

  const errors = postFormValidator({
    title,
    start,
    status,
    priority,
    due,
    am,
    seo,
    copy,
    design,
    social,
    dev,
  });

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const updatedProject = await updateProject(
    id,
    {
      title,
      start,
      status,
      priority,
      due,
      am,
      amDays,
      seo,
      seoDays,
      copy,
      copyDays,
      design,
      designDays,
      social,
      socialDays,
      dev,
      devDays,
    },
    { signal: request.signal }
  );

  return redirect(`/dashboard/projects/${updatedProject.id}/`);
}

function loader({ request: { signal }, params: { id } }) {
  return getProject(id, { signal });
}

// eslint-disable-next-line react-refresh/only-export-components
export const EditProjectRoute = {
  action,
  loader,
  element: <EditProject />,
};
