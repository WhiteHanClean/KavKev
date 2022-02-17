import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styles from "./MainSwiper.module.scss";
import 'swiper/css/navigation';

function MainSwiper({ images }) {
  return (
    <div className={styles.container}>
        <div className={styles.background}></div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles.mySwper}
      >
        {images.map((item)=>{
          <SwiperSlide>
            <Image src={item} />
          </SwiperSlide>
        })}
      </Swiper>
    </div>
  );
}

export default MainSwiper;
