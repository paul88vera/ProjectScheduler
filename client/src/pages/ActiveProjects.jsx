import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";
import FullCalendar from "@fullcalendar/react";
import { useLoaderData } from "react-router";
import { getAllProjects } from "../api/projects";

export default function ActiveProjects() {
  const projects = useLoaderData();
  const filteredProjects = projects.filter((project) => {
    return project.status === "active";
  });
  const newEventList = [];

  // function to put active projects in an array to embed in the calendar
  let counter = 0;

  function getOL() {
    for (let i = 0; i < filteredProjects.length; i++) {
      const eventBody = {
        title: filteredProjects[counter].title,
        start: filteredProjects[counter].start,
        end: filteredProjects[counter].due,
        color: filteredProjects[counter].colors,
      };
      newEventList.push(eventBody);

      counter++;
    }
  }
  getOL();
  return (
    <div className="p-4 md:p-8 grid grid-cols-1 gap-4 md:gap-16 w-full max-h-[100svh] overflow-y-scroll">
      <div id="calendar" className="p-2 rounded-md w-full max-h-[100svh]">
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            multiMonthPlugin,
            interactionPlugin,
          ]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "today,prev,next",
            center: "title",
            right: "multiMonthYear,dayGridMonth,dayGridWeek",
          }}
          weekends={true}
          events={newEventList}
        />
      </div>
    </div>
  );
}

function loader({ request: { signal } }) {
  return getAllProjects({ signal });
}

// eslint-disable-next-line react-refresh/only-export-components
export const ActiveProjectsRoute = {
  loader,
  element: <ActiveProjects />,
};
