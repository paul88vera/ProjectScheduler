import { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((current) => !current);
  };

  return (
    <>
      <ScrollRestoration />
      <div className="flex flex-row flex-nowrap gap-0">
        {!isOpen ? (
          <button
            onClick={toggleNavbar}
            className="hover:scale-125 bg-slate-600 absolute hover:relative hover:w-4 ease-in-out transition-all">
            <TbLayoutSidebarLeftCollapse />
          </button>
        ) : null}
        {isOpen ? <Navbar onClose={toggleNavbar} /> : null}
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
