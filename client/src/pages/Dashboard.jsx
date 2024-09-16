const Dashboard = () => {
  return (
    <div
      id="dashboard_container"
      className="p-4 md:p-16 grid grid-cols-1 gap-4 md:gap-16 w-full">
      <div
        id="top_grid"
        className="border-l-rose-300 border p-4  rounded-md w-full">
        top grid
      </div>
      <div
        id="bottom_grid"
        className="border-l-rose-300 border p-4 rounded-md w-full">
        bottom grid
      </div>
    </div>
  );
};

export default Dashboard;
