import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import cl from "./CartModal.module.scss";
import CartModalList from "./CartModalList";
import Link from "next/link";

const CartModal = () => {
  const [carts, setCarts] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const getCart = () => {
    let cart = JSON.parse(window.localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    setCarts(
      cart.products.map(({ item }) => {
        return { ...item, count: 1 };
      })
    );
  };

  React.useEffect(() => {
    getCart();
  }, []);

  return (
    <div>
      <Badge badgeContent={carts.length} color="success">
        <ShoppingCartIcon
          onClick={handleClick}
          style={{ fontSize: "50px", color: "red", cursor: "pointer" }}
        />
      </Badge>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className={cl.menushka}>
          <div className={cl.head}>
            <h5>Количество товаров: 3</h5>
            <p>в вашей корзине</p>
          </div>
          {!!carts?.length &&
            carts.map((item) => (
              <div className={cl.main_container} key={item.id}>
                <CartModalList item={item} getCart={getCart} />
              </div>
            ))}
          <div className={cl.footer}>
            <Link href="/cart">
              <h6>В корзину </h6>
            </Link>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default CartModal;
