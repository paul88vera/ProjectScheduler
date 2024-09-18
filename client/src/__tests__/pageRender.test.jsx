import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Dashboard from "../pages/Dashboard";
import Completed from "../pages/Completed";
import Late from "../pages/Late";
import InProgress from "../pages/InProgress";
import AddProject from "../pages/AddProject";
import Overview from "../pages/Overview";
import { Navbar } from "../components/Navbar";
import { Calendar } from "../components/Calendar";
import { ProjectData } from "../components/ProjectData";

// Render Checks
describe("# what is rendered to dom", () => {
  // Pages
  it("Dashboard should render to dom", () => {
    render(<Dashboard />);
    screen.debug();
  });

  it("Completed should render to dom", () => {
    render(<Completed />);
    screen.debug();
  });
  it("Late should render to dom", () => {
    render(<Late />);
    screen.debug();
  });
  it("InProgress should render to dom", () => {
    render(<InProgress />);
    screen.debug();
  });
  it("AddProject should render to dom", () => {
    render(<AddProject />);
    screen.debug();
  });
  it("Overview should render to dom", () => {
    render(<Overview />);
    screen.debug();
  });

  // Components
  it("Navbar component should render to dom", () => {
    render(<Navbar />);
    screen.debug();
  });
  it("Calendar component should render to dom", () => {
    render(<Calendar />);
    screen.debug();
  });
  it("ProjectData component should render to dom", () => {
    render(<ProjectData />);
    screen.debug();
  });
});

