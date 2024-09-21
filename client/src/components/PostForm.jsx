import { Form } from "react-router-dom";
import FormGroup from "./FormGroup";

// eslint-disable-next-line react/prop-types
export default function PostForm({ errors = {} }) {
  return (
    <Form
      method="post"
      className="bg-[--global-color-dark-light-bg] p-4 md:p-16 rounded-md w-full h-[85svh] grid grid-cols-1 md:grid-cols-2 md:gap-16">
      <div className="flex flex-col gap-8">
        <FormGroup errorMessage={errors.title}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Project Title"
          />
        </FormGroup>
      </div>
      <div className="flex flex-col gap-8 h-full justify-between">
        <FormGroup>Add A New Input</FormGroup>
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <button className="p-4 bg-[--global-color-dark-text] rounded-md font-bold hover:bg-[--global-color-dark-accent]">
            Cancel
          </button>
          <button className="p-4 bg-[--global-color-light-accent] rounded-md font-bold hover:bg-[--global-color-dark-accent]">
            Submit
          </button>
        </div>
      </div>
    </Form>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function postFormValidator({ title }) {
  const errors = {};

  if (title === "") {
    errors.title = "Required";
  }

  return errors;
}
