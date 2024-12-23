import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "This production company exceeded all expectations. Their creativity and professionalism are unmatched!",
    name: "Jane Doe",
    title: "Photographer",
    company: "Studio Light",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    text: "Working with this team has been an absolute pleasure. Their vision brought our campaign to life.",
    name: "John Smith",
    title: "Marketing Director",
    company: "Creative Co.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500",
  },
  {
    text: "A truly outstanding experience. From concept to execution, they went above and beyond.",
    name: "Emily White",
    title: "CEO",
    company: "Innovate Agency",
    image: "https://images.unsplash.com/photo-1500832333538-837287aad2b6?w=500",
  },
];

const TestimonialSection = () => {
  React.useEffect(() => {
    gsap.to(".testimonial-content", {
      opacity: 1,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: ".testimonial-content",
        start: "top center",
        end: "bottom 20%",
        toggleActions: "restart pause reverse pause",
      },
    });

    gsap.to(".client-picture", {
      scale: 1.1,
      duration: 1,
      scrollTrigger: {
        trigger: ".client-picture",
        toggleActions: "restart pause reverse pause",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="testimonial-section bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-wrapper flex flex-col md:flex-row items-center justify-center min-h-screen space-y-6 md:space-y-0">
              {/* Client Picture */}
              <div className="client-picture relative flex-shrink-0">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg hover:scale-105 transition-all duration-500 ease-in-out"
                />
              </div>

              {/* Testimonial Content */}
              <div className="testimonial-content max-w-lg md:ml-8 text-center md:text-left">
                <blockquote className="relative text-2xl md:text-3xl font-light leading-relaxed mb-4">
                  <span className="block text-indigo-500 text-6xl absolute top-[-1.5rem] left-[-2rem]">
                    &#8220;
                  </span>
                  {testimonial.text}
                </blockquote>
                <p className="font-semibold text-lg">{testimonial.name}</p>
                <p className="text-sm text-gray-400">
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Carousel Navigation */}
      {/* <div className="testimonial-pagination nav-dot w-4 h-4 rounded-full bg-gray-500 hover:bg-indigo-500 transition" /> */}
      {/* <div className="navigation mt-8 flex justify-center space-x-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className="nav-dot w-4 h-4 rounded-full bg-gray-500 hover:bg-indigo-500 transition"
          ></button>
        ))}
      </div> */}
    </section>
  );
};

export default TestimonialSection;
