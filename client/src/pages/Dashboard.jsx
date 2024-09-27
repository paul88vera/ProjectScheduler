import { Link, useLoaderData } from "react-router-dom";
import { Calendar } from "../components/Calendar";
import { formatDate } from "@fullcalendar/core";
import { getAllProjects } from "../api/projects";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { useRef } from "react";

export default function Dashboard() {
  const projects = useLoaderData();
  const calendarRef = useRef(null);

  // Make my Buttons work
  const GoNext = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
  };
  const GoPrevious = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
  };

  // filtering out any projects that are NOT "active"
  const filteredProjects = projects.filter((project) => {
    return project.status === "active";
  });

  return (
    <div
      id="dashboard_container"
      className="p-4 md:p-8 grid grid-cols-1 gap-4 md:gap-4 w-full md:max-h-[100svh] overflow-x-hidden">
      <div
        id="top_grid"
        className="rounded-md w-full md:overflow-x-scroll overflow-x-hidden max-h-full">
        <Calendar ref={calendarRef} prev={GoPrevious} next={GoNext} />
      </div>
      <div
        id="arrows"
        className="w-full rounded-md text-center hidden md:block">
        <button
          className="button rounded-md hover:bg-[--global-color-light-accent] text-[1.5rem]"
          onClick={GoPrevious}>
          <HiArrowSmLeft />
        </button>
        <button
          className="button rounded-md hover:bg-[--global-color-light-accent] text-[1.5rem]"
          onClick={GoNext}>
          <HiArrowSmRight />
        </button>
      </div>
      <div id="bottom_grid" className="rounded-md overflow-x-scroll">
        {filteredProjects.length === 0 ? (
          <p>Such Empty...</p>
        ) : (
          <div className="flex flex-col gap-2 min-w-[800px] overflow-scroll">
            <div className="p-4 rounded-md grid grid-cols-10 text-center bg-[--global-color-dark-light-bg]">
              <h3>PROJECT</h3>
              <h3>START</h3>
              <h3>DUE</h3>
              <h3>AM</h3>
              <h3>DESIGN</h3>
              <h3>COPY</h3>
              <h3>SEO</h3>
              <h3>DEV</h3>
              <h3>SM</h3>
              <h3>STATUS</h3>
            </div>
            <div className="rounded-md grid grid-cols-1 text-center gap-2">
              {filteredProjects.map((item) => (
                <Link
                  to={`/dashboard/projects/${item.id}`}
                  key={item.id}
                  className="hover:bg-[--global-color-light-accent] bg-[--global-color-dark-accent] p-4 rounded-md grid grid-cols-10 text-center"
                  title={item.title}>
                  <p className="overflow-x-scroll text-nowrap">{item.title}</p>
                  <p>
                    {formatDate(item.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <p>
                    {formatDate(item.due, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <p>{item.am}</p>
                  <p>{item.design}</p>
                  <p>{item.copy}</p>
                  <p>{item.seo}</p>
                  <p>{item.dev}</p>
                  <p>{item.social}</p>
                  <p>{item.status}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function loader({ request: { signal } }) {
  return getAllProjects({ signal });
}

// eslint-disable-next-line react-refresh/only-export-components
export const DashboardRoute = {
  loader,
  element: <Dashboard />,
};
