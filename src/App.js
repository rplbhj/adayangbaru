import React, { useEffect, useState } from "react";
import Logo from "./source/logo.png";
import { GrFormClose } from "react-icons/gr";
import { GoThreeBars } from "react-icons/go";
import Home from "./components/Home";
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
                  <Link to="/Home" className="pl-4 uppercase hover:text-[#7AAEC5] duration-300">
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
            <div className={!Nav ? "fixed pt-5 top-[95px] right-9 w-[250px] h-[200px] bg-white rounded-lg shadow-2xl md:hidden ease-in-out duration-300 z-[100]" : "fixed right-[-100%] top-[95px] ease-in-out duration-300   "}>
              <ul>
                <li>
                  <Link to="/Home" className="text-base text-slate-800 font-bold py-2 mx-8 flex transition hover:text-[#7AAEC5] duration-300 uppercase">
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
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Galery" element={<Galery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer>
        <div>Ini footer</div>
      </footer>
    </Router>
  );
}

export default App;
