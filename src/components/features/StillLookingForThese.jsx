import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function StillLookingForThese() {
    return (
        <div className='bg-[#ecf2ff] mt-2 h-fit m-2 p-3 rounded-2xl'>
            <h1 className='font-bold'>Still looking for these?</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                className='mt-4'
                loop={true}
            >
                <SwiperSlide>
                    <div className='rounded-2xl bg-white p-2 min-h-[120px] w-fit'>
                        <div>
                            <img className='h-[90px] m-auto rounded-md' src="https://rukminim2.flixcart.com/image/390/390/xif0q/smartwatch/s/i/u/-original-imah76jt64ffmwg4.jpeg?q=80" alt="" />
                        </div>
                        <p className='text-[0.7rem] mt-4 text-nowrap'>Smart Watches</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-2xl bg-white p-2 min-h-[120px] w-fit'>
                        <div>
                            <img className='h-[90px] m-auto rounded-md' src="https://rukminim2.flixcart.com/image/390/390/xif0q/mobile/s/v/h/-original-imahd57g62dfepkh.jpeg?q=80" alt="" />
                        </div>
                        <p className='text-[0.7rem] mt-4 text-nowrap'>Mobiles</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-2xl bg-white p-2 min-h-[120px] w-fit'>
                        <div>
                            <img className='h-[90px] m-auto rounded-md' src="https://rukminim2.flixcart.com/image/734/1102/xif0q/face-wash/5/1/k/100-ocean-for-men-fights-acne-pimple-skin-brightening-all-skin-original-imahajnft9f9hfjc.jpeg?q=90&crop=false" alt="" />
                        </div>
                        <p className='text-[0.7rem] mt-4 text-nowrap'>Skincare</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-2xl bg-white p-2 min-h-[120px] w-fit'>
                        <div>
                            <img className='h-[90px] m-auto rounded-md' src="https://rukminim2.flixcart.com/image/734/880/xif0q/pressure-cooker/h/q/w/yes-3-pearlspecialcombo235l-greenchef-original-imah5ezn3zyhk8qs.jpeg?q=90&crop=false" alt="" />
                        </div>
                        <p className='text-[0.7rem] mt-4 text-nowrap'>Kitchen</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default StillLookingForThese