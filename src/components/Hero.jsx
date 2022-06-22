import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TypeWriterEffect from "react-typewriter-effect";
import gbk from "../source/gbk.png";
import gbk2 from "../source/gbk2.svg";
import gbk3 from "../source/gbk3.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

const Hero = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-[220px] md:h-[330px] lg:h-[500px]  bg-cover bg-no-repeat" style={{ backgroundImage: `url(${gbk})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="content-center pt-[13%] text-white">
              <h2 className="text-xl font-bold font-sans text-[#bbe5f8] lg:text-3xl">SMK BHUMI HUSADA</h2>
              <h1 className="text-3xl uppercase font-bold tracking-widest font-sans lg:text-5xl">software engineer</h1>
              <h5 className="text-base lg:text-xl lg:pt-1">"Little Things Means A Lot"</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${gbk2})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center" }} className="w-full h-[220px] md:h-[330px] lg:h-[500px] bg-[#FFF3CE] justify-center"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[220px] md:h-[330px] lg:h-[500px] bg-[#EDFFD8] bg-cover bg-no-repeat content-center pt-[13%] text-white"
            style={{ backgroundImage: `url(${gbk3})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
          ></div>
        </SwiperSlide>
      </Swiper>
      <div>
        <div className="py-10">
          <h1 className="text-xl font-bold font-sans text-[#bbe5f8] lg:text-3xl">Home Page</h1>
        </div>
        <h1 className="flex">
          hallo
          <span className="text-red-900 pl-1 ">
            <TypeWriterEffect
              startDelay={1500}
              cursorColor="#3F3D56"
              multiText={["Hey there, This is a type writer animation package", "it consist of two types...", "Single text display and multi text display", "Fonts can be customized.", "The type speed can be customized as well"]}
              multiTextDelay={1000}
              typeSpeed={30}
              multiTextLoop
            />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
