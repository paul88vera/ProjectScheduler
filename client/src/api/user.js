import { baseApi } from "./base";

// @route    GET /api/users
// @desc     Get all users
// @access   Private
export function getUsers(options) {
  return baseApi.get("/api/users", options).then((res) => res.data);
}
