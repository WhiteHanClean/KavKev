import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import classes from './BreadCrumba.module.scss';
import { useRouter } from 'next/router';

function handleClick(event) {
  event.preventDefault();
}



export default function BasicBreadcrumbs(id , title) {
  const router = useRouter();

  console.log(router)
  return (
    <div
      style={{ background: 'white' }}
      role='presentation'
      onClick={handleClick}
      className={classes.conta}
    >
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='inherit' href='/'>
          <a
            style={{ textDecoration: 'none', color: 'black' }}
            onClick
            className={classes.liink}
          >
            Главное меню
          </a>
        </Link>
        <Link underline='hover' color='inherit' href={`/category/${id}`}>
          <a
            style={{ textDecoration: 'none', color: 'black' }}
            className={classes.liink}
          >
            Категории {title}
          </a>
        </Link>
        <Link underline='hover' color='inherit' href='/cart'>
          <a
            style={{ textDecoration: 'none', color: 'black'}}
            className={classes.liink}
          >
            Корзина
          </a>
        </Link>
      </Breadcrumbs>
    </div>
  );
}
