import { connect } from "react-redux";
import { addRecipe } from "../redux/actions/recipes";
import AddRecipe from "../components/Recipes/Add";

const mapDispatchToProps = (dispatch) => {
  return {
    addRecipe: (recipe) => dispatch(addRecipe(recipe)),
  };
};

export default connect(null, mapDispatchToProps)(AddRecipe);
