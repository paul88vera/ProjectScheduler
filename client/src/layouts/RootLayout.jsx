import { useEffect, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";

const RootLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [backendData, setBackendData] = useState([{}]);

  const toggleNavbar = () => {
    setIsOpen((current) => !current);
  };

  useEffect(() => {
    try {
      fetch("/projects").then((data) => setBackendData(data));
    } catch (err) {
      console.error(err, "that's not right...");
    }
  }, []);

  return (
    <>
      <ScrollRestoration />
      <div className="flex flex-col-reverse md:flex-row flex-nowrap gap-0">
        {!isOpen ? (
          <button
            onClick={toggleNavbar}
            className="bg-[--global-color-dark-light-bg] md:absolute hover:w-2 ease-in-out transition-all rounded-full h-10 w-10 m-2">
            <TbLayoutSidebarLeftCollapse />
          </button>
        ) : null}
        {isOpen ? <Navbar onClose={toggleNavbar} /> : null}
        <Outlet {...backendData} />
      </div>
    </>
  );
};

export default RootLayout;
