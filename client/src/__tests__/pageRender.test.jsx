import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Dashboard from "../pages/Dashboard";

describe("# what is rendered to dom", () => {
  it("Dashboard should render to dom", () => {
    render(<Dashboard />);
    screen.debug();
  });
});
