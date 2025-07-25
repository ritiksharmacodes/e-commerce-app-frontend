import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './swiperPagination.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


function FrontPageAdvertismentBanner() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                }}
                loop={true}
                modules={[Autoplay, Pagination]}
                watchSlidesProgress={true}
                className="bg-none mt-4 h-[200px]"
            >
                <SwiperSlide className='h-[200px] px-3'><img className='rounded-2xl' src="https://rukminim2.flixcart.com/fk-p-flap/960/460/image/86479984fadf938d.jpeg?q=60" alt="" /></SwiperSlide>
                <SwiperSlide className='h-[200px] px-3'><img className='rounded-2xl' src="https://rukminim2.flixcart.com/fk-p-flap/960/460/image/86479984fadf938d.jpeg?q=60" alt="" /></SwiperSlide>
                <SwiperSlide className='h-[200px] px-3'><img className='rounded-2xl' src="https://rukminim2.flixcart.com/fk-p-flap/960/460/image/86479984fadf938d.jpeg?q=60" alt="" /></SwiperSlide>
                <SwiperSlide className='h-[200px] px-3'><img className='rounded-2xl' src="https://rukminim2.flixcart.com/fk-p-flap/960/460/image/86479984fadf938d.jpeg?q=60" alt="" /></SwiperSlide>
                <SwiperSlide className='h-[200px] px-3'><img className='rounded-2xl' src="https://rukminim2.flixcart.com/fk-p-flap/960/460/image/86479984fadf938d.jpeg?q=60" alt="" /></SwiperSlide>
                <SwiperSlide className='h-[200px] px-3'><img className='rounded-2xl' src="https://rukminim2.flixcart.com/fk-p-flap/960/460/image/86479984fadf938d.jpeg?q=60" alt="" /></SwiperSlide>
                <SwiperSlide className='h-[200px] px-3'><img className='rounded-2xl' src="https://rukminim2.flixcart.com/fk-p-flap/960/460/image/86479984fadf938d.jpeg?q=60" alt="" /></SwiperSlide>

                <div className="swiper-pagination"></div>
            </Swiper>
        </>
    );
}

export default FrontPageAdvertismentBanner