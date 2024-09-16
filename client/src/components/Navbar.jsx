export const Navbar = () => {
  return (
    <div id="navbar_container" className="h-[100svh] bg-black p-2 gap-10">
      <ul className="h-[90%] flex flex-col flex-nowrap justify-center align-middle p-2 gap-8 text-center">
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/overview">Overview</a>
        </li>
        <li>
          <a href="/in-progress">In-Progress</a>
        </li>
        <li>
          <a href="/completed">Completed</a>
        </li>
        <li>
          <a href="../">Back</a>
        </li>
      </ul>
      <button
        id="add-project"
        className="h-[10%] flex
      flex-col justify-center align-middle text-[3rem] font-thin m-auto hover:text-blue-400">
        +
      </button>

      <button
        className={`absolute
      text-white z-50 top-16 left-8`}>
        {"<<"}
      </button>
    </div>
  );
};
