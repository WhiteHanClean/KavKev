import React, { useEffect, useState } from "react";
import cl from "./CartModal.module.scss";
import fo from "../../assets/halal.png";
import Image from "next/image";
import { Button } from "@mui/material";

const Cart = () => {
  const [carts, setCarts] = useState([]);

  const getCart = () => {
    let cart = JSON.parse(window.localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    setCarts(
      cart
    );
  };

  useEffect(() => {
    getCart();
  }, []);

  console.log(carts);

  return (
    <div className={cl.cart_container}>
      <div>
        {/* {!!carts?products?length && carts.products.map((item) => ( */}
          <div className={cl.cart_container_inner}>
            <div className={cl.cart_container_inner_block}>
              <Image src={fo} alt="adsa" className={cl.img} />
            </div>
            <div className={cl.cart_container_inner_block}>
              <h4>name</h4>
              <p>deta</p>
              <p>subprice</p>
            </div>
            <div className={cl.block}>
              <Button variant="outlined">Убрать из корзины</Button>
            </div>
          </div>
        {/* ))} */}
      </div>

      {/* -------------------- */}
      <div className={cl.check}>
        <div className={cl.check_head}>
          <h3>Детали цен</h3>
        </div>
        <div className={cl.check_main}>
          <p>название/цена*кол-во</p>
          <p>subprice</p>
        </div>
        <div className={cl.check_footer}>
          <h5>Цена без учета доставки</h5>
          <div className={cl.check_footer_inner}>
            <p>Итого</p>
            <p>totalprice</p>
          </div>
          <Button variant="contained" style={{ background: "orangered" }}>
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
