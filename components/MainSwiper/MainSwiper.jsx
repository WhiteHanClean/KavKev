import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../assets/img.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import styles from "./MainSwiper.module.scss";
// import "swiper/css";
import "swiper/css/navigation";



function MainSwiper({ images = ["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300"] }) {
  return (
    <div className={styles.container}>
        <div className={styles.background}></div>
       <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={styles.MainSwiper}
      >
        <SwiperSlide className={styles.slide_img}>
          <img className={styles.ok_img} src='https://retrofm.kg/wp-content/uploads/2021/05/57055b13-e910-430c-bc78-412f5b5acba9.jpg' alt="" style={{ height:'100%', width: "100%",objectFit: "cover" }}/>
        </SwiperSlide >
        <SwiperSlide className={styles.slide_img}>
          <img className={styles.ok_img} src='https://halalguide.me/media/imgs/places/2017/11/14/ergerg.jpg' alt="" style={{ height:'100%', width: "100%",objectFit: "cover" }}/>
        </SwiperSlide>        
      </Swiper>
    </div>
  );
}

export default MainSwiper;
