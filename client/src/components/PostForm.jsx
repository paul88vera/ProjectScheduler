/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Form, Link } from "react-router-dom";
import FormGroup from "./FormGroup";
import Option from "../props/Option";
import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function PostForm({
  buttonText,
  defaultValues = {},
  errors = {},
}) {

  // Format Date to yyyy-mm-dd
  const formatDate = (d) => {
    if (!d) return "";
    return new Date(d).toISOString().slice(0, 10);
  };

  const [startDate, setStartDate] = useState(
    formatDate(defaultValues.StartDate)
  );
  const [dueDate, setDueDate] = useState(formatDate(defaultValues.DueDate));
  const [comments, setComments] = useState(defaultValues.Notes);
  const [amDayState, setAmDayState] = useState(
    parseInt(defaultValues.AmDays) || 7
  );
  const [seoDayState, setSeoDayState] = useState(
    parseInt(defaultValues.SeoDays) || 7
  );
  const [copyDayState, setCopyDayState] = useState(
    parseInt(defaultValues.CopyDays) || 7
  );
  const [designDayState, setDesignDayState] = useState(
    parseInt(defaultValues.DesignDays) || 7
  );
  const [socialDayState, setSocialDayState] = useState(
    parseInt(defaultValues.SocialDays) || 3
  );
  const [devDayState, setDevDayState] = useState(
    parseInt(defaultValues.DevDays) || 10
  );

  /** function for Rich Text Editor
   * docs @   https://www.tiny.cloud/docs/tinymce/latest/
   **/
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  /**
   * StandardDayAmount Function
   * @param {date, days} param2
   * @returns new futureDueDate with the sum of all member days added to due date input value
   */

  const sumOfProjectDays =
    devDayState +
    socialDayState +
    designDayState +
    copyDayState +
    seoDayState +
    amDayState;

  const standardDayAmount = (date, days) => {
    const d = new Date(date);
    // Add days
    d.setDate(d.getDate() + days);
    // Convert to yyyy-mm-dd format
    const futureDueDate = d.toISOString().slice(0, 10);
    setDueDate(futureDueDate);
  };

  return (
    <Form
      method="post"
      id="form-container"
      className="bg-[--global-color-dark-light-bg] p-4 md:p-8 rounded-md w-full md:max-w-[60vw] grid grid-cols-1 md:grid-cols-1 md:gap-16 my-0 mx-auto">
      <div className="flex flex-col gap-4">
        <FormGroup errorMessage={errors.ProjectName}>
          <input
            type="text"
            name="ProjectName"
            id="ProjectName"
            placeholder="Project Name"
            defaultValue={defaultValues.ProjectName}
          />
        </FormGroup>
        <FormGroup errorMessage={errors.ProjectColor}>
          <div className="flex flex-row gap-4">
            <label>
              status:{" "}
              <select
                name="ProjectStatus"
                id="ProjectStatus"
                className="rounded-md p-[.2rem] text-[var(--global-color-dark-text)] bg-[--global-color-dark-bg]"
                defaultValue={defaultValues.ProjectStatus}>
                <option value="Active" defaultChecked>
                  Active
                </option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </label>

            <label htmlFor="ProjectPriority">
              priority:{" "}
              <select
                name="ProjectPriority"
                id="ProjectPriority"
                className="rounded-md p-[.2rem] text-[var(--global-color-dark-text)] bg-[--global-color-dark-bg]"
                defaultValue={defaultValues.ProjectPriority}>
                <option value="Normal" defaultChecked>
                  Normal
                </option>
                <option value="Priority">Priority</option>
              </select>
            </label>
            <label htmlFor="ProjectColor">
              color:
              <br />
              <input
                type="color"
                name="ProjectColor"
                id="ProjectColor"
                defaultValue={defaultValues.ProjectColor || "#1414D2"}
                required
              />
            </label>
          </div>
        </FormGroup>
        <div className="flex flex-row flex-nowrap gap-0 max-w-lg justify-start">
          <FormGroup errorMessage={errors.StartDate}>
            <label htmlFor="StartDate">
              start date:
              <br />
              <input
                type="date"
                name="StartDate"
                id="StartDate"
                placeholder="start"
                className="rounded-md p-[.2rem] text-[var(--global-color-dark-text)] bg-[--global-color-dark-bg]"
                defaultValue={startDate}
                onChange={(e) => {
                  if (!defaultValues.StartDate) {
                    setStartDate(e.target.value);
                    standardDayAmount(e.target.value, sumOfProjectDays);
                  }
                }}
              />
            </label>
          </FormGroup>
          <FormGroup errorMessage={errors.DueDate}>
            <label htmlFor="DueDate">
              due date:
              <br />
              <input
                type="date"
                name="DueDate"
                id="DueDate"
                placeholder="due"
                className="rounded-md p-[.2rem] text-[var(--global-color-dark-text)] bg-[--global-color-dark-bg]"
                onChange={(e) => {
                  if (!defaultValues.DueDate) {
                    setDueDate(e.target.value);
                  }
                }}
                defaultValue={dueDate}
              />
            </label>
          </FormGroup>
        </div>
        <FormGroup errorMessage={errors.Am}>
          <select
            name="Am"
            id="Am"
            defaultValue={defaultValues.Am || "Kayla"}
            placeholder="account manager">
            <option value="" disabled>
              account manager
            </option>
            <Option id={0} name="Kayla" />
            <Option id={1} name="Brianna" />
          </select>
          <input
            type="number"
            name="AmDays"
            id="AmDays"
            placeholder="7 days"
            min={4}
            max={10}
            onChange={(e) => {
              if (!defaultValues.AmDays) {
                setAmDayState(e.target.value);
              }
            }}
            defaultValue={amDayState}
          />
        </FormGroup>
        <FormGroup errorMessage={errors.Seo}>
          <select
            name="Seo"
            id="Seo"
            placeholder="seo manager"
            defaultValue={defaultValues.Seo || "Liam"}>
            <option value="" disabled>
              seo manager
            </option>
            <Option id={0} name="Liam" />
          </select>
          <input
            type="number"
            name="SeoDays"
            id="SeoDays"
            placeholder="7 days"
            min={4}
            max={12}
            onChange={(e) => {
              if (!defaultValues.SeoDays) {
                setSeoDayState(e.target.value);
              }
            }}
            defaultValue={seoDayState}
          />
        </FormGroup>
        <FormGroup errorMessage={errors.CopyName}>
          <select
            name="CopyName"
            id="CopyName"
            placeholder="copy"
            defaultValue={defaultValues.CopyName || "Lauren"}>
            <option value="" disabled>
              copy writer
            </option>
            <Option id={0} name="Lauren" />
            <Option id={1} name="Esther" />
          </select>
          <input
            type="number"
            name="CopyDays"
            id="CopyDays"
            placeholder="7 days"
            min={3}
            max={12}
            onChange={(e) => {
              if (!defaultValues.CopyDays) {
                setCopyDayState(e.target.value);
              }
            }}
            defaultValue={copyDayState}
          />
        </FormGroup>
        <FormGroup errorMessage={errors.Design}>
          <select
            name="Design"
            id="Design"
            placeholder="design"
            defaultValue={defaultValues.Design || "Jessica"}>
            <option value="" disabled>
              designer
            </option>
            <Option id={0} name="Jessica" />
            <Option id={1} name="Emma" />
          </select>
          <input
            type="number"
            name="DesignDays"
            id="DesignDays"
            placeholder="7 days"
            min={4}
            max={12}
            onChange={(e) => {
              if (!defaultValues.DesignDays) {
                setDesignDayState(e.target.value);
              }
            }}
            defaultValue={designDayState}
          />
        </FormGroup>
        <FormGroup errorMessage={errors.Social}>
          <select
            name="Social"
            id="Social"
            placeholder="social"
            defaultValue={defaultValues.Social || "Chelsea"}>
            <option value="" disabled>
              social media manager
            </option>
            <Option id={0} name="Chelsea" />
          </select>
          <input
            type="number"
            name="SocialDays"
            id="SocialDays"
            placeholder="3 days"
            min={3}
            max={5}
            onChange={(e) => {
              if (!defaultValues.SocialDays) {
                setSocialDayState(e.target.value);
              }
            }}
            defaultValue={socialDayState}
          />
        </FormGroup>
        <FormGroup errorMessage={errors.Dev}>
          <select
            name="Dev"
            id="Dev"
            placeholder="dev"
            defaultValue={defaultValues.Dev || "Paul"}>
            <option value="" disabled>
              developer
            </option>
            <Option id={0} name="Paul" />
            <Option id={1} name="Mike" />
          </select>
          <input
            type="number"
            name="DevDays"
            id="DevDays"
            placeholder="10 days"
            min={4}
            max={12}
            onChange={(e) => {
              if (!defaultValues.DevDays) {
                setDevDayState(e.target.value);
              }
            }}
            defaultValue={devDayState}
          />
        </FormGroup>

        <label htmlFor="notes">Comments:</label>
        <textarea
          id="notes"
          name="notes"
          defaultValue={comments}
          onChange={(e) => {
            if (!defaultValues.Notes) {
              setComments(e.target.value);
            }
            defaultValues = { comments };
          }}></textarea>
        {/* <Editor
          apiKey="no-api-key"
          id="notes"
          name="notes"
          onInit={(_evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        /> */}

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <Link
            to={`/dashboard`}
            className="p-4 bg-[--global-color-dark-text] text-center rounded-md font-bold hover:bg-[--global-color-dark-accent]">
            cancel
          </Link>
          <button
            className="p-4 bg-[--global-color-light-accent] rounded-md font-bold hover:bg-[--global-color-dark-accent]"
            onClick={log}>
            {buttonText}
          </button>
        </div>
      </div>
    </Form>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function postFormValidator({
  ProjectName,
  StartDate,
  DueDate,
  Am,
  Seo,
  CopyName,
  Design,
  Social,
  Dev,
  ProjectColor,
}) {
  const errors = {};

  if (ProjectName === "") {
    errors.ProjectName = "Required";
  }
  if (StartDate === "") {
    errors.StartDate = "Required";
  }
  if (DueDate === "") {
    errors.DueDate = "Required";
  }
  if (Am === null) {
    errors.Am = "Required";
  }
  if (Seo === null) {
    errors.Seo = "Required";
  }
  if (CopyName === null) {
    errors.CopyName = "Required";
  }
  if (Design === null) {
    errors.Design = "Required";
  }
  if (Social === null) {
    errors.Social = "Required";
  }
  if (Dev === null) {
    errors.Dev = "Required";
  }
  if (ProjectColor === null) {
    errors.Color = "Required";
  }
  return errors;
}
