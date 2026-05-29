import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

const Slider = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  // Apne Laravel ka base URL yahan ek baar set kar dein
  const BASE_URL = "https://injila.in";

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/banner`)
      .then((res) => {
        // Agar response data wrap hokar aa raha hai (e.g. res.data.data) toh use handle karein
        const data = res.data.data ? res.data.data : res.data;
        setSlides(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Banner API error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-5">Loading Slider...</div>;

  return (
    <div className="tf-slideshow type-abs tf-btn-swiper-main hover-sw-nav">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={slides.length > 1} // Loop tabhi chale jab 1 se zyada slide ho
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".nav-next-swiper",
          prevEl: ".nav-prev-swiper",
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slider-wrap">
              {/* IMAGE - Dynamic path from storage */}
              <div className="sld_image">
                <img
                  src={`${BASE_URL}/storage/${slide.b_image}`}
                  alt={slide.b_name}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              </div>

              <div className="sld_content">
                <div className="container">
                  <div className="content-sld_wrap">
                    <h1 className="title_sld text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                      {slide.b_name}
                    </h1>

                    {/* Yahan aap slide ka description ya subtitle dikha sakte hain agar API mein hai */}
                    <p className="sub-text_sld h5 text-white">
                      {slide.b_description || "Latest Collection 2026"}
                    </p>

                    <Link to="/product" className="tf-btn animate-btn">
                      Shop now <i className="icon icon-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="tf-sw-nav nav-prev-swiper">
        <i className="icon icon-caret-left"></i>
      </div>
      <div className="tf-sw-nav nav-next-swiper">
        <i className="icon icon-caret-right"></i>
      </div>
    </div>
  );
};

export default Slider;