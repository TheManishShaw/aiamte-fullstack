"use client";
import React from "react";
import HeroSlider, { Slide, Nav, SideNav } from "hero-slider";
import EmblaCarousel from "./slider/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
const OPTIONS: EmblaOptionsType = {
  align: "start",
  dragFree: true,
  loop: true,
};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const HeroSliders = () => {
  return (
    <div className="w-[100%] min-w-full">
      <section className="sandbox__carousel">
        <EmblaCarousel options={OPTIONS} />
      </section>
    </div>
  );
};

export default HeroSliders;
