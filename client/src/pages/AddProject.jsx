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
  const ProjectName = formData.get("ProjectName");
  const StartDate = formData.get("StartDate");
  const DueDate = formData.get("DueDate");
  const ProjectStatus = formData.get("ProjectStatus");
  const ProjectPriority = formData.get("ProjectPriority");
  const Am = formData.get("Am");
  const AmDays = formData.get("AmDays");
  const Seo = formData.get("Seo");
  const SeoDays = formData.get("SeoDays");
  const CopyName = formData.get("CopyName");
  const CopyDays = formData.get("CopyDays");
  const Design = formData.get("Design");
  const DesignDays = formData.get("DesignDays");
  const Social = formData.get("Social");
  const SocialDays = formData.get("SocialDays");
  const Dev = formData.get("Dev");
  const DevDays = formData.get("DevDays");
  const ProjectColor = formData.get("ProjectColor");
  const Notes = formData.get("notes");

  const errors = postFormValidator({
    ProjectName,
    StartDate,
    DueDate,
    ProjectStatus,
    ProjectPriority,
    Am,
    Seo,
    CopyName,
    Design,
    Social,
    Dev,
    ProjectColor,
  });

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  // const event = await createNewEvent({
  //   ProjectNAe,
  //   StartDate,
  //   DueDate,
  // });

  const project = await createProject(
    {
      ProjectName,
      StartDate,
      DueDate,
      ProjectStatus,
      ProjectPriority,
      Am,
      AmDays,
      Seo,
      SeoDays,
      CopyName,
      CopyDays,
      Design,
      DesignDays,
      Social,
      SocialDays,
      Dev,
      DevDays,
      ProjectColor,
      Notes,
    },
    { signal: request.signal }
  );

  return redirect(`/dashboard/projects/${project.insertId}`);
}

async function loader({ request: { signal } }) {
  const projects = await getAllProjects({ signal });
  const users = await getAllUsers({ signal });
  // const events = getAllEvents({ signal });
  return { users: users, projects: projects };
}

// eslint-disable-next-line react-refresh/only-export-components
export const NewProject = {
  loader,
  action,
  element: <AddProject />,
};
