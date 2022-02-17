import React from "react";
import cl from "./Header.module.scss";
import logo from "../../assets/logo2.png";
import CartModal from "../Cart/CartModal";

import Image from "next/image";
function Header() {
  return (
    <div className={cl.container}>
      <div className={cl.logo}>
        <div className={cl.logo__img}>
          <Image src={logo} alt="Logo" />
        </div>
        <p className={cl.logo__text}>KavKev</p>
      </div>
      <div className={cl.busket}>
          <CartModal />
      </div>
    </div>
  );
}

export default Header;
