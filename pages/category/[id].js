import { useRouter } from 'next/router';
import logo2 from '../../assets/yaLox.png';
import logo from '../../assets/logo2.png';
import Logos from '../../components/logos';
import classes from './category.module.scss';
import Link from 'next/link';
import { useEffect } from 'react';
import lll from '../../assets/lll.png';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
  getAllCategoryEntities,
  categorySelectors,
} from '../../redux/products/category.slice';
import { useDispatch, useSelector } from 'react-redux';

export default function Category() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoryEntities(1));
  }, []);
  const category = useSelector((state) => categorySelectors.selectAll(state));

  // const router = useRouter();
  // const handleClickPageProduct = (id) => {
  //     console.log(id)
  //     return (
  //         <Link href={`/product_detail/${productCategory.id}`}>
  //     </Link>
  //     )
  // }

  return (
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
                            background: `url(${
                              !!item.image && item.image
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
                              <ShoppingCartIcon />
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
  );
}

/* <div className={classes.category_title}>
    <img className={classes.category_img} src={item.image.src} alt="asd" />
    <h3>{item.name}</h3>
    <p>{item.description}</p>
    <button onClick={()=>{
            console.log(item.id)
            router.push(`/product_detail/product-detail`)
        
    }} style={{
        width:'50px',
        height:'50px'
    }}></button>
    </div> */
