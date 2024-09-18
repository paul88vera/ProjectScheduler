import { baseApi } from "./base";

// @route    GET /api/users
// @desc     Get all users
// @access   Private - Public For Now
export function getAllUsers(options) {
  return baseApi.get("/users", options).then((res) => res.data);
}

// @route    GET /api/users/:id
// @desc     Get user by id
// @access   Private - Public For Now
export function getUser(id, options) {
  return baseApi.get(`/users/${id}`, options).then((res) => res.data);
}
