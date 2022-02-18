import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, TextField } from "@mui/material";
import cl from "./CartModal.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import fo from "../../assets/halal.png";

const CartModalList = ({ item, getCart, changeProductCount }) => {
  function deleteFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    cart.products = cart.products.filter((item) => item.item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  // const sum = () => {
  //   const sum1 = item.price * count;
  //   // console.log(sum1);
  //   return sum1;
  // };

  return (
    
      <div className={cl.menu}>
        <Image src={fo} alt="smart" width={60} height={60} />
        <div className={cl.menu_inner}>
          <p className={cl.name}>{item.name_product}</p>
          <p>
            {item.amount} шт x {item.price} сом = {item.amount * item.price} сом
          </p>
          <div className={cl.foot}>
            <Button
              variant="outlined"
              onClick={() => changeProductCount(item.amount - 1, item.id)}
            >
              -
            </Button>
            <TextField
              id="outlined-basic"
              label="Количество"
              variant="outlined"
              value={item.amount}
              className={cl.input}
            />
            <Button
              variant="outlined"
              onClick={() => changeProductCount(item.amount + 1, item.id)}
            >
              +
            </Button>

            <CloseIcon
              className={cl.del_icon}
              onClick={(e) => deleteFromCart(item.id)}
            />
          </div>
        </div>
      </div>
  );
};

export default CartModalList;
