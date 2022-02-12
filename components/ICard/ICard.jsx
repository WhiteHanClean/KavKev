import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function ICard({item}) {
    return (
        <Card sx={{ width: "80%", marginLeft: "10%"}}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={item.image.src}
            alt={item.name}
          />
          <CardContent
            style={{ textAlign: "start", marginTop: "16px" }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Подробнее
          </Button>
        </CardActions>
      </Card>
    );
}

export default ICard;