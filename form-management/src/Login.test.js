import React from "react";
import Login from "./Login";
import { render, fireEvent, waitForDomChange } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe("<Login />", () => {
  it("renders without crashing", () => {
    render(<Login />);
  });

  it("should display errors when button is clicked w/ empty input fields", async () => {
    const { getByText } = render(<Login />);
    const submitButton = getByText(/Submit/i);
    fireEvent.click(submitButton);
    await waitForDomChange(() =>
      expect(getByText(/username is a required field/)).toBeVisible()
    );
  });
});
