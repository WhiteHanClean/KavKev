import React, { useEffect, useState } from 'react';
import cl from './CartModal.module.scss';
import fo from '../../assets/halal.png';
import Image from 'next/image';
import { Button } from '@mui/material';
import axios from 'axios';
import BreadLoveSosaTwo from '../Breadcrumbs/BreadLoveSosaTwo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems, cartSelectors } from '../../redux/forCart/cartSlice';

const Cart = () => {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartItems());
  }, []);

  const cart = useSelector((state) => cartSelectors.selectAll(state));

  // function deleteItem(id) {
  //   axios({
  //     method: 'post',
  //     url: `http://api-kavkev.kg:8080/api/product/${id}/cart/`,
  //     headers: {
  //       Authorization: `Token ${localStorage.userToken}`,
  //     },
  //     data: {
  //       amount: 0,
  //     },
  //   })
  //     .then((res) => {
  //       console.log('elfkbkjcm');
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   getItemFromBack();
  // }

  return (
    <>
      <BreadLoveSosaTwo />
      <div className={cl.cart_container}>
        <div>
          {!!cart &&
            cart.map((item) => (
              <div className={cl.cart_container_inner}>
                <div className={cl.cart_container_inner_block}>
                  <Image src={fo} alt='adsa' className={cl.img} />
                </div>
                <div className={cl.cart_container_inner_block}>
                  <h4>{item.product.name_product}</h4>
                  <p>{item.product.composition}</p>
                  <p>{item.general_price} сом</p>
                </div>
                <div className={cl.block}>
                  <Button
                    variant='outlined'
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
          {!!cart &&
            cart.map((item) => (
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
            <Button
              variant='contained'
              style={{ background: 'orangered' }}
              onClick={() => getItemFromBack()}
            >
              Оформить заказ
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
