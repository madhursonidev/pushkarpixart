import { photos } from "src/data/common";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { IoIosArrowDown } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const [opacity, setOpacity] = useState(1);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollY(scrollPosition);
    const viewportHeight = window.innerHeight;
    const scrollThreshold = viewportHeight * 0.1; // Adjust the percentage as needed

    const newOpacity =
      scrollPosition < scrollThreshold
        ? 1
        : 1 - (scrollPosition - scrollThreshold) / (viewportHeight * 0.8);
    setOpacity(newOpacity < 0 ? 0 : newOpacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
  };

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.8}px)`, // Adjust the parallax effect by changing the multiplier
  };

  const arrows = [
    { delay: "0.4s" },
    { delay: "0.2s" },
    { delay: "0s" },
    // Add more objects if needed for additional bounces
  ];
  return (
    <div className="relative h-screen overflow-hidden">
      <div style={parallaxStyle}>
        <Slider {...settings} style={{ opacity }}>
          {photos.map((photo) => (
            <div key={photo.id}>
              <img
                src={photo.imageUrl}
                alt={photo.title}
                className="w-full h-screen object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="absolute inset-x-0 bottom-8 flex justify-center items-center">
        <div className="flex flex-col items-center">
          {arrows.map(({ delay }, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                bottom: `${index * 1}rem`,
                animation: `bounce 2s infinite ${delay} cubic-bezier(0.28, 0.84, 0.42, 1)`,
              }}
            >
              <IoIosArrowDown className="text-white text-4xl" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold mb-4 md:text-6xl">
            Welcome to My Elegant Portfolio
          </h1>
          <p className="text-lg md:text-xl">Beautiful Moments Captured</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
