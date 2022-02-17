import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import cl from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <div className={cl.container}>
      <Header/>
      <div className={cl.child__container}>{children}</div>
      <Footer/>
    </div>
  );
}

export default Layout;
