import { Form, Link } from "react-router-dom";
import FormGroup from "./FormGroup";

// eslint-disable-next-line react/prop-types
export default function PostForm({ errors = {} }) {
  return (
    <Form
      method="post"
      className="bg-[--global-color-dark-light-bg] p-4 md:p-8  rounded-md w-full md:h-[85svh] grid grid-cols-1 md:grid-cols-2 md:gap-16">
      <div className="flex flex-col gap-8">
        <FormGroup errorMessage={errors.title}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Project Title"
          />
        </FormGroup>
        <div className="flex flex-row gap-4">
          <label>
            status:{" "}
            <select name="status" id="status">
              <option value="active" defaultChecked>
                active
              </option>
              <option value="pending">pending</option>
              <option value="completed">completed</option>
            </select>
          </label>

          <label htmlFor="priority">
            priority:{" "}
            <select name="priority" id="priority">
              <option value="normal" defaultChecked>
                normal
              </option>
              <option value="priority">priority</option>
            </select>
          </label>
        </div>
        <div className="flex flex-row flex-nowrap gap-0 max-w-lg justify-start">
          <FormGroup errorMessage={errors.start}>
            <label htmlFor="start">
              start date:
              <input type="date" name="start" id="start" placeholder="start" />
            </label>
          </FormGroup>
          <FormGroup errorMessage={errors.due}>
            <label htmlFor="due">
              due date:
              <input type="date" name="due" id="due" placeholder="due" />
            </label>
          </FormGroup>
        </div>
        <FormGroup errorMessage={errors.am}>
          <input type="text" name="am" id="am" placeholder="account manager" />
          <input
            type="number"
            name="am-days"
            id="am-days"
            placeholder="days"
            defaultValue={7}
          />
        </FormGroup>
        <FormGroup errorMessage={errors.seo}>
          <input type="text" name="seo" id="seo" placeholder="seo manager" />
          <input
            type="number"
            name="seo-days"
            id="seo-days"
            placeholder="days"
            defaultValue={7}
          />
        </FormGroup>
        <FormGroup errorMessage={errors.copy}>
          <input type="text" name="copy" id="copy" placeholder="copy" />
          <input
            type="number"
            name="copy-days"
            id="copy-days"
            placeholder="days"
            defaultValue={7}
          />
        </FormGroup>
        <FormGroup errorMessage={errors.design}>
          <input type="text" name="design" id="design" placeholder="design" />
          <input
            type="number"
            name="design-days"
            id="design-days"
            placeholder="days"
            defaultValue={7}
          />
        </FormGroup>
        <FormGroup errorMessage={errors.social}>
          <input type="text" name="social" id="social" placeholder="social" />
          <input
            type="number"
            name="social-days"
            id="social-days"
            placeholder="days"
            defaultValue={3}
          />
        </FormGroup>
        <FormGroup errorMessage={errors.dev}>
          <input type="text" name="dev" id="dev" placeholder="dev" />
          <input
            type="number"
            name="dev-days"
            id="dev-days"
            placeholder="days"
            defaultValue={10}
          />
        </FormGroup>
      </div>

      {/* Form Buttons */}
      <div className="flex flex-col gap-8 h-full justify-between">
        <FormGroup></FormGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <Link
            to={`/dashboard`}
            className="p-4 bg-[--global-color-dark-text] text-center rounded-md font-bold hover:bg-[--global-color-dark-accent]">
            cancel
          </Link>
          <button className="p-4 bg-[--global-color-light-accent] rounded-md font-bold hover:bg-[--global-color-dark-accent]">
            create
          </button>
        </div>
      </div>
    </Form>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function postFormValidator({
  title,
  start,
  due,
  am,
  seo,
  copy,
  design,
  social,
  dev,
}) {
  const errors = {};

  if (title === "") {
    errors.title = "Required";
  }
  if (start === "") {
    errors.start = "Required";
  }
  if (due === "") {
    errors.due = "Required";
  }
  if (am === "") {
    errors.am = "Required";
  }
  if (seo === "") {
    errors.seo = "Required";
  }
  if (copy === "") {
    errors.copy = "Required";
  }
  if (design === "") {
    errors.design = "Required";
  }
  if (social === "") {
    errors.social = "Required";
  }
  if (dev === "") {
    errors.dev = "Required";
  }

  return errors;
}
