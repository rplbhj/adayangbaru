import React, { useEffect, useState } from "react";
import Logo from "./source/logo.png";
import { GrFormClose } from "react-icons/gr";
import { GoThreeBars } from "react-icons/go";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Galery from "./components/Galery";
import Contact from "./components/Contact";
import Error from "./components/Error";

function App() {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 30 ? setBg(true) : setBg(false);
    });
  });

  const [Nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!Nav);
  };

  return (
    <Router>
      <nav>
        <div className="w-full h-[85px] ">
          <div className={`${bg ? "fixed w-full h-20 shadow-lg z-[100] bg-white/95 duration-300 " : "flex w-full bg-white  h-20 "} transition duration-300`}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
              <Link to="/">
                <img src={Logo} alt="" width="100" height="100" />
              </Link>
              <ul className="hidden mr-[4rem]  md:flex">
                <li>
                  <Link to="/" className="pl-4 uppercase hover:text-[#7AAEC5] duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="pl-4 uppercase hover:text-[#7AAEC5] duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/Galery" className="pl-4 uppercase hover:text-[#7AAEC5] duration-300">
                    Galery
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="pl-4 uppercase hover:text-[#7AAEC5] duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
              <div onClick={handleNav} className="pr-7 md:hidden cursor-pointer">
                {!Nav ? <GrFormClose size={40} /> : <GoThreeBars size={30} />}
              </div>
            </div>
            <div className={!Nav ? "fixed pt-5 top-[95px] right-9 w-[250px] h-[200px] bg-white rounded-lg shadow-2xl md:hidden ease-in-out duration-300 z-[100]  " : "fixed right-[-100%] top-[95px] ease-in-out duration-300   "}>
              <ul>
                <li>
                  <Link to="/" className="text-base text-slate-800 font-bold py-2 mx-8 flex transition hover:text-[#7AAEC5] duration-300 uppercase">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="text-base text-slate-800 font-bold py-2 mx-8 flex transition hover:text-[#7AAEC5] duration-300 uppercase">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/Galery" className="text-base text-slate-800 font-bold py-2 mx-8 flex transition hover:text-[#7AAEC5] duration-300 uppercase">
                    Galery
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="text-base text-slate-800 font-bold py-2 mx-8 flex transition hover:text-[#7AAEC5] duration-300 uppercase">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Galery" element={<Galery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer>
        <div className="p-10 bg-gray-800 text-gray-200 ">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2  xl:pr-10">
              <div className="mb-5">
                <h4 className="text-xl pb-4 lg:pl-[40px]">Rekayasa Perangkat Lunak</h4>
                <p className="text-gray-500 lg:pl-[40px]">
                  JL. Pegantin Ali Ciracas Jakarta Timur
                  <strong className="block">Phone : 083804450112</strong>
                  <strong>Email : rpl.bhj@gmail.com </strong>
                </p>
              </div>
              <div className="mb-5 lg:pl-[100px]">
                <h4 className="text-xl">Useful Links</h4>
                <ul className="text-gray-500">
                  <li className="pb-3 pt-2 hover:text-slate-300 transition duration-300 ">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="pb-3 hover:text-slate-300 transition duration-300">
                    <Link to="/About">About</Link>
                  </li>
                  <li className="pb-3 hover:text-slate-300 transition duration-300">
                    <Link to="/Galery">Gallery</Link>
                  </li>
                  <li className="pb-3 hover:text-slate-300 transition duration-300">
                    <Link to="/Contact">Contact</Link>
                  </li>
                </ul>
              </div>

              <div className="mb-5">
                <h4 className="text-xl">Sosial Media</h4>
                <ul className="text-gray-500">
                  <li className="pb-3 pt-2">
                    <a href="https://www.instagram.com/rplbhj/" target="_blank" className="pb-3 pt-2 hover:text-slate-300 transition duration-300 ">
                      Instagram
                    </a>
                  </li>
                  <li className="pb-3">
                    <a href="https://www.youtube.com/channel/UChGLYoQoqJ9ecsjQeB9oMeA" target="_blank" className="pb-3 pt-2 hover:text-slate-300 transition duration-300 ">
                      Youtube
                    </a>
                  </li>
                  <li className="pb-3">
                    <a href="https://www.facebook.com/akademifarmasi.husada" target="_blank" className="pb-3 pt-2 hover:text-slate-300 transition duration-300 ">
                      Facebook
                    </a>
                  </li>
                  <li className="pb-3">
                    <a href="https://www.tiktok.com/@fdlharip_" target="_blank" className="pb-3 pt-2 hover:text-slate-300 transition duration-300 ">
                      TikTok
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mb-5 ">
                <h4 className="capitalize pb-3">Come and join us !</h4>
                <p className="tetx-gray-500 pb-6 ">Join dan belajar bersama kami di SMK BHUMI HUSADA</p>
                <form className="flex flex-row flex-wrap">
                  <input type="text" name="name" id=" " className="text-gray-500 w-2/3 p-2 lg:w-full xl:w-2/3 focus:border-[#7AAEC5] rounded-l-md md:rounded-r-md lg:mt-2 xl:mt-0 lg:mr-2 xl:mr-0 " placeholder="Enter your email" />
                  <button className="p-2 W-1/3 bg-[#7AAEC5] text-white hover:bg-[#a7cada] capitalize md:ml-2 lg:ml-0 lg:mt-2 xl:mt-0 xl:ml-2  rounded-r-md md:rounded-l-md ">subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-900 text-gray-500 pt-10 pb-10">
          <div>
            <div className="text-center">
              <div className="uppercase">
                ©
                <strong>
                  <span>RPLBHJ</span>
                </strong>
                . Di Buat oleh Tim RPl
              </div>
              <div>
                Designed by{" "}
                <a href="#" class="text-[#7AAEC5]">
                  California
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
