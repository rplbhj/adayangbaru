import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Typewriter } from "react-simple-typewriter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

const Hero = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-full h-[250px] md:h-[330px] lg:h-[430px] bg-red-600">
          <div>
            <div>
              <div className="max-w-[800px] mt-[-10px] w-full h-[30rem] mx-auto text-center flex flex-col justify-center">
                <p className="text-[#7AAEC5] text-lg uppercase font-bold md:text-3xl">smk bhumi husada</p>
                <h1 className="text-2xl font-bold uppercase pt-3 md:text-4xl">we are software engineer</h1>
                <div>
                  <h3 className="text-1xl pt-3 capitalize text-slate-600 md:text-2xl">
                    <span>
                      <Typewriter words={["Eat", "Sleep", "Code", "Repeat!"]} loop={5} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[250px] md:h-[330px] lg:h-[430px] bg-slate-500">
          <h1>halo</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-[250px] md:h-[330px] lg:h-[430px] bg-yellow-300">
          <h1>halo</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
