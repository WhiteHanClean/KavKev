import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import logo from '../assets/logo2.png';
import logo2 from '../assets/lol.jpg';
import Logos from '../components/logos';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ICard from '../components/ICard/ICard';
import { useRouter } from 'next/router';
import MainSwiper from '../components/MainSwiper/MainSwiper';
const imagesmain = [];
import Head from 'next/head';
import Vegetables from '../components/Vegetables/Vegetables';

const array = [
  {
    name: 'moloko',
    id: 1,
    image: logo2,
  },
  {
    name: 'мясо',
    id: 2,
    image: logo2,
  },
  {
    name: 'idi nuhui',
    id: 3,
    image: logo2,
  },
  {
    name: 'wsef',
    id: 4,
    image: logo2,
  },
  {
    name: 'wsefaw',
    id: 4,
    image: logo2,
  },
  {
    name: 'wsefaw',
    id: 4,
    image: logo2,
  },
  {
    name: 'wsefaw',
    id: 4,
    image: logo2,
  },
  {
    name: 'wsefaw',
    id: 4,
    image: logo2,
  },
  {
    name: 'кусок Залупы',
    id: 5,
    image: logo2,
  },
];
const index = () => {
  const [width, setWidth] = useState(0);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };
  const router = useRouter();
  useEffect(() => {
    if (window.localStorage.getItem("userToken")) {
      return;
    } else {
      router.push('/registration');
    }
  }, []);
  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div style={{marginBottom: "100px"}}>
      <MainSwiper/>
      <h1
        style={{
          fontSize: '35px',
          marginTop: '30px',
          textAlign: 'center',
        }}
      >
        Категории продуктов
      </h1>
      <div style={{background: "url(https://gipermarket.kg/wp-content/themes/gtm/images/bg-news_and_carousel.gif) no-repeat center top"}}>
      <Swiper
        
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesPerView={width <= 550 ? 1 : 3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={width <= 550 ? false : true}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        style={{
          width: '90%',
          padding: '40px 0px 40px 0px',
          boxSizing: 'border-box',
          marginBottom: "100px", 
        }}
      >
        {array.map((item, index) => {
          return (
            <SwiperSlide key={`item_${index}_swipe_slide`}>
              <ICard item={item} key={item.id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
      <Vegetables/>
    </div>
  );
};

export default index;
