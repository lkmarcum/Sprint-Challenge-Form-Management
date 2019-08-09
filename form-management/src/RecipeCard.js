import React from "react";

const RecipeCard = props => {
  return (
    <div className="recipe-card">
      <h3>{props.recipe.name}</h3>
      <h4>Course: {props.recipe.course}</h4>
      <h5>Technique: {props.recipe.technique}</h5>
      <h5>Ingredients</h5>
      {props.recipe.ingredients.map(ingredient => (
        <p key={ingredient}>{ingredient}</p>
      ))}
    </div>
  );
};

export default RecipeCard;
