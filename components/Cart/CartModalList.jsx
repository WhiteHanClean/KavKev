import React, { useState } from "react";
import Image from "next/image";
import { TextField } from "@mui/material";
import cl from "./CartModal.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import fo from "../../assets/halal.png";

const CartModalList = ({ item , getCart}) => {
  const [count, setCount] = useState(item.count);

  const handleOnChange = (e) => {
    e.target.value === "" ? 1 : setCount(e.target.value);
  };

  function deleteFromCart(id){
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    cart.products = cart.products.filter((item)=> item.item.id !==id )
    localStorage.setItem('cart', JSON.stringify(cart))
    getCart()
  }
  return (
    <div>
      <div className={cl.menu}>
        <Image src={fo} alt="smart" />
        <div className={cl.menu_inner}>
          <p>{item.name_product}</p>
          <p>
            {item.price}{" "}
            <span>
              сом x {count} шт = {item.price * count} сом
            </span>
          </p>
          <div className={cl.foot}>
            <TextField
              id="outlined-basic"
              label="Количество"
              variant="outlined"
              type="number"
              onChange={(e) => handleOnChange(e)}
            />
            <CloseIcon className={cl.del_icon}  onClick={(e)=>deleteFromCart(item.id)}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModalList;
