import { connect } from "react-redux";
import AllProducts from "../components/Products";
import LastProducts from "../components/Home/LastProducts"

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(AllProducts, LastProducts);
