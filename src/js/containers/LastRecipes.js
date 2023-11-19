import { connect } from "react-redux";
import LastRecipes from "../components/Home/LastRecipes";

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps)(LastRecipes);
