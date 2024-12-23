const images = [
  "https://images.unsplash.com/photo-1732201715630-dabf1f0143d1?w=3000&q=75",
  "https://images.unsplash.com/photo-1733690567161-326d5294d3bb?w=3000&q=100",
  "https://images.unsplash.com/photo-1516528387618-afa90b13e000?w=3000&q=75",
  "https://images.unsplash.com/photo-1513346940221-6f673d962e97?w=3000&q=75",
];

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "./herosection.css";

const PhotographySlider = () => {
  const slides = [
    {
      layerImg: "https://imgpanda.com/upload/ib/QTBKjzDqxD.png",
      mainImg: "https://imgpanda.com/upload/ib/QgDfPHowhf.jpg",
      title: "Desert",
      subtitle: "Lonliness",
    },
    {
      layerImg: "https://imgpanda.com/upload/ib/QTBKjzDqxD.png",
      mainImg: "https://imgpanda.com/upload/ib/sq4ALbEhIS.jpg",
      title: "Second",
      subtitle: "Lonliness",
    },
    {
      layerImg: "https://imgpanda.com/upload/ib/QTBKjzDqxD.png",
      mainImg: "https://imgpanda.com/upload/ib/I4qmZchHEP.jpg",
      title: "Third",
      subtitle: "Lonliness",
    },
    {
      layerImg: "https://imgpanda.com/upload/ib/QTBKjzDqxD.png",
      mainImg: "https://imgpanda.com/upload/ib/3MT0ktDOF4.jpg",
      title: "Third",
      subtitle: "Lonliness",
    },
    {
      layerImg: "https://imgpanda.com/upload/ib/QTBKjzDqxD.png",
      mainImg: "https://imgpanda.com/upload/ib/ciuzppjWeC.jpg",
      title: "Third",
      subtitle: "Lonliness",
    },
    {
      layerImg: "https://imgpanda.com/upload/ib/QTBKjzDqxD.png",
      mainImg: "https://imgpanda.com/upload/ib/P4k8H9khvt.jpg",
      title: "Third",
      subtitle: "Lonliness",
    },
  ];

  return (
    <section className="creative-photography--slider">
      <div className="swiper-container">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade, Navigation]}
          loop
          parallax
          autoHeight
          effect="fade"
          autoplay={{ delay: 5000 }}
          speed={2500}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          className="photography-swiper--slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`photography-slider--item ${
                    isActive ? "swiper-slide-active" : ""
                  }`}
                >
                  <div className="photography-slider--layer">
                    <img src={slide.layerImg} alt="img" />
                  </div>
                  <div className="photography-slider--content">
                    <div className="photography-slider--image">
                      <img src={slide.mainImg} alt="img" />
                      <div className="photography-slider--inner">
                        <div className="photography-heading">
                          <div className="photography-item--inner">
                            <h1 className="photography-item--title">
                              {slide.title} <br /> <span>{slide.subtitle}</span>
                            </h1>
                            <h1 className="photography-item--title-outline">
                              Folio
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
          <div className="creative-swiper--dots">
            <div className="swiper-pagination" />
          </div>
        </Swiper>
        <div className="creative-photography--sidebar absolute top-0 right-0 bottom-0 flex flex-col justify-center items-center z-[1]">
          <ul className="space-y-[36px]">
            {["FB", "IG", "YT", "DR"].map((item) => (
              <li key={item} className="rotate-90">
                <a
                  href="https://www.instagram.com/pushkarpixart/"
                  className="w-[50px] h-[27px] border border-white rounded-full flex justify-center items-center text-sm text-white transition-transform duration-200 hover:bg-[#b90808] hover:border-[#b90808]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="creative-swiper--dots swiper-pagination absolute left-[25px] bottom-[10%] flex flex-col space-y-[12px]" /> */}
      </div>
    </section>
  );
};

export default PhotographySlider;
