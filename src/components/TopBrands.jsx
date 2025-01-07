import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TopBrands = () => {
    return (
        <div className='my-10'>
            <h2 className='text-xl my-10 font-bold'>Top Brands</h2>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><img src="https://sportsworld.com.bd/wp-content/uploads/2020/10/Lining_logored-150x53-1.png"  alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://sportsworld.com.bd/wp-content/uploads/2020/10/Landice-150x53-1.jpg"  alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://sportsworld.com.bd/wp-content/uploads/2020/10/housefit-logo-inovby1-150x53-1.png"  alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://sportsworld.com.bd/wp-content/uploads/2020/10/Redon-150x53-1.jpg"  alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://sportsworld.com.bd/wp-content/uploads/2020/10/super-k-150x53-1.jpg"  alt="" /></SwiperSlide>
            
            
        </Swiper>
    </div>
    );
};

export default TopBrands;