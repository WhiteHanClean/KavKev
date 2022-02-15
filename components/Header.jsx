import React from "react";
import { Badge } from "@mui/material";
import Link from "next/link";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
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
      <Link href="/cart" style={{ textDecoration: "none" }}>
        <Badge badgeContent={4} color="success">
          {/* <ShoppingCartIcon style={{fontSize: '50px', color: 'red', cursor: "pointer"}}/> */}
        </Badge>
      </Link>
    </div>
  );
};

export default Header;
