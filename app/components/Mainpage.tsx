import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/Button";
import { FaLocationArrow } from "react-icons/fa";

const words = `Next Gen Teacher Assistant`;

const Mainpage = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-4xl text-center md:text-4xl lg:text-7xl">
        <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Tattva
          <TextGenerateEffect
            className="text-center text-xl-2 "
            duration={2}
            words={words}
          ></TextGenerateEffect>
        </div>
        <a href="#about">
          <Button
            
            title="Launch Tattva"
            icon={<FaLocationArrow />}
            position="right"
          ></Button>
        </a>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default Mainpage;
