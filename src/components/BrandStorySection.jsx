import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import "../css/styles.css"; 

const BrandStorySection = () => {
  const slides = [
{
  image: "/assets/images/Gold-jwellery/necklace.jpeg",
  title: "Crafted With Pure Materials",
  text: "Our jewellery is made without harmful chemicals, ensuring safety, purity, and long-lasting shine.",
},
{
  image: "/assets/images/Gold-jwellery/necklace-2.jpeg",
  title: "Premium Quality Craftsmanship",
  text: "Every piece is designed with precision and superior craftsmanship to deliver unmatched elegance.",
},
{
  image: "/assets/images/Gold-jwellery/necklace-3.jpeg",
  title: "Sustainable & Eco-Friendly",
  text: "We follow environmentally responsible practices to create jewellery that’s beautiful and conscious.",
},

  ];

  return (
<section className="flat-spacing">
  <div className="container">
    <div className="sect-title text-center">
      <h1 className="s-title mb-8">Brand Story</h1>
      <p className="s-subtitle h6">
        Discover the elegance, craftsmanship, and passion behind every Injila creation.
      </p>
    </div>

    <div className="box-intro has-mb text-center">
      <h4 className="slogan fw-normal">
        CRAFTING TIMELESS JEWELLERY WITH PURPOSE AND PRECISION.
      </h4>
      <p className="intro-text">
        At Injila, we believe jewellery is more than adornment—it's an expression of who 
        you are. Every piece is thoughtfully handcrafted, blending modern artistry with 
        traditional excellence to bring you designs that shine with meaning and elegance.
        <br className="d-none d-xxl-block" /> 
        Our journey is rooted in passion, creativity, and a commitment to perfection.
      </p>
    </div>

    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={3}
      pagination={{ clickable: true }}
      breakpoints={{
        320: { slidesPerView: 1 },
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      }}
      className="tf-swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="wg-icon-image hover-img">
            <div className="image img-style">
              <img src={slide.image} alt={slide.title} loading="lazy" />
            </div>
            <div className="box-icon">
              <div className="content">
                <h3 className="caption fw-normal">{slide.title}</h3>
                <p className="sub-text">
                  {slide.text}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

  );
};

export default BrandStorySection;
