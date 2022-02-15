import React from "react";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import CartModal from "./Cart/CartModal";
const Header = () => {
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
        <CartModal />
    </div>
  );
};

export default Header;
