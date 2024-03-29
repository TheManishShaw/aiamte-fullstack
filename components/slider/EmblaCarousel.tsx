import React, { useState, useEffect, useCallback } from "react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { TypeAnimation } from "react-type-animation";
import imageByIndex from "./imageByIndex";
import { DotButton, NextButton, PrevButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
const SLIDES = [
  {
    title: "Your Trusted AI Partner in Growth.",
    description:
      "We always work to fulfill the requirements for data collection and gathering by utilizing cutting-edge technology and AI-driven solutions. For the planning, development, implementation, and deployment of AI and ML projects, we offer field data, including training and testing data.",
  },
  {
    title: "Precision in Data, Excellence in AI Training",
    description:
      "Premium data covering a range of data formats i.e. text, audio, images, documents and videos.",
  },
  {
    title: "Boundless Trust, Data Security.",
    description:
      "Curating high-quality datasets with meticulous precision, we excel in collecting AI-relevant data, fostering excellence in various domains of artificial intelligence training.",
  },
  {
    title: "Quality BFSI  Document AI Data Available.",
    description:
      "Dependable Data Solutions for Document AI, ensuring reliability and excellence in information extraction, classification, and overall document processing efficiency.",
  },
];

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onInit);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {SLIDES.map((slide, index) => {
              const { src }: any = imageByIndex(index);

              // const src: string =
              //   imgData && typeof imgData === "object" && "src" in imgData
              //     ? imgData.src
              //     : ""; // Assigning src or an empty string if imgData is undefined

              return (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__overlay" />
                  <img
                    className="embla__slide__img"
                    src={src}
                    alt={`Slide ${index + 1}`}
                  />

                  <div className="absolute md:top-[15%] text-left text-white left-[10%] md:mt-44">
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "Beyond Limits, Beyond Expectations.",
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        "Your Trusted AI Partner in Growth.",
                        1000,
                        "Trustworthy AI Data Gathering Solutions.",
                        1000,
                        "Reliable Document AI Data.",
                        1000,
                        "Strategic Bonds, Intelligent Solutions.",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ fontSize: "2em", display: "inline-block" }}
                      repeat={Infinity}
                    />
                    <h2 className="text-5xl max-w-3xl font-bold">
                      {slide.title}
                    </h2>
                    <p className="max-w-3xl">{slide.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="embla__buttons">
          <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
          <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
        </div> */}
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </>
  );
};

export default EmblaCarousel;
