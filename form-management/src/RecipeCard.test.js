import React from "react";
import RecipeCard from "./RecipeCard";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe("<RecipeCard />", () => {
  it("renders without crashing", () => {
    const recipe = {
      name: "Brisket",
      course: "Main",
      technique: "Sous-Vide",
      ingredients: [
        "Smoked Salt",
        "Prague Powder No. 1",
        "Liquid Aminos",
        "Chipotle Powder",
        "Molassas"
      ]
    };
    render(<RecipeCard recipe={recipe} />);
  });

  it("renders the expected props data", () => {
    const recipe = {
      name: "Brisket",
      course: "Main",
      technique: "Sous-Vide",
      ingredients: [
        "Smoked Salt",
        "Prague Powder No. 1",
        "Liquid Aminos",
        "Chipotle Powder",
        "Molassas"
      ]
    };
    const rec = render(<RecipeCard recipe={recipe} />);
    rec.getByText(/Brisket/);
    rec.getByText(/Course: Main/);
  });
});
