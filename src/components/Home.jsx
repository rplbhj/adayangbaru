import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const Home = () => {
  return (
    <div>
      <div>
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

export default Home;
