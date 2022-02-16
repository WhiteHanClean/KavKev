import logo from '../../assets/logo2.png';
import Logos from '../../components/logos';
import classes from './category.module.scss';
import { useEffect, useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
  getAllCategoryEntities,
  categorySelectors,
} from '../../redux/products/category.slice';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import { cardActionAreaClasses } from '@mui/material';


export default function Category() {


  const dispatch = useDispatch();

  const [carts, setCarts] = useState([]);
  useEffect(() => {
    dispatch(getAllCategoryEntities(1));
  }, []);

  const [checking, setChecking] = useState(checkItem)

  useEffect(()=>{
    setChecking(checkItem)
  })
  const category = useSelector((state) => categorySelectors.selectAll(state));

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


  const addToLocal = async (product) => {
    let cart = JSON.parse(window.localStorage.getItem("cart"));
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
      cart.products = cart.products.filter((item) => item.item.id !== product.id);
    } else {
      cart.products.push(newProduct);
    }
     window.localStorage.setItem('cart', JSON.stringify(cart))
     
  }


  function checkItem (prod){
    if(typeof localStorage != "undefined"){
      let cart = JSON.parse(localStorage.getItem("cart"));
      for(let i = 0; i < cart.products.length; i++){
        const item = cart.products[i];
        if(item.item.id === prod){
          return "red";
        }
        return "";
      }
    }
  }

  return (
    <>
      <Header carts={carts} />
      <div className={classes.container}>
        <Logos image={logo.src} /> <h1> Категории: </h1>{' '}
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
                {!!category &&
                  category.map((item) => {
                    return (
                      <div key={item.id} class={classes.wrapper}>
                        <div class={classes.container}>
                          <div
                            class={classes.top}
                            style={{
                              background: `url(${!!item.image && item.image
                                }) no-repeat center center`,
                            }}
                          >
                            {' '}
                          </div>{' '}
                          <div class={classes.bottom}>
                            <div class={classes.left}>
                              <div class={classes.details}>
                                <h1> {item.name_product} </h1> <p> £250 </p>{' '}
                              </div>{' '}
                              <div class={classes.buy}>
                                {' '}
                                <ShoppingCartIcon style={{ color: checkItem(item.id) }} onClick={() => {
                                  addToLocal(item);
                                }} />
                              </div>
                            </div>{' '}
                            <div class={classes.right}>
                              <div class={classes.done}>
                                {' '}
                                <i class='material-icons'> done </i>
                              </div>
                              <div class={classes.details}>
                                <h1> {item.name_product} </h1>{' '}
                                <p> Added to your cart </p>{' '}
                              </div>{' '}
                              <div class={classes.remove}>
                                {' '}
                                <i class='material-icons'> clear </i>
                              </div>
                            </div>{' '}
                          </div>{' '}
                        </div>{' '}
                        <div class={classes.inside}>
                          <div class={classes.icon}>
                            {' '}
                            <img
                              style={{ width: '30px' }}
                              src='https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/000000/external-info-digital-business-photo3ideastudio-lineal-photo3ideastudio.png'
                            />
                          </div>
                          <div class={classes.contents}>
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

