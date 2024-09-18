import { Calendar } from "../components/Calendar";
import ProjectData from "../components/ProjectData";

// eslint-disable-next-line react/prop-types
const Dashboard = ({ containerStyle }) => {
  return (
    <div
      id="dashboard_container"
      className={`${containerStyle} flex flex-col gap-8 `}>
      <div
        id="top_grid"
        className="border-l-rose-300 border p-4  rounded-md w-full">
        <Calendar />
      </div>
      <div
        id="bottom_grid"
        className="border-l-rose-300 border p-4 rounded-md w-full">
        {/* TODO: Make this a map inside Dashboard first and then try to make it a prop  */}
        <ProjectData className={containerStyle} />
      </div>
    </div>
  );
};

export default Dashboard;
