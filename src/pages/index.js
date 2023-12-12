import React, { useEffect, useState } from "react";
import PhotoCard from "src/components/PhotoCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUs from "src/components/AboutUs";
import { IoIosArrowDown } from "react-icons/io";

const photos = [
  {
    id: 1,
    title: "Sunset by the Beach",
    imageUrl:
      "https://images.unsplash.com/photo-1702234577513-151004f4cb44?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A breathtaking view of the sunset over the ocean.",
  },
  {
    id: 2,
    title: "Cityscape at Night",
    imageUrl:
      "https://images.unsplash.com/photo-1699775292727-06fabf36730d?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Vibrant city lights illuminating the night sky.",
  },
  // Add more photo objects as needed
];

const HomePage = () => {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / window.innerHeight) * 100;
    const newOpacity =
      scrollPercentage < 40 ? 1 : 1 - (scrollPercentage - 40) / 20; // Adjust the scroll threshold here
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

  return (
    <div>
      <div className="relative h-screen overflow-hidden">
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
        <div className="absolute inset-x-0 bottom-8 flex justify-center">
          <IoIosArrowDown className="text-white text-4xl animate-bounce" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to My Elegant Portfolio
            </h1>
            <p className="text-lg">Beautiful Moments Captured</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
      <AboutUs />
    </div>
  );
};

export default HomePage;
