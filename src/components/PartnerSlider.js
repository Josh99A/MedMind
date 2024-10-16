import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import './../assets/styles/PartnerSlider.css'; // Your custom CSS file
import { Pagination, Navigation } from "swiper/modules";

import medicalLogo from './../assets/images/medicalLogo.jpg'
import brandNameLogo from './../assets/images/brandnameLogo.jpg'
import healthCareLogo from './../assets/images/healthcareLogo.jpg'



const PartnersSlider = () => {
    // Example partner data (images, titles)
    const partners = [
      { id: 1, name: 'Medical', logo: medicalLogo},
      { id: 2, name: 'BrandName', logo: brandNameLogo },
      { id: 3, name: 'Health Care', logo: healthCareLogo },
      
      // Add more partners as needed
    ];
  
    return (
      <section className="partners-slider-section py-5">
        <div className="container text-center">
          <h2 className="section-title mb-4">Our Partners</h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={3} // Adjust for responsiveness
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {partners.map(partner => (
              <SwiperSlide key={partner.id}>
                <div className="partner-card">
                  <img src={partner.logo} alt={partner.name} className="partner-logo img-fluid" />
                  <h5 className="partner-name mt-3">{partner.name}</h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  };
  
  export default PartnersSlider;
  