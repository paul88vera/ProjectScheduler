/* eslint-disable react/prop-types */
import { Form, Link } from "react-router-dom";
import FormGroup from "./FormGroup";
import Option from "../props/Option";

export default function PostForm({
  buttonText,
  defaultValues = {},
  errors = {},
}) {
  return (
    <Form
      method="post"
      id="form-container"
      className="bg-[--global-color-dark-light-bg] p-4 md:p-8 rounded-md w-full md:max-w-[60vw] grid grid-cols-1 md:grid-cols-1 md:gap-16 my-0 mx-auto">
      <div className="flex flex-col gap-4">
        <FormGroup errorMessage={errors.title}>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Project Title"
            defaultValue={defaultValues.title}
          />
        </FormGroup>
        <div className="flex flex-row gap-4">
          <label>
            status:{" "}
            <select
              name="status"
              id="status"
              className="rounded-md p-[.2rem] text-[var(--global-color-dark-text)] bg-[--global-color-dark-bg]"
              defaultValue={defaultValues.status}>
              <option value="active" defaultChecked>
                active
              </option>
              <option value="pending">pending</option>
              <option value="completed">completed</option>
            </select>
          </label>

          <label htmlFor="priority">
            priority:{" "}
            <select
              name="priority"
              id="priority"
              className="rounded-md p-[.2rem] text-[var(--global-color-dark-text)] bg-[--global-color-dark-bg]"
              defaultValue={defaultValues.priority}>
              <option value="normal" defaultChecked>
                normal
              </option>
              <option value="priority">priority</option>
            </select>
          </label>
          <label htmlFor="colors">
            color:
            <br />
            <input
              type="color"
              name="colors"
              id="colors"
              defaultValue={defaultValues.colors}
            />
          </label>
        </div>
        <div className="flex flex-row flex-nowrap gap-0 max-w-lg justify-start">
          <FormGroup errorMessage={errors.start}>
            <label htmlFor="start">
              start date:
              <br />
              <input
                type="date"
                name="start"
                id="start"
                placeholder="start"
                className="rounded-md p-[.2rem] text-[var(--global-color-dark-text)] bg-[--global-color-dark-bg]"
                defaultValue={defaultValues.start}
              />
            </label>
          </FormGroup>
          <FormGroup errorMessage={errors.due}>
            <label htmlFor="due">
              due date:
              <br />
              <input
                type="date"
                name="due"
                id="due"
                placeholder="due"
                className="rounded-md p-[.2rem] text-[var(--global-color-dark-text)] bg-[--global-color-dark-bg]"
                defaultValue={defaultValues.due}
              />
            </label>
          </FormGroup>
        </div>
        <FormGroup errorMessage={errors.am}>
          <select
            name="am"
            id="am"
            defaultValue={defaultValues.am}
            placeholder="account manager">
            <option value="" disabled>
              account manager
            </option>
            <Option id={0} name="Kayla" />
            <Option id={1} name="Brianna" />
          </select>
          <input
            type="number"
            name="am-days"
            id="am-days"
            placeholder="7 days"
            defaultValue={defaultValues.amDays}
          />
        </FormGroup>
        <FormGroup errorMessage={errors.seo}>
          <select
            name="seo"
            id="seo"
            placeholder="seo manager"
            defaultValue={defaultValues.seo}>
            <option value="" disabled>
              seo manager
            </option>
            <Option id={0} name="Jon" />
          </select>
          <input
            type="number"
            name="seo-days"
            id="seo-days"
            placeholder="7 days"
            defaultValue={defaultValues.seoDays}
          />
        </FormGroup>
        <FormGroup errorMessage={errors.copy}>
          <select
            name="copy"
            id="copy"
            placeholder="copy"
            defaultValue={defaultValues.copy}>
            <option value="" disabled>
              copy
            </option>
            <Option id={0} name="Lauren" />
            <Option id={1} name="Esther" />
          </select>
          <input
            type="number"
            name="copy-days"
            id="copy-days"
            placeholder="7 days"
            defaultValue={defaultValues.copyDays}
          />
        </FormGroup>
        <FormGroup errorMessage={errors.design}>
          <select
            name="design"
            id="design"
            placeholder="design"
            defaultValue={defaultValues.design}>
            <option value="" disabled>
              design
            </option>
            <Option id={0} name="Jess" />
            <Option id={1} name="Emma" />
          </select>
          <input
            type="number"
            name="design-days"
            id="design-days"
            placeholder="7 days"
            defaultValue={defaultValues.designDays}
          />
        </FormGroup>
        <FormGroup errorMessage={errors.social}>
          <select
            name="social"
            id="social"
            placeholder="social"
            defaultValue={defaultValues.social}>
            <option value="" disabled>
              social
            </option>
            <Option id={0} name="Chelsea" />
          </select>
          <input
            type="number"
            name="social-days"
            id="social-days"
            placeholder="3 days"
            defaultValue={defaultValues.socialDays}
          />
        </FormGroup>
        <FormGroup errorMessage={errors.dev}>
          <select
            name="dev"
            id="dev"
            placeholder="dev"
            defaultValue={defaultValues.dev}>
            <option value="" disabled>
              dev
            </option>
            <Option id={0} name="Paul" />
            <Option id={1} name="Lori" />
          </select>
          <input
            type="number"
            name="dev-days"
            id="dev-days"
            placeholder="10 days"
            defaultValue={defaultValues.devDays}
          />
        </FormGroup>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <Link
            to={`/dashboard`}
            className="p-4 bg-[--global-color-dark-text] text-center rounded-md font-bold hover:bg-[--global-color-dark-accent]">
            cancel
          </Link>
          <button className="p-4 bg-[--global-color-light-accent] rounded-md font-bold hover:bg-[--global-color-dark-accent]">
            {buttonText}
          </button>
        </div>
      </div>

      {/* Form Buttons */}
      {/* <div className="flex flex-col gap-8 h-full justify-between">
        <FormGroup></FormGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <Link
            to={`/dashboard`}
            className="p-4 bg-[--global-color-dark-text] text-center rounded-md font-bold hover:bg-[--global-color-dark-accent]">
            cancel
          </Link>
          <button className="p-4 bg-[--global-color-light-accent] rounded-md font-bold hover:bg-[--global-color-dark-accent]">
            {buttonText}
          </button>
        </div>
      </div> */}
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
  colors,
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
  if (colors === "#000000" || "") {
    errors.colors = "Required";
  }
  return errors;
}
