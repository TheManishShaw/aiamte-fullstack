"use client";
import React, { useEffect, useState } from "react";

const slides = [
  {
    eachSlide: "url(/images/video/slider.gif)",
  },
  {
    eachSlide: "url(/images/video/slider-2.gif)",
  },
];
interface SliderStyles {
  width: string;
  transform: string;
  position: "relative"; // Specify the correct type for the 'position' property
  transition: string;
  display: string;
}
const Hero = () => {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const max = slides.length;

  const intervalBetweenSlides = () =>
    autoplay && setActive(active === max - 1 ? 0 : active + 1);

  React.useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 5000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    setAutoplay(!autoplay);
  }, []);
  const toggleAutoPlay = () => {};

  const nextOne = () => active < max - 1 && setActive(active + 1);

  const prevOne = () => active > 0 && setActive(active - 1);

  const isActive = (value: any) => active === value && "active";

  const setSliderStyles = (): SliderStyles => {
    const transition = active * -100;

    return {
      width: slides.length * 100 + "vw",
      transform: "translateX(" + transition + "vw)",
      position: "relative",
      transition: "transform 0.5s ease-in-out",
      display: "flex",
    };
  };
  const renderSlides = () =>
    slides.map((item, index) => (
      <div
        className="each-slide"
        key={index}
        style={{ backgroundImage: item.eachSlide }}
      >
        <div className="overlay"></div>
      </div>
    ));

  const renderDots = () =>
    slides.map((slide, index) => (
      <li className={isActive(index) + " dots"} key={index}>
        <button className="z-20" onClick={() => setActive(index)}>
          <span>&#9679;</span>
        </button>
      </li>
    ));
  const renderPlayStop = () =>
    autoplay ? (
      <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ) : (
      <svg fill="#FFFFFF" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    );

  const renderArrows = () => (
    <React.Fragment>
      <button
        type="button"
        className="arrows prev pl-5"
        onClick={() => prevOne()}
      >
        <svg fill="#FFFFFF" width="50" height="50" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      <button
        type="button"
        className="arrows next pr-5"
        onClick={() => nextOne()}
      >
        <svg fill="#FFFFFF" height="50" viewBox="0 0 24 24" width="50">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </React.Fragment>
  );

  return (
    <section className="slider">
      <div
        className="wrapper bg-blend-overlay bg-black z-20"
        style={setSliderStyles()}
      >
        {renderSlides()}
      </div>
      <div className="absolute top-[50vh] left-20 text-white z-30">
        <h2 className="text-5xl font-extrabold">
          Elevate Your AI Performance. <br />
          Exceptional Data Yields Superior Outcomes.
        </h2>
        <h3 className="text-2xl mt-3">
          Unleash the Potential of Premium Data Fuelling the Pinnacle of AI
          Endeavors.
        </h3>
      </div>
      <ul className="dots-container">{renderDots()}</ul>
      <button type="button" className="toggle-play" onClick={toggleAutoPlay}>
        {/* {renderPlayStop()} */}
      </button>
    </section>
  );
};

export default Hero;
