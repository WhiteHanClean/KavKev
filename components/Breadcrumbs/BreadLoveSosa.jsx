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
        <Link underline='hover' color='inherit' href='#'>
          <a
            style={{ textDecoration: 'none', color: 'rgba(214,52,71)' }}
            className={classes.liink}
          >
            Категории
          </a>
        </Link>
      </Breadcrumbs>
    </div>
  );
}
