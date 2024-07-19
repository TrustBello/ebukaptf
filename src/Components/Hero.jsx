import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';


import { FreeMode, Navigation, Autoplay } from 'swiper/modules';
import ProjectPage from './ProjectPage';

const Body = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div>
    <div className='max-w-[1640px] h-full  font-monument-extended mt-[100px]  mx-auto p-4 px-[30px] lg:px-[40px] xl:px-[65px]'>
      <div className=' relative'>
        <Swiper
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 15,
              direction: 'vertical'
            },
            700: {
              slidesPerView: 1,
              spaceBetween:15,
              direction: 'vertical'
            },
          }}
          navigation={{
            clickable: true,
            nextEl: '.swiper-button-nexts',
            prevEl: '.swiper-button-prevs',
          }}
          freeMode={true}
          modules={[FreeMode, Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000, // Delay between slides in ms
            disableOnInteraction: false,
            allowTouchMove: false // Autoplay will not stop after user interactions
          }}
       
          speed={1000}
          effect='slide'
          className="swiper-container lg:h-[400px] h-[300px] lg:w-full text-black"
        >
          <SwiperSlide>
            <div className={`absolute w-full h-full text-black flex flex-col gap-5 justify-center  max-h-[400px] leading-[1.5] scale-${activeIndex === 0 ? '4' : '2'}`}>
              <h1 className='px-4 text-4xl sm:text-4xl md:text-5xl lg:text-[100px] w-[200px] font-bold'>Slow </h1>
              <h1 className='px-4 text-4xl sm:text-4xl md:text-5xl lg:text-[100px] font-bold'>Motion,</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`absolute w-full h-full text-black flex flex-col gap-5 justify-center max-h-[400px] leading-[1.5] scale-${activeIndex === 1 ? '2' : '3'}`}>
              <h1 className='px-4 text-4xl sm:text-4xl md:text-5xl lg:text-[100px] font-bold'>IS <br /> </h1>
              <h1 className='px-4 text-4xl sm:text-4xl md:text-5xl lg:text-[100px] font-bold'> Better</h1>
              <h1 className='px-4 text-4xl sm:text-4xl md:text-5xl lg:text-[100px] font-bold'> Than</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`absolute w-full h-full text-black flex flex-col gap-5 justify-center max-h-[400px] leading-[1.5] scale-${activeIndex === 2 ? '3' : '4'}`}>
              <h1 className='px-4 text-4xl sm:text-4xl md:text-5xl lg:text-[100px] font-bold'>No  </h1>
              <h1 className='px-4 text-4xl sm:text-4xl md:text-5xl lg:text-[100px] font-bold'>Motion.</h1>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlides here */}
        </Swiper>
      </div>

      {/* <div>
        <ProjectPage/>
      </div> */}
    </div>
    <ProjectPage/>
    </div>
  );
}

export default Body;
