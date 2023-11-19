import { connect } from "react-redux";
import AllProducts from "../components/Products";


const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(AllProducts);
