import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import classes from './BreadCrumba.module.scss';

function handleClick(event) {
  event.preventDefault();
}



export default function BasicBreadcrumbs() {
  return (
    <div
      style={{ background: 'white' }}
      role='presentation'
      onClick={handleClick}
      className={classes.conta}
    >
      <Breadcrumbs>
        <Link underline='hover' color='inherit' href='/'>
          <a
            style={{ textDecoration: 'none', color: 'black' }}
            className={classes.liink}
          >
            Главное меню
          </a>
        </Link>
        <Link underline='hover' color='inherit' href={`/category/1`}>
          <a
            style={{ textDecoration: 'none', color: 'black' }}
            className={classes.liink}
          >
            Категории 
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
