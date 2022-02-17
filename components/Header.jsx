import React from "react";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import CartModal from "./Cart/CartModal";
const Header = ({carts}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "flex-end",
        padding: "20px"
      }}
    >
        <CartModal carts={carts}/>
    </div>
  );
};

export default Header;
