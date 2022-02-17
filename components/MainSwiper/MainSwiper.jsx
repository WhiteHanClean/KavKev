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
          <img className={styles.ok_img} src='https://gipermarket.kg/wp-content/uploads/2021/12/ar-dajym-rus-1010x368.jpg' alt="" style={{ width:'800px' , height:'480px'}}/>
        </SwiperSlide >
        <SwiperSlide className={styles.slide_img}>
          <img className={styles.ok_img} src={img.src} alt="" style={{ width:'800px' }}/>
        </SwiperSlide>
        <SwiperSlide className={styles.slide_img}>
          <img className={styles.ok_img} src={img.src} alt="" style={{ width:'800px' }}/>
        </SwiperSlide>

        
      </Swiper>
    </div>
  );
}

export default MainSwiper;
