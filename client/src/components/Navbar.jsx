import { MdOutlineSpaceDashboard } from "react-icons/md";
// import { AiOutlineFieldTime } from "react-icons/ai";
import { RiRestTimeLine } from "react-icons/ri";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { FcCollapse } from "react-icons/fc";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { memo } from "react";

const iconStyle =
  "h-[5svh] md:h-[30px] text-[1.5rem] hover:text-blue-400 m-auto";

const liStyle = "flex items-center justify-center w-full";

// eslint-disable-next-line react/prop-types
export const Navbar = memo(function Navbar({ onClose }) {
  return (
    <div
      id="navbar_container"
      className="h-[10svh] md:h-[100svh] relative bg-[--global-color-dark-light-bg] p-2 gap-4 md:gap-10 flex flex-row md:flex-col align-middle items-center justify-center">
      <button
        className="text-white text-[1.5rem] m-auto hidden md:block"
        onClick={onClose}>
        <FcCollapse title="Hide Navbar" className={iconStyle} />
      </button>
      <ul className="h-[10svh] md:h-[90%] flex flex-row md:flex-col flex-nowrap justify-center align-middle p-0 gap-2 md:gap-8 text-center w-full">
        <li className={liStyle}>
          <Link to="/dashboard">
            <MdOutlineSpaceDashboard title="Dashboard" className={iconStyle} />
          </Link>
        </li>
        <li className={liStyle}>
          <Link to="/pending">
            <RiRestTimeLine title="Pending Projects" className={iconStyle} />
          </Link>
        </li>
        <li className={liStyle}>
          <Link to="/completed">
            <IoFileTrayFullOutline
              title="Completed Projects"
              className={iconStyle}
            />
          </Link>
        </li>
      </ul>
      <Link
        to="/add-project"
        id="add-project"
        className="h-[20px] flex
      flex-row md:flex-col items-center justify-center align-middle text-[1.5rem] font-normal m-auto hover:text-blue-400 p-4 md:py-0 md:mb-2">
        <FaPlus title="Add A Project" />
      </Link>
    </div>
  );
});
