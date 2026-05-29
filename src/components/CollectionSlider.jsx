// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const CollectionSlider = () => {
//   // ✅ Use direct public paths (no imports)
//   const collections = [
//     { img: "/assets/images/Gold-jwellery/cls-1.jpg", title: "Clothing" },
//     { img: "/assets/images/Gold-jwellery/necklace-4.jpeg", title: "Jewellery" },
//     { img: "/assets/images/Gold-jwellery/chauker-2.jpeg", title: "Imitation Jewelry" },
//   ];

//   return (
//     <div className="s-collection">
//       <Swiper
//         modules={[Pagination]}
//         pagination={{ clickable: true }}
//         spaceBetween={24}
//         breakpoints={{
//           320: { slidesPerView: 1, spaceBetween: 10 },
//           576: { slidesPerView: 2, spaceBetween: 15 },
//           768: { slidesPerView: 2, spaceBetween: 20 },
//           1024: { slidesPerView: 3, spaceBetween: 24 },
//         }}
//         loop={true}
//         className="tf-swiper"
//       >
//         {collections.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="wg-cls-2 d-flex hover-img">
//               <a href="product" className="image img-style">
//                 <img src={item.img} alt={item.title} loading="lazy" />
//               </a>
//               <div className="cls-content_wrap b-16">
//                 <div className="cls-content">
//                   <a href="product" className="tag_cls h3 link">
//                     {item.title}
//                   </a>
//                   <span className="br-line type-vertical"></span>
//                   <a href="product" className="tf-btn-line text-nowrap">
//                     Shop now
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//         <div className="sw-dot-default tf-sw-pagination"></div>
//       </Swiper>
//     </div>
//   );
// };

// export default CollectionSlider;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const CollectionSlider = () => {
  const [collections, setCollections] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "https://injila.in";

  useEffect(() => {
    axios.get(`${BASE_URL}/api/fetch-categories`)
      .then((res) => {
        // ONLY MAIN CATEGORIES
        const mainCats = res.data.data.filter(
          (cat) => Number(cat.parent_id) === 0
        );
        setCollections(mainCats);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching collections:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="s-collection">

      {/* ✅ MAIN CATEGORY SLIDER */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={24}
        breakpoints={{
          320: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={collections.length > 3}
      >
        {collections.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="wg-cls-2 d-flex hover-img"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedCat(item)} // 👈 CLICK
            >
              <img
                src={`${BASE_URL}/storage/${item.image}`}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "450px",
                  objectFit: "cover",
                }}
              />

              <div className="cls-content_wrap b-16">
                <div className="cls-content">
                  <h3>{item.name}</h3>
                  <span className="br-line type-vertical"></span>
                  <a href="product">
                  <p>Shop Now</p></a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default CollectionSlider;