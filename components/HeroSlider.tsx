"use client";
import React from "react";
import HeroSlider, { Slide, Nav, SideNav } from "hero-slider";

const HeroSliders = () => {
  return (
    <div>
      <HeroSlider
        slidingAnimation="top_to_bottom"
        orientation="vertical"
        initialSlide={1}
        style={{
          color: "#FFF",
        }}
        settings={{
          slidingDuration: 400,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: true,
          autoplayDuration: 8000,
          height: "90vmin",
        }}
      >
        <Slide
          shouldRenderMask
          background={{
            backgroundAttachment: "fixed",
            backgroundColor: "#6D9B98",
            backgroundImage: "url(/images/download.jpg)", // Fix: use url() function
            backgroundPosition: "center center",
          }}
        />

        <Nav
          position={{
            bottom: "15%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <SideNav />
        <SideNav
          isPositionedRight={false}
          position={{
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
          }}
        />
      </HeroSlider>
    </div>
  );
};

export default HeroSliders;
