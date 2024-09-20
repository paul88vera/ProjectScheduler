import { Link, useLoaderData } from "react-router-dom";
import { Calendar } from "../components/Calendar";
import { getAllProjects } from "../api/projects";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

export default function Dashboard() {
  const projects = useLoaderData();

  return (
    <div
      id="dashboard_container"
      className={`p-4 md:p-16 grid-cols-1 grid-rows-2 md:gap-8 w-full h-full flex flex-col gap-4`}>
      <div
        id="top_grid"
        className=" rounded-md w-full h-[50svh] overflow-x-scroll">
        <Calendar />
      </div>
      <div
        id="arrows"
        className="w-full rounded-md text-center hidden md:block">
        <button className="rounded-md hover:bg-[--global-color-light-accent] text-[1.5rem]">
          <HiArrowSmLeft />
        </button>
        <button className="rounded-md hover:bg-[--global-color-light-accent] text-[1.5rem]">
          <HiArrowSmRight />
        </button>
      </div>
      <div id="bottom_grid" className="rounded-md w-full overflow-x-scroll">
        <div className="flex flex-col gap-2  min-w-[1000px]">
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
          {projects.map((item) => (
            <Link
              to={`/dashboard/projects/${item.id}`}
              key={item.id}
              className="hover:bg-[--global-color-light-accent] bg-[--global-color-dark-accent] p-4 rounded-md grid grid-cols-10 text-center">
              <p>{item.name}</p>
              <p>{item.start}</p>
              <p>{item.due}</p>
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
