import logo from '../../assets/logo2.png';
import Logos from '../../components/Logos';
import classes from './category.module.scss';
import { useEffect, useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useRouter } from 'next/router';
import { getCategory } from '../../redux/products/category.slice';
import { useDispatch, useSelector } from 'react-redux';
import BasicBreadcrumbs from '../../components/Breadcrumbs/BreadLoveSosaTwo';

export default function Category() {
  useEffect(() => {
    getCart();
  }, []);

  const dispatch = useDispatch();
  const [carts, setCarts] = useState([]);
  const router = useRouter();
  useEffect(() => {
    dispatch(getCategory(router.query.id));
  }, [router]);

  const [checking, setChecking] = useState(checkItem);

  useEffect(() => {
    setChecking(checkItem);
  });

  const { category } = useSelector((state) => state.category);

  const getCart = () => {
    let cart = JSON.parse(window.localStorage.getItem('cart'));
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

  const addToLocal = async (product) => {
    let cart = JSON.parse(window.localStorage.getItem('cart'));
    if (!cart) {
      cart = {
        products: [],
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    let filteredCart = cart.products.filter(
      (item) => item.item.id === product.id
    );
    if (filteredCart.length > 0) {
      cart.products = cart.products.filter(
        (item) => item.item.id !== product.id
      );
    } else {
      cart.products.push(newProduct);
    }
    window.localStorage.setItem('cart', JSON.stringify(cart));
    getCart();
  };

  function checkItem(prod) {
    if (typeof localStorage != 'undefined') {
      let cart = JSON.parse(localStorage.getItem('cart'));
      for (let i = 0; i < cart?.products?.length; i++) {
        const item = cart.products[i];
        if (item.item.id === prod) {
          return 'red';
        }
        return '';
      }
    }
  }

  return (
    <>
      <BasicBreadcrumbs />
      <div className={classes.container}>
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
                    return (
                      <>
                        <div key={item.id} className={classes.wrapper}>
                          <div className={classes.container}>
                            <div
                              className={classes.top}
                              style={{
                                background: `url(${
                                  !!item.image && item.image.src
                                }) no-repeat center center`,
                              }}
                            >
                              {' '}
                            </div>{' '}
                            <div className={classes.bottom}>
                              <div className={classes.left}>
                                <div className={classes.details}>
                                  <h1> {item.name_product} </h1>{' '}
                                  <p> {item.price} сом </p>{' '}
                                </div>{' '}
                                <div className={classes.buy}>
                                  {' '}
                                  <ShoppingCartIcon
                                    style={{
                                      color: checkItem(item.id),
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
