import logo from '../../assets/logo2.png';
import Logos from '../../components/logos';
import classes from './category.module.scss';
import { useEffect, useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
  getAllCategoryEntities,
  categorySelectors,
  getCategory,
} from '../../redux/products/category.slice';
import { useDispatch, useSelector } from 'react-redux';
import BasicBreadcrumbs from '../../components/Breadcrumbs/BreadLoveSosaTwo';
import { addItemToCart, cartSelectors, removeItemFromCart } from '../../redux/forCart/cartSlice';
import { useRouter } from 'next/router';
// import { Breadcrumbs } from '@mui/material';

export default function Category() {
  const dispatch = useDispatch();

  const cart = useSelector(cartSelectors.selectAll);
  const router = useRouter();
  useEffect(() => {
    dispatch(getCategory(router.query.id));
  }, [router]);

  const {category} = useSelector((state) => state.category);

  



  const addToLocal = async (product) => {
    let newProduct = {
      id: product.id,
      item: product,
      count: 1,
      subPrice: product.price,
    };
    if(cart.find(cartItem=>cartItem.id === product.id)){
      dispatch(removeItemFromCart(product.id))
    }else{
      dispatch(addItemToCart(newProduct));
    }
  };

  function checkItem(product) {
 
    if(cart.find(cartItem=>cartItem.id === product.id)){
      return "red"
    }else{
      return "black"
    }
  }

  return (
    <>
      <div className={classes.container}>
    <BasicBreadcrumbs />
       
        <Logos image={logo.src} />
        <h1 className={classes.title}> Категории</h1>{' '}
        <div className={classes.contet}>
          <div className={classes.container_home}>
            <div className={classes.category_item}>
              <div
                style={{
                  maxWitdh: '1200px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
              >
                {!!category?.products &&
                  category.products.map((item) => {
                    return (<>
                      <div key={item.id} className={classes.wrapper}>
                        <div className={classes.container}>
                          <div
                            className={classes.top}
                            style={{
                              background: `url(${
                                !!item.image && item.image
                              }) no-repeat center center`,
                            }}
                          >
                            {' '}
                          </div>{' '}
                          <div className={classes.bottom}>
                            <div className={classes.left}>
                              <div className={classes.details}>
                                <h1> {item.name_product} </h1> <p> £250 </p>{' '}
                              </div>{' '}
                              <div className={classes.buy}>
                                {' '}
                                <ShoppingCartIcon
                                  style={{
                                    color: checkItem(item),
                                    cursor: 'pointer',
                                  }}
                                  onClick={() => {
                                    addToLocal(item);
                                  }}
                                />
                              </div>
                            </div>{' '}
                            <div className={classes.right}>
                              <div className={classes.done}>
                                {' '}
                                <i className='material-icons'> done </i>
                              </div>
                              <div className={classes.details}>
                                <h1> {item.name_product} </h1>{' '}
                                <p> Added to your cart </p>{' '}
                              </div>{' '}
                              <div className={classes.remove}>
                                {' '}
                                <i className='material-icons'> clear </i>
                              </div>
                            </div>{' '}
                          </div>{' '}
                        </div>{' '}
                        <div className={classes.inside}>
                          <div className={classes.icon}>
                            {' '}
                            <img
                              style={{ width: '30px' }}
                              src='https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/000000/external-info-digital-business-photo3ideastudio-lineal-photo3ideastudio.png'
                            />
                          </div>
                          <div className={classes.contents}>
                            <table>
                              <tr>
                                <th> Width </th> <th> Height </th>{' '}
                              </tr>{' '}
                              <tr>
                                <td> 3000 mm </td> <td> 4000 mm </td>{' '}
                              </tr>{' '}
                              <tr>
                                <th> Something </th> <th> Something </th>{' '}
                              </tr>{' '}
                              <tr>
                                <td> 200 mm </td> <td> 200 mm </td>{' '}
                              </tr>{' '}
                              <tr>
                                <th> Something </th> <th> Something </th>{' '}
                              </tr>{' '}
                              <tr>
                                <td> 200 mm </td> <td> 200 mm </td>{' '}
                              </tr>{' '}
                              <tr>
                                <th> Something </th> <th> Something </th>{' '}
                              </tr>{' '}
                              <tr>
                                <td> 200 mm </td> <td> 200 mm </td>{' '}
                              </tr>{' '}
                            </table>{' '}
                          </div>{' '}
                        </div>{' '}
                      </div>
                      </>
                    );
                  })}
              </div>
            </div>{' '}
          </div>{' '}
        </div>
      </div>
    </>
  );
}