import React from "react";
import Cart from "../components/cart/cart";
import Footer from "../components/Footer";
import { store } from "../redux/store";
import { Provider } from "react-redux";

const cart = () => {
  return (
    <div>
      <Provider store={store}>
        <Cart />
        <Footer />
      </Provider>
    </div>
  );
};

export default cart;
