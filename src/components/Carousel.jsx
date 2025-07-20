import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function Carousel({
    data
}) {

    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Pagination]}
                className={`h-[450px] bg-white`}
            >
                {data[0]?.images.map((cur, index) => (
                    <SwiperSlide key={index}> <img src={cur} className='p-2' alt="" /> </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carousel
