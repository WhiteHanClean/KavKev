import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Link from 'next/link';
function ICard({ item }) {
  return (
    <Card sx={{ width: '80%', marginLeft: '11%', borderRadius: '20px' }}>
      <CardActionArea>
        <Link href={`/category/${item.id}`}>
          <CardMedia
            style={{ height: '360px' }}
            component='img'
            image={item.image}
            alt={item.name}
          />
        </Link>
        <CardContent style={{ textAlign: 'start', marginTop: '16px' }}>
          <Typography gutterBottom variant='h5' component='div'>
            {item.category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={`/category/${item.id}`}>
          <Button size='small' color='primary'>
            Подробнее
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default ICard;
