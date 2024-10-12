import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide} from 'swiper/react'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./../assets/styles/Testimonies.css";


// Import Swiper modules
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "John Doe",
    feedback:
      "MedMind has transformed the way I manage my health. It’s easy to use and the AI suggestions have been spot on!",
    designation: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    feedback:
      "As a busy mom, MedMind helps me stay on top of my family’s health. It's a must-have app for everyone!",
    designation: "Teacher",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Mark Johnson",
    feedback:
      "I love how MedMind connects me with real doctors when I need further consultation. Highly recommended!",
    designation: "Business Owner",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="testimonial-section">
      <h2>What Our Users Are Saying</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-slide">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <p>"{testimonial.feedback}"</p>
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.designation}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
