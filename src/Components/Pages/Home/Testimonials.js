import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import r1 from "../../../image/Image/r1.png";
import r2 from "../../../image/Image/r2.png";
import r3 from "../../../image/Image/r3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import TestimonialsCard from "./TestimonialsCard";
const Testimonials = () => {
  const review = [
    {
      name: "Nash Patrik",
      desig: "CEO, Manpol",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
      ratting: "5star",
      img: r1,
    },
    {
      name: "Miriam Barron",
      desig: "CEO, Manpol",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
      ratting: "5star",
      img: r2,
    },
    {
      name: "Miriam Barron",
      desig: "CEO, Manpol",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
      ratting: "5star",
      img: r3,
    },
    {
      name: "Miriam Barron",
      desig: "CEO, Manpol",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
      ratting: "5star",
      img: r3,
    },
    {
      name: "Miriam Barron",
      desig: "CEO, Manpol",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
      ratting: "5star",
      img: r3,
    },
    
  ];
  return (
    <section className="py-5 ">
      <h1 className="text-4xl text-center text-accent mt-5 font-bold">
        Testimonial
      </h1>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper swiper-container"
        breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            960: {
              width: 960,
              slidesPerView: 3,
            },
            480: {
              width: 480,
              slidesPerView: 1,
            },
          }}
          
      >
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {review.map((data, index) => (
            <div>
              <SwiperSlide >
                <TestimonialsCard data={data}></TestimonialsCard>
              </SwiperSlide>
            </div>
          ))}

       
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonials;
