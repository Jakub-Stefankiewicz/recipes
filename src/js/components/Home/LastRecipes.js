import React from "react";
import Panel from "../Panel";

const LastRecipes = ({ recipes }) => {
  let lastFive = [];
  if (recipes.length > 4) {
    lastFive = recipes.slice(recipes.length - 5, recipes.length);
  } else {
    lastFive = recipes.slice(0, recipes.length);
  }

  return (
    <Panel
      title="Ostatnie przepisy"
      theme="is-primary"
      path="recipes"
      iconName="folder"
      listElements={lastFive}
    />
  );
};

export default LastRecipes;
