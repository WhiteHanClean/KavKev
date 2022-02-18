import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, TextField } from "@mui/material";
import cl from "./CartModal.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import fo from "../../assets/halal.png";
import { useDispatch } from 'react-redux';
import { changeCartItemCount, removeItemFromCart } from '../../redux/forCart/cartSlice';

const CartModalList = ({ item }) => {

  const dispatch = useDispatch();

  const deleteFromCart = () => {
    dispatch(removeItemFromCart(item.id))
  }

  const handleChangeCount = (newCount) => {
    dispatch(changeCartItemCount({id:item.id, newCount}));
  }

  return (
    
      <div className={cl.menu}>
        <Image src={fo} alt="smart" width={60} height={60} />
        <div className={cl.menu_inner}>
          <p className={cl.name}>{item.item.name_product}</p>
          <p>
            {item.count} шт x {item.item.price} сом = {item.count * item.item.price} сом
          </p>
          <div className={cl.foot}>
            <Button
              variant="outlined"
              onClick={() => handleChangeCount(item.count - 1)}
            >
              -
            </Button>
            <TextField
              id="outlined-basic"
              label="Количество"
              variant="outlined"
              value={item.count}
              className={cl.input}
            />
            <Button
              variant="outlined"
              onClick={() => handleChangeCount(item.count + 1)}
            >
              +
            </Button>

            <CloseIcon
              className={cl.del_icon}
              onClick={deleteFromCart}
            />
          </div>
        </div>
      </div>
  );
};

export default CartModalList;
