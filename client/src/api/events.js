import { baseApi } from "./base";

// @route    GET /events
// @desc     Get event by id
// @access   Private - Public For Now
export function getEvent(id, options) {
  return baseApi.get(`events/${id}`, options).then((res) => res.data);
}
// @route    GET /events
// @desc     Get all events
// @access   Private - Public For Now
export function getAllEvents(options) {
  return baseApi.get("events", options).then((res) => res.data);
}

// @route    POST /events
// @desc     Create an event
// @access   Private - Public For Now
export function createNewEvent(data, options) {
  return baseApi.post("events", data, options).then((res) => res.data);
}

// @route    PUT /events/:id
// @desc     Update an event by id
// @access   Private - Public For Now
export function updateEvent(id, data, options) {
  return baseApi.put(`events/${id}`, data, options).then((res) => res.data);
}

// @route    DELETE /events/:id
// @desc     Delete an event
// @access   Private - Public For Now
export function deleteEvent(id) {
  return baseApi.delete(`events/${id}`, { method: "DELETE" }).then(() => {
    window.location.replace("/dashboard");
  });
}
