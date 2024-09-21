import { baseApi } from "./base";

//@access    ALL ACCOUNTS ARE PRIVATE

// @route    GET /api/projects
// @desc     Get all projects
// @access   Private - Public For Now
export function getAllProjects(options) {
  return baseApi.get("projects", options).then((res) => res.data);
}

// @route    GET /api/projects/:id
// @desc     Get project by id
// @access   Private - Public For Now
export function getProject(id, options) {
  return baseApi.get(`projects/${id}`, options).then((res) => res.data);
}

// @route    POST /api/projects/:id
// @desc     Create a project
// @access   Private - Public For Now
export function createProject(data, options) {
  return baseApi.post(`projects`, data, options).then((res) => res.data);
}

// @route    PUT /api/projects/:id
// @desc     Edit project by id
// @access   Private - Public For Now
export function updateProject(id, data, options) {
  return baseApi.put(`projects/${id}`, data, options).then((res) => res.data);
}
