import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { deleteProject, getProject, updateProject } from "../api/projects";
import PostForm, { postFormValidator } from "../components/PostForm";
import { FaTrashAlt } from "react-icons/fa";

export default function EditProject() {
  const project = useLoaderData();
  const errors = useActionData();
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";

  return (
    <div className="p-4 md:p-8 grid grid-cols-1 gap-4 md:gap-16 w-full max-h-[100svh] overflow-y-scroll">
      <PostForm
        isSubmitting={isSubmitting}
        errors={errors}
        defaultValues={project[0]}
        buttonText={"save"}
      />
      <div className="absolute top-4 right-4 z-50">
        <FaTrashAlt
          onClick={() => deleteProject(project[0].ProjectID)}
          className="text-[--global-color-priority] text-[1.7rem] cursor-pointer hover:text-[2rem] transition-all  ease-in-out"
        />
      </div>
    </div>
  );
}

async function action({ request, params: { id } }) {
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

  const updatedProject = await updateProject(
    id,
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
  updatedProject;

  return redirect(`/dashboard/projects/${id}`);
}

async function loader({ request: { signal }, params: { id } }) {
  const project = await getProject(id, { signal });
  return project;
}

// eslint-disable-next-line react-refresh/only-export-components
export const EditProjectRoute = {
  action,
  loader,
  element: <EditProject />,
};
