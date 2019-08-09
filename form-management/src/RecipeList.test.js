import React from "react";
import RecipeList from "./RecipeList";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe("<RecipeList />", () => {
  it("renders without crashing", () => {
    render(<RecipeList />);
  });

  it("calls componentDidMount", () => {
    const spy = jest.spyOn(RecipeList.prototype, "componentDidMount");
    const wrapper = render(<RecipeList />);
    expect(spy).toHaveBeenCalled();
  });
});
