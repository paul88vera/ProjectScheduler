import { MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { RiRestTimeLine } from "react-icons/ri";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FcCollapse } from "react-icons/fc";
import { FaPlus } from "react-icons/fa6";

const iconStyle = "h-[30px] text-[2rem] hover:text-blue-400 m-auto";

// eslint-disable-next-line react/prop-types
export const Navbar = ({ onClose }) => {
  return (
    <div id="navbar_container" className="h-[100svh] bg-black p-2 gap-10">
      <button
        className={`relative text-white text-[1.5rem] m-auto`}
        onClick={onClose}>
        <FcCollapse title="Hide Navbar" className={iconStyle} />
      </button>
      <ul className="h-[90%] flex flex-col flex-nowrap justify-center align-middle p-0 gap-8 text-center">
        <li>
          <a href="/dashboard">
            <MdOutlineSpaceDashboard title="Dashboard" className={iconStyle} />
          </a>
        </li>
        <li>
          <a href="/in-progress">
            <AiOutlineFieldTime
              title="Projects In-Progress"
              className={iconStyle}
            />
          </a>
        </li>
        <li>
          <a href="/late">
            <RiRestTimeLine
              title="Late/Paused Projects"
              className={iconStyle}
            />
          </a>
        </li>
        <li>
          <a href="/completed">
            <IoFileTrayFullOutline
              title="Completed Projects"
              className={iconStyle}
            />
          </a>
        </li>

        {!window.location.href.includes("dashboard") ||
        window.location.href.includes("projects") ? (
          <li>
            <a href="../">
              <IoMdArrowRoundBack title="Back" className={iconStyle} />
            </a>
          </li>
        ) : null}
      </ul>
      <a
        href="/api/add-project"
        id="add-project"
        className="h-[30px] flex
      flex-col justify-center align-middle text-[2rem] font-normal m-auto hover:text-blue-400">
        <FaPlus title="Add A Project" className={iconStyle} />
      </a>
    </div>
  );
};
