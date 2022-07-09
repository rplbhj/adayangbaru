import React from "react";
import gbk2 from "../source/huu.svg";
import history from "../source/history.png";
import tangan from "../source/tangan.png";
import team from "../source/team.png";

const About = () => {
  return (
    <div style={{ backgroundImage: `url(${gbk2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="w-full h-[180vh] md:h-[100vh]">
      <div className="pt-[5rem]">
        <div className="text-center pt-10">
          <h1 className="capitalize text-2xl font-semibold text-white ">
            get to know us<span className="block w-[100px] md:w-[100px] h-1 my-4 rounded-lg bg-[#c8eeff]  mx-auto"></span>
          </h1>
        </div>
        <div className="md:flex mx-5 pt-5  ">
          <div className="w-full  bg-black/20 rounded-lg mt-5 md:mr-5 md:mb-10   ">
            <img src={history} className="mx-auto pt-8" />
            <h1 className="text-center py-7 font-bold text-lg md:text-xl lg:text-2xl text-white">History</h1>
            <p className="text-center mx-5 pb-9 md:text-lg lg:text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sequi quisquam cumque distinctio voluptate cum perspiciatis illo unde iure? Possimus.</p>
          </div>
          <div className="w-full  bg-black/20 rounded-lg mt-5 md:mr-5 md:mb-10 ">
            <img src={tangan} className="mx-auto pt-8" />
            <h1 className="text-center py-7 font-bold text-lg md:text-xl lg:text-2xl text-white">Partnerships</h1>
            <p className="text-center mx-5 pb-9 md:text-lg lg:text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sequi quisquam cumque distinctio voluptate cum perspiciatis illo unde iure? Possimus.</p>
          </div>
          <div className="w-full  bg-black/20 rounded-lg mt-5 md:mr-5 mb-10 ">
            <img src={team} className="mx-auto mb-2 pt-[50px]" />
            <h1 className="text-center py-7 font-bold text-lg md:text-xl lg:text-2xl text-white">Team</h1>
            <p className="text-center mx-5 pb-9 md:text-lg lg:text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, vero numquam nemo quam sit nihil ut quasi. Libero, necessitatibus consequatur?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
