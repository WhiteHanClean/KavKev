import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, FreeMode } from 'swiper';
import logo from '../assets/logo2.png';
import logo2 from '../assets/lol.jpg';
import Logos from '../components/logos';
import Footer from '../components/Footer';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ICard from '../components/ICard/ICard';
import { useRouter } from 'next/router';

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
    if (localStorage.getItem('access')) {
      return;
    } else {
      router.push('/registration');
    }
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <div>
      <Logos image={logo.src} />
      <h1
        style={{
          fontSize: '35px',
          marginTop: '30px',
          textAlign: 'center',
        }}
      >
        Категории продуктов
      </h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesPerView={width <= 475 ? 1 : 3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={width <= 475 ? false : true}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        style={{
          width: '80%',
          marginBottom: '200px',
          padding: '40px 0px 40px 0px',
          boxSizing: 'border-box',
        }}
      >
        {array.map((item, index) => {
          return (
            <SwiperSlide key={`item_${index}`}>
              <ICard item={item} key={item.id} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Footer />
    </div>
  );
};

export default index;
