import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CategorySlider = () => {
  const [categories, setCategories] = useState([]);

  const API_URL = "https://admin.injila.in/api/fetch-categories";
  const IMAGE_URL = "https://admin.injila.in/public/storage/uploads";

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        const allData = res.data.data || [];

        const jewellery = allData.find(
          (cat) => cat.name?.toLowerCase() === "jewellery"
        );

        setCategories(jewellery?.sub_categories || []);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  return (
    <div className="flat-spacing pb-0">
      <div className="container">
        <Swiper
          modules={[Pagination]}
          slidesPerView={5}
          spaceBetween={40}
          pagination={{ clickable: true }}
          breakpoints={{
            1200: { slidesPerView: 5, spaceBetween: 40 },
            992: { slidesPerView: 4, spaceBetween: 24 },
            768: { slidesPerView: 3, spaceBetween: 12 },
            576: { slidesPerView: 2, spaceBetween: 12 },
          }}
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <div className="box-image_category style-2 hover-img">
                <Link
                  to={`/product?category=${cat.id}`}
                  className="box-image_image img-style"
                >
                  <img
                    src={`${IMAGE_URL}/${cat.image}`}
                    alt={cat.name}
                    loading="lazy"
                  />
                </Link>

                <div className="box-image_content">
                  <Link
                    to={`/product?category=${cat.id}`}
                    className="tf-btn btn-white animate-btn animate-dark"
                  >
                    <span className="h5 fw-medium">{cat.name}</span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;