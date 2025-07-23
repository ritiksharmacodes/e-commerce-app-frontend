import { React, useState, useRef } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { Pagination, Navigation, FreeMode, Thumbs } from 'swiper/modules';

// function Carousel({
//     data
// }) {

//     return (
//         <div>
//             <Swiper
//                 slidesPerView={1}
//                 spaceBetween={30}
//                 loop={true}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 navigation={false}
//                 modules={[Pagination]}
//                 className={`h-[450px] bg-white`}
//             >
//                 {data[0]?.images.map((cur, index) => (
//                     <SwiperSlide key={index}> <img src={cur} className='p-2' alt="" /> </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     )
// }

function Carousel({ data }) {
    const swiperRef = useRef();

    return (
        <>
            <Swiper
                speed={0}
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                className={`h-[450px] bg-white`}
                allowTouchMove={false}                
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {data[0]?.images.map((cur, index) => (
                    <SwiperSlide key={index}> <img src={cur} className='p-2' alt="" /> </SwiperSlide>
                ))}
                
            </Swiper>
            <Swiper
                style={{
                    width: '500px',
                    cursor: "pointer"
                }}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
            >
                {data[0]?.images.map((curr, ind) => (
                    <SwiperSlide onMouseEnter={(e) => swiperRef.current.slideTo(ind) } key={ind}> <img src={curr} className='p-2' alt="" /> </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Carousel
