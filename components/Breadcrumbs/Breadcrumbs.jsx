import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  return (
    <div role='presentation' onClick={handleClick}>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link underline='hover' color='inherit' href='/'>
          <a>MUI</a>
        </Link>
        <Link
          underline='hover'
          color='inherit'
          href='/getting-started/installation/'
        >
          <a>Core</a>
        </Link>
      </Breadcrumbs>
    </div>
  );
}
