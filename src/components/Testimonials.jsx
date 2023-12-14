import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu leo eu risus ultrices tempor vel non justo.",
      image:
        "https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Jane Smith",
      quote:
        "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
      image:
        "https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="bg-gray-200 py-16">
      <div className="container mx-auto px-10">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Testimonials
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <div className="relative flex flex-col items-center justify-center">
                <FaQuoteLeft className="absolute text-5xl text-gray-400 top-0 left-0 z-10 opacity-30" />
                <FaQuoteRight className="absolute text-5xl text-gray-400 bottom-0 right-0 z-10 opacity-30" />
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full h-40 w-40 object-cover border-4 border-white mb-4"
                />
                <p className="text-gray-700 mb-4 text-center">
                  {testimonial.quote}
                </p>
                <p className="text-gray-600 font-semibold">
                  - {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
