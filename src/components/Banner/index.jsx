import React from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Banner.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Banner() {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        speed={ 750 }
        navigation
        pagination={{ clickable: true }}
        >
        <SwiperSlide>
          <div className={styles.banner}>
            <img src="./img/e-banner-mobile.png" className={styles.imagemBanner} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.banner}>
            <img src="./img/banner.png" className={styles.imagemBanner} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
