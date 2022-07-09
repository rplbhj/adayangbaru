import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-router-dom";
import gbk from "../source/gbk.png";
import gbk2 from "../source/gbk2.svg";
import gbk3 from "../source/gbk3.svg";
import bljr from "../source/foto.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

const Hero = () => {
  return (
    <div id="home">
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
        <h1 className="text-center font-bold text-2xl uppercase mt-10 md:text-3xl bg-clip-text bg-gradient-to-r from-[#034867] to-[#bbe5f8] text-transparent">
          We are software engineer<span className="block">Smk Bhumi husada</span>
          <span className="block w-[100px] h-1 my-4 rounded-lg bg-[#034867] text-center mx-auto"></span>
        </h1>
        <div className="text-center">
          <h1 className="mx-3 mt-11 md:text-lg lg:text-xl">
            Software Engineering (RPL) adalah salah satu program keahlian yang ada di SMK Bhumi Husada yang dibuka pada tahun 2017.
            <span className="text-black pl-1 pb-3 text-center flex  place-content-center">
              Di SMK BHJ Belajar <span className="mx-1">Tentang</span>
              <TypeWriterEffect startDelay={1500} cursorColor="#3F3D56" multiText={["Coding..", "Assemble pc...", "Editing Video...", "Podcast..", "And Network."]} multiTextDelay={1000} typeSpeed={30} multiTextLoop className="pl-1" />
            </span>
          </h1>
        </div>
        <div className="m-3 ">
          <div className="md:flex ">
            <img src={bljr} className="flex rounded-lg drop-shadow-lg md:w-1/2 md:h-1/2 md:mt-[5rem] lg:pt-0 md:ml-10 md:pt-8" />
            <div className="lg:mt-[70px] md:mt-10 ">
              <h1 className="font-bold text-xl uppercase mt-3 mdtext-base lg:w-full md:text-center bg-clip-text bg-gradient-to-r from-[#034867] to-[#bbe5f8] text-transparent">
                our vision & mission <span className="block w-[230px] md:w-[100px] h-1 my-4 rounded-lg bg-[#034867] text-center md:mx-auto"></span>
              </h1>
              <h1 className="mt-3 md:ml-5 lg:text-lg md:mr-7 ">
                Menjadi SMK yang memiliki keunggulan lokal dan global serta berakhlak mulia Mengutamakan kesiapan siswa untuk memasuki dunia kerja sertamengembangkankeprofesionalan Menyiapkan tenaga menengah kejuruan yang terampil berakhlak
                mulia untuk mengisi kebutuhan dunia usaha dan industri Menyiapkan siswa agar menjadi warga negara yang produktif Menyiapkan siswa agar dapat berwirausaha secara mandiri Menyiapkan siswa agar dapat melanjutkan pedidikan ke
                jenjang yang lebih tinggi
              </h1>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <h1 className="m-3 pt-5 font-bold italic text-lg md:ml-10">Latest News → </h1>
          <div className="md:flex  ">
            <div
              style={{ backgroundImage: `url(${gbk2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
              className="min-w-[330px]  md:w-1/3 h-[420px]  m-5  rounded-xl relative drop-shadow-xl xl:mb-10 "
            >
              <Link to="/News1">
                <button className="absolute bottom-5 ml-6 px-6 py-3 bg-white/60 hover:bg-white/80 transition duration-300">Lihat Berita</button>
              </Link>
            </div>
            <div className="mb-10 mt-5 flex md:block md:w-full md:mr-5 xl:flex ">
              <div
                style={{ backgroundImage: `url(${gbk3})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
                className="w-1/2  ml-5 md:w-full md:mr-5 md:ml-0 h-[200px] xl:h-full    bg-slate-400 rounded-xl drop-shadow-xl relative flex"
              >
                <Link to="/News1">
                  <button className="absolute bottom-4 ml-4 px-5 py-2 bg-white/60 hover:bg-white/80 transition duration-300">Lihat Berita</button>
                </Link>
              </div>
              <div
                style={{ backgroundImage: `url(${gbk2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
                className="w-1/2 mr-5 ml-5 md:w-full md:mr-5 md:ml-0 h-[200px] xl:h-full md:mt-5 xl:mt-0    bg-slate-400 rounded-xl drop-shadow-xl relative flex"
              >
                <Link to="/News1">
                  <button className="absolute bottom-4 ml-4 px-5 py-2 bg-white/60 hover:bg-white/80 transition duration-300">Lihat Berita</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
