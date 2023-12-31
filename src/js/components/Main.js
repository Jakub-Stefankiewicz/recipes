import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import AllRecipes from "../containers/AllRecipes";
import AddRecipe from "../containers/AddRecipe";
import AllProducts from "../containers/AllProducts";
import AddProducts from "../containers/AddProduct";
import store from "../redux/store";
import SingleProduct from "./Recipes/SingleProduct";

const Main = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/recipes" element={<AllRecipes />} />
              <Route path="/recipes/add" element={<AddRecipe />} />
              <Route path="/products" element={<AllProducts />} />
              <Route path="/products">
                <Route path=":id" element={<SingleProduct />} />
              </Route>
              <Route path="/products/add" element={<AddProducts />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default Main;
