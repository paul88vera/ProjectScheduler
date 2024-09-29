import { getAllProjects, createProject } from "../api/projects";
import { getAllUsers } from "../api/users";
import { redirect, useActionData, useNavigation } from "react-router-dom";
import PostForm, { postFormValidator } from "../components/PostForm";
// import { getAllEvents } from "../api/events";

export default function AddProject() {
  const errors = useActionData();
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";

  return (
    <div className="p-4 md:p-8 grid grid-cols-1 gap-4 md:gap-16 w-full max-h-[100svh] overflow-y-scroll">
      <PostForm
        isSubmitting={isSubmitting}
        errors={errors}
        buttonText="create"
      />
    </div>
  );
}

async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const start = formData.get("start");
  const due = formData.get("due");
  const status = formData.get("status");
  const priority = formData.get("priority");
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
  const colors = formData.get("colors");

  const errors = postFormValidator({
    title,
    start,
    due,
    status,
    priority,
    am,
    seo,
    copy,
    design,
    social,
    dev,
    colors,
  });

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  // const event = await createNewEvent({
  //   title,
  //   start,
  //   due,
  // });

  const project = await createProject(
    {
      title,
      start,
      due,
      status,
      priority,
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
      colors,
    },
    { signal: request.signal }
  );
  return redirect(`/dashboard/projects/${project.id}`);
}

async function loader({ request: { signal } }) {
  const projects = getAllProjects({ signal });
  const users = getAllUsers({ signal });
  // const events = getAllEvents({ signal });
  return { users: await users, projects: projects };
}

// eslint-disable-next-line react-refresh/only-export-components
export const NewProject = {
  loader,
  action,
  element: <AddProject />,
};
