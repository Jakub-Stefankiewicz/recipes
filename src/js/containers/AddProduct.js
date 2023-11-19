import { connect } from "react-redux";
import { addProduct } from "../redux/actions/products";
import AddProduct from "../components/Products/Add";

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (name) => dispatch(addProduct(name)),
  };
};

export default connect(null, mapDispatchToProps)(AddProduct);
