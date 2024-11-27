import React from 'react';
const Hero = () => {
  return (
    <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
      {/* Left Section with Image */}
      <div
        className="bg-[url(/banner_bg.png)] bg-no-repeat bg-cover bg-center h-full"
        aria-label="Background Image"
      ></div>

      {/* Right Section with Text */}
      <div className="flex items-center justify-center  bg-opacity-50 text-white">
        <div className="text-center">
          <div className="text-6xl sm:text-8xl font-bold leading-tight">
            <p data-aos="zoom-in-up">I&apos;m</p>
            <p data-aos="zoom-in-up">Faiza</p>
            <p data-aos="zoom-in-up">Sheikh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
