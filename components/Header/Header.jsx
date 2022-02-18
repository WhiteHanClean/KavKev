import React, { useEffect, useState } from "react";
import cl from "./Header.module.scss";
import logo from "../../assets/logo2.png";
import CartModal from "../Cart/CartModal";
import { useRouter } from "next/router";
import Image from "next/image";

function Header() {
  const router = useRouter();
  const [busketCheck, setBusketCheck] = useState(true);
  useEffect(() => {
    if (router.pathname === "/cart") {
      setBusketCheck(false);
    } else {
      setBusketCheck(true);
    }
  }, [router]);

  return (
    <div className={cl.container}>
      <div className={cl.logo}>
        <div className={cl.logo__img}>
          <Image src={logo} alt="Logo" />
        </div>
        <p className={cl.logo__text}>KavKev</p>
      </div>
      {busketCheck ? <div className={cl.busket}>
        <CartModal />
      </div> : <></>}
    </div>
  );
}

export default Header;
