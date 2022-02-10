import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, FreeMode } from "swiper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import logo from "../assets/logo2.png";
import logo2 from "../assets/lol.jpg";
import Logos from "../components/logos";
import Footer from "../components/Footer";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const index = () => {
  const array = [
    {
      name: "moloko",
      id: 1,
      image: logo2,
    },
    {
      name: "мясо",
      id: 2,
      image: logo2,
    },
    {
      name: "idi nuhui",
      id: 3,
      image: logo2,
    },
    {
      name: "wsef",
      id: 4,
      image: logo2,
    },
    {
      name: "wsefaw",
      id: 4,
      image: logo2,
    },
    {
      name: "wsefaw",
      id: 4,
      image: logo2,
    },
    {
      name: "wsefaw",
      id: 4,
      image: logo2,
    },
    {
      name: "wsefaw",
      id: 4,
      image: logo2,
    },
  ];

  //    const handleClickPageProduct = (id) => {
  //         <Link href={`/category/${id}`}>
  //         </Link>
  //     }
  return (
    <div>
      <Logos image={logo.src} />
      <h1
        style={{
          fontSize: "35px",
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        Категории продуктов
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        style={{width: "80%",marginBottom: "200px", padding: "40px", boxSizing: "border-box"}}
       
      >
        {array.map((item) => {
          return (
            <SwiperSlide>
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
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Footer />
    </div>
  );
};

export default index;
