import { ADD_PRODUCT } from "../actions/products";

const initialState = [
  { id: 1, name: "nic" },
  { id: 2, name: "Przyprawa curry" },
  { id: 3, name: "Olej" },
  { id: 4, name: "Wołowina 500g" },
  { id: 5, name: "Ziemniaki" },
  { id: 6, name: "Pomidory" },
  { id: 7, name: "Przyprawa curry" },
  { id: 8, name: "Olej" },
  { id: 9, name: "Wołowina 500g" },
  { id: 10, name: "Ziemniaki" },
];

const products = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return [...state, payload];
    default:
      return state;
  }
};

export { products };
