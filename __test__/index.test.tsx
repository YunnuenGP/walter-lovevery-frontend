import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

describe("Home", () => {
  it("renders a loading spinner", () => {
    render(<Home />);

    const loading = screen.getByRole("status");

    expect(loading).toBeInTheDocument();
  });
});
