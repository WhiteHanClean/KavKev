import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import cl from "../Cart/CartModal.module.scss";
import CartModalList from "./CartModalList";
import axios from "axios";
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

  function changeProductCount(amount, id) {
    if (amount <= 0) {
      amount = 1;
    }
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((item) => {
      console.log(item.item.id, item);
      if (item.item.id === id) {
        item.item.amount = amount;
        item.subPrice = +item.item.amount * +item.item.price;
      }
      return item;
    });
    // cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  React.useEffect(() => {
    getCart();
  }, []);

  function postItem() {
    carts.map((item) => {
      console.log(item)
      axios({
        method: "post",
        url: `http://api-kavkev.kg:8080/api/product/${item.id}/cart/`,
        headers: {
          Authorization: `Token ${localStorage.userToken}`,
        },
        data: {
          amount: `${item.amount}`,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          alert(`Просим прощения, ${item.name_product} в наличии нет`)
        });
    });
  }

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
            <h5>Количество товаров: {carts.length}</h5>
            <p>в вашей корзине</p>
          </div>
          {!!carts?.length &&
            carts.map((item) => (
              <div className={cl.main_container} key={item.id}>
                <CartModalList
                  item={item}
                  getCart={getCart}
                  changeProductCount={changeProductCount}
                />
              </div>
            ))}
          <div className={cl.footer}>
            <Link href="/cart">
            <h6 onClick={() => postItem()}>В корзину </h6>
            </Link>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default CartModal;
