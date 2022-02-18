import React from "react";
import Cart from "../components/cart/cart";
import Footer from "../components/Footer/Footer.jsx";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import Header from "../components/Header";

const cart = () => {
  return (
    <div>
      <Provider store={store}>
        <Cart />
      </Provider>
    </div>
  );
};

export default cart;
