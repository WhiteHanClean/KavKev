import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper';
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
import Head from 'next/head';
import Vegetables from '../components/Vegetables/Vegetables';

import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCategoryEntities,
  categorySelectors,
} from '../redux/products/category.slice';

const index = () => {
  const [width, setWidth] = useState(0);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  const allCategory = useSelector((state) =>
    categorySelectors.selectAll(state)
  );

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategoryEntities());
  }, []);
  useEffect(() => {
    if (window.localStorage.getItem('userToken')) {
      return;
    } else {
      router.push('/registration');
    }
  }, []);
  useEffect(() => {
    // component is mounted and window is available)
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  const keywords = `kavkev, kev kev, кавкев, кав кев,насвай ураган, сендвичи, сендвичи кав кев, сыры, сендвичи бишкек, бишкек КАВКЕВ,бишкек кафкев, каф-кев, кав-КЕВ, КАв-кев, СЫРЫ, сендвичи Питер`;
  return (
    <div>
      <Head>
        <title>Kav&kev || Интернет-Магазин || Категории товаров</title>
        <meta name='keywords' content={keywords} />
        <meta
          name='description'
          content='Оптовый Интернет-магазин продукции от Kav&Kev. Выберите и закажите партию продуктов онлайн!'
        />
        <meta charSet='uft-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <MainSwiper />
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
      <div
        style={{
          background:
            'url(https://gipermarket.kg/wp-content/themes/gtm/images/bg-news_and_carousel.gif) no-repeat center top',
        }}
      >
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
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          style={{
            width: '90%',
            padding: '40px 0px 40px 0px',
            boxSizing: 'border-box',
            marginBottom: '100px',
          }}
        >
          {allCategory.map((item, index) => {
            return (
              <SwiperSlide key={`item_${index}_swipe_slide`}>
                <ICard item={item} key={item.id} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Vegetables />
    </div>
  );
};

export default index;
