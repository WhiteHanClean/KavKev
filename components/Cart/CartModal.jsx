import React from "react";
import Menu from "@mui/material/Menu";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import cl from "../Cart/CartModal.module.scss";
import CartModalList from "./CartModalList";
import Link from "next/link";
import { cartSelectors, sendCartDataToApi } from '../../redux/forCart/cartSlice'
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const CartModal = () => {
  const cartItems = useSelector(cartSelectors.selectAll);
  // const cartItems = useSelector((state)=>cartSelectors.selectAll(state));
  // const totalPrice = useSelector((state)=>state.cart.totalPrice)

  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function postItem() {
    dispatch(sendCartDataToApi(()=>{
      router.push('/cart');
    }))
    handleClose();
  }

  return (
    <div>
      <Badge badgeContent={cartItems.length} color="success">
        <ShoppingCartIcon
          onClick={handleClick}
          style={{ fontSize: '50px', color: 'red', cursor: 'pointer' }}
        />
      </Badge>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className={cl.menushka}>
          <div className={cl.head}>
            <h5>Количество товаров: {cartItems.length}</h5>
            <p>в вашей корзине</p>
          </div>
          <div className={cl.main_container}>
            {!!cartItems?.length &&
              cartItems.map((item) => (
                <CartModalList
                  key={item.id}
                  item={item}
                />
              ))}
          </div>
          {cartItems.length > 0 ? (
            <div onClick={postItem} className={cl.footer}>
              <h6>В корзину </h6>
            </div>
          ) : null}
        </div>
      </Menu>
    </div>
  );
};

export default CartModal;
