import React, { useEffect, useState } from "react";
import Panel from "../Panel";

const LastProducts = ({ products }) => {
  let lastFive = [];
  if (products.length > 4) {
    lastFive = products.slice(products.length - 5, products.length);
  } else {
    lastFive = products.slice(0, products.length);
  }

  return (
    <Panel
      title="Ostatnie produkty"
      theme="is-danger"
      path="products"
      iconName="pizza-slice"
      listElements={lastFive}
    />
  );
};

export default LastProducts;
