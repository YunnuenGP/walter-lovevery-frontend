import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Smoke Test - Home Component", () => {
  it("renders the initial loading spinner", () => {
    render(<Home />);

    const loading = screen.getByRole("status");

    expect(loading).toBeInTheDocument();
  });
});
