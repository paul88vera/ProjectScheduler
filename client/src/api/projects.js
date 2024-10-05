import { baseApi } from "./base";

//@access    ALL ACCOUNTS ARE GOING TO BE PRIVATE

// @route    GET /projects
// @desc     Get all projects
// @access   Private - Public For Now
export function getAllProjects(options) {
  return baseApi.get("projects", options).then((res) => res.data);
}

// @route    GET /projects/:id
// @desc     Get project by id
// @access   Private - Public For Now
export function getProject(id, options) {
  return baseApi.get(`projects/:${id}`, options).then((res) => res.data);
}

// @route    POST /projects/:id
// @desc     Create a project
// @access   Private - Public For Now
export function createProject(data, options) {
  return baseApi.post(`projects`, data, options).then((res) => res.data);
}

// @route    PUT /projects/:id
// @desc     Edit project by id
// @access   Private - Public For Now
export function updateProject(id, data, options) {
  return baseApi.put(`projects/:${id}`, data, options).then((res) => res.data);
}
// @route    DELETE /projects/:id
// @desc     Delete project by id
// @access   Private - Public For Now
export function deleteProject(id) {
  return baseApi.delete(`projects/:${id}`, { method: "DELETE" }).then(() => {
    window.location.replace("/dashboard");
  });
}
