import { baseApi } from "./base";

// @route    GET /api/clients
// @desc     Get all clients
// @access   Private - Public For Now
export function getAllClients(options) {
  return baseApi.get("/clients", options).then((res) => res.data);
}

// @route    GET /api/clients/:id
// @desc     Get client by id
// @access   Private - Public For Now
export function getClient(id, options) {
  return baseApi.get(`/clients/${id}`, options).then((res) => res.data);
}
