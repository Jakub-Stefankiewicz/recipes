import { connect } from "react-redux";
import LastProducts from "../components/Home/LastProducts";

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(LastProducts);
