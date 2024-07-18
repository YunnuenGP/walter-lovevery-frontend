import { render, screen } from "@testing-library/react";
import { Navbar } from "./navbar";

describe("Navbar", () => {
  it("renders the app navbar", () => {
    render(<Navbar />);

    const nav = screen.getByRole("navigation");
    const toggle = screen.getByRole("switch");
    const logo = screen.getByText("every");

    expect(nav).toBeInTheDocument();
    expect(nav).toContainElement(logo);
    expect(nav).toContainElement(toggle);
  });
});
