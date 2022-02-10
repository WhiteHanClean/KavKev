import React from "react";
import Autorization from "../components/autorization/Autorization";
import Footer from "../components/Footer";
import { store } from "../redux/store";
import { Provider } from "react-redux";
const autorization = () => {
  return (
    <div>
      <Provider store={store}>
        <Autorization />
        <Footer />
      </Provider>
    </div>
  );
};

export default autorization;
