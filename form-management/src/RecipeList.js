import React from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

class RecipeList extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes = () => {
    axios(`http://localhost:5000/api/restricted/data`)
      .then(res => {
        this.setState({ recipes: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="recipe-list">
        <div className="recipe-cards">
          {this.state.recipes.length === 0 ? (
            <h5>Loading recipes...</h5>
          ) : (
            this.state.recipes.map(recipe => <RecipeCard recipe={recipe} />)
          )}
        </div>
      </div>
    );
  }
}

export default RecipeList;
