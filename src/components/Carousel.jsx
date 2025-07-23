import { React, useState } from 'react'

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
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>

            <Swiper
                // style={{
                //     '--swiper-navigation-color': '#fff',
                //     '--swiper-pagination-color': '#fff',
                // }}
                speed={0}
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                navigation={false}
                modules={[FreeMode, Navigation, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                className={`h-[450px] bg-white`}
            >
                {data[0]?.images.map((cur, index) => (
                    <SwiperSlide key={index}> <img src={cur} className='p-2' alt="" /> </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                style={{
                    width:'500px',
                    cursor: "pointer"
                }}
                onTouchMove={setThumbsSwiper}
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className=""
            >
                {data[0]?.images.map((cur, index) => (
                    <SwiperSlide key={index}> <img src={cur} className='p-2' alt="" /> </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Carousel
