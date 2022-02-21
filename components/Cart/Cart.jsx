import React, { useEffect, useState } from "react";
import cl from "./CartModal.module.scss";
import fo from "../../assets/halal.png";
import Image from "next/image";
import { Button } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import Link from "next/link";
import BreadLoveSosaTwo from "../Breadcrumbs/BreadLoveSosaTwo"
const Cart = () => {
  const dispatch = useDispatch();

  const deleteFromCart = () => {
    dispatch(removeItemFromCart(item.id))
  }
  const [afterCart, setAfterCarts] = useState(null);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    getItemFromBack();
  }, []);

  async function getItemFromBack() {
    await axios({
      method: "get",
      url: `http://api-kavkev.kg:8080/api/my_cart/`,
      headers: {
        Authorization: `Token ${localStorage.userToken}`,
      },
    })
      .then((res) => {
        setAfterCarts(res.data[0].all_products);
        setTotal(res.data[0].sum_price);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function deleteItem(id) {
    axios({
      method: "post",
      url: `http://api-kavkev.kg:8080/api/product/${id}/cart/`,
      headers: {
        Authorization: `Token ${localStorage.userToken}`,
      },
      data: {
        amount: 0,
      },
    })
      .then((res) => {
        console.log("elfkbkjcm");
      })
      .catch((err) => {
        console.log(err);
      });

    getItemFromBack();
  }

  return (
    <>
      <BreadLoveSosaTwo />
      <div className={cl.cart_container}>
        <div>
          {!!afterCart?.length &&
            afterCart.map((item) => (
              <div className={cl.cart_container_inner}>
                <div className={cl.cart_container_inner_block}>
                  <Image src={fo} alt="adsa" className={cl.img} />
                </div>
                <div className={cl.cart_container_inner_block}>
                  <h4>{item.product.name_product}</h4>
                  <p>{item.product.composition}</p>
                  <p>{item.general_price} сом</p>
                </div>
                <div className={cl.block}>
                  <Button
                    variant="outlined"
                    onClick={() => deleteItem(item.product.id)}
                  >
                    Убрать из корзины
                  </Button>
                </div>
              </div>
            ))}
        </div>

        {/* -------------------- */}
        <div className={cl.check}>
          <div className={cl.check_head}>
            <h3>Детали цен</h3>
          </div>
          {!!afterCart?.length &&
            afterCart.map((item) => (
              <div className={cl.check_main}>
                <p>
                  {item.product.name_product} | {item.quantity_product}*
                  {item.product.price} сом
                </p>
                <p>{item.general_price} сом</p>
              </div>
            ))}
          <div className={cl.check_footer}>
            <h5>Цена без учета доставки</h5>
            <div className={cl.check_footer_inner}>
              <p>Итого</p>
              <p>{total} сом</p>
            </div>
            <Link href="/checkout">
            <Button
              variant="contained"
              style={{ background: "orangered" }}
              onClick={() => getItemFromBack()}
            >
              Оформить заказ
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
