"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import imageByIndex from "./imageByIndex";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const [textAnimations, setTextAnimations] = useState([]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const animations = slides.map((_, index) => ({
      text: "add different text with a typing effect to each slide in your EmblaCarousel component, you can use a combination of React state, useEffect, and CSS for styling.",
      index,
      typingTimeout: null,
    }));
    setTextAnimations(animations);
  }, [slides]);

  const startTypingEffect = (index) => {
    const { text } = textAnimations[index];
    const newText =
      "add different text with a typing effect to each slide in your EmblaCarousel component, you can use a combination of React state, useEffect, and CSS for styling."; // Replace with your desired text

    let i = 0;
    const typingInterval = 100; // Adjust typing speed if needed

    const typingTimeout = setInterval(() => {
      setTextAnimations((prevAnimations) => {
        const updatedAnimations = [...prevAnimations];
        updatedAnimations[index].text = newText.substring(0, i);
        return updatedAnimations;
      });

      i += 1;
      if (i > newText.length) {
        clearInterval(typingTimeout);
        setIsTyping(false);
      }
    }, typingInterval);

    setTextAnimations((prevAnimations) => {
      const updatedAnimations = [...prevAnimations];
      updatedAnimations[index].typingTimeout = typingTimeout;
      return updatedAnimations;
    });
  };

  const stopTypingEffect = (index) => {
    clearInterval(textAnimations[index].typingTimeout);
    setIsTyping(false);
  };

  const onButtonClick = useCallback(() => {
    textAnimations.forEach(({ typingTimeout }) => {
      if (typingTimeout) clearInterval(typingTimeout);
    });
    setIsTyping(false);
  }, [textAnimations]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onButtonClick
  );
  const overlayStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)", // Adjust the overlay color and opacity
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff", // Text color on the overlay
    fontSize: "1.5rem", // Adjust the font size as needed
  };
  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        onButtonClick();
        startTypingEffect(selectedIndex);
      });
    }
  }, [emblaApi, selectedIndex, onButtonClick, startTypingEffect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div style={overlayStyles}>
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>
                <div className="embla__slide__text absolute">
                  {isTyping ? textAnimations[index]?.text : "Your default text"}
                </div>
                {/* <p>Additional content on overlay</p> */}
              </div>
              <img
                className="embla__slide__img"
                src={imageByIndex(index).src}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => {
              onDotButtonClick(index);
              stopTypingEffect(selectedIndex);
            }}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
