import React, { useEffect, useState } from "react";
import cl from "./Header.module.scss";
import logo from "../../assets/logo2.png";
import CartModal from "../Cart/CartModal";
import { useRouter } from "next/router";
import Image from "next/image";
import BreadLoveSosaTwo from "../Breadcrumbs/BreadLoveSosaTwo";
import Link from "next/link";
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
          <Link href="/">
            <a>
              <Image src={logo} alt="Logo" />
            </a>
          </Link>
        </div>
        <p className={cl.logo__text}>KavKev</p>
      </div>
      {busketCheck ? (
        <div className={cl.busket}>
          <CartModal />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
