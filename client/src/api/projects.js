import { baseApi } from "./base";

// @route    GET /api/projects
// @desc     Get all projects
// @access   Private - Public For Now
export function getAllProjects(options) {
  return baseApi.get("/project", options).then((res) => res.data);
}

// @route    GET /api/projects/:id
// @desc     Get project by id
// @access   Private - Public For Now
export function getProject(id, options) {
  return baseApi.get(`/project/${id}`, options).then((res) => res.data);
}
