import React from "react";
import "./App.css";
import FormikLogin from "./Login";
import RecipeList from "./RecipeList";

function App() {
  return (
    <div className="App">
      <FormikLogin />
      <RecipeList />
    </div>
  );
}

export default App;
