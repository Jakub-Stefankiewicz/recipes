const ADD_RECIPE = "ADD_RECIPE";

const addRecipe = (recipe) => {
  return {
    type: ADD_RECIPE,
    payload: recipe,
  };
};

export { ADD_RECIPE, addRecipe };
