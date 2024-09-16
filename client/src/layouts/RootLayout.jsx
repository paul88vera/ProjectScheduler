import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <div className="main_container">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
