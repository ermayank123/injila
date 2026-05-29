import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CategorySlider = () => {
  const [categories, setCategories] = useState([]);
  const BASE_URL = "https://injila.in";

  useEffect(() => {
    axios.get(`${BASE_URL}/api/fetch-categories`)
      .then(res => {
        // 👉 Sirf subcategories dikhani hai (example: Jewellery ke andar wali)
        
        const allData = res.data.data;

        // Jewellery find karo
        const jewellery = allData.find(cat => cat.name === "Jewellery");

        // uski subcategories set karo
        setCategories(jewellery?.sub_categories || []);
      })
      .catch(err => console.error("Error fetching categories:", err));
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
          className="tf-swiper"
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <div className="box-image_category style-2 hover-img">

                <Link 
                  to={`/product?category=${cat.id}`} 
                  className="box-image_image img-style"
                >
                  <img 
                    src={`${BASE_URL}/storage/${cat.image}`} 
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

// import React from "react";
// import { Link } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";

// const categories = [
//   { title: "Necklace", image: "/assets/images/Gold-jwellery/necklace.jpeg", link: "product" },
//   { title: "Ring", image: "/assets/images/Gold-jwellery/ring.jpeg", link: "product" },
//   { title: "Nosepin", image: "/assets/images/Gold-jwellery/nojpin.jpeg", link: "product" },
//   { title: "Chauker", image: "/assets/images/Gold-jwellery/chauker.jpeg", link: "product" },
//   { title: "jhumki", image: "/assets/images/Gold-jwellery/jhumki-style-10.jpeg", link: "product" },
// ];

// const CategorySlider = () => {
//   return (
//     <div className="flat-spacing pb-0">
//       <div className="container">
//         <Swiper
//           modules={[Pagination]}
//           slidesPerView={5}
//           spaceBetween={40}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             1200: { slidesPerView: 5, spaceBetween: 40 },
//             992: { slidesPerView: 4, spaceBetween: 24 },
//             768: { slidesPerView: 3, spaceBetween: 12 },
//             576: { slidesPerView: 2, spaceBetween: 12 },
//           }}
//           className="tf-swiper"
//         >
//           {categories.map((cat, index) => (
//             <SwiperSlide key={index}>
//               <div className="box-image_category style-2 hover-img">
//                 <Link to={cat.link} className="box-image_image img-style">
//                   <img src={cat.image} alt={cat.title} loading="lazy" />
//                 </Link>
//                 <div className="box-image_content">
//                   <Link
//                     to={cat.link}
//                     className="tf-btn btn-white animate-btn animate-dark"
//                   >
//                     <span className="h5 fw-medium">{cat.title}</span>
//                   </Link>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default CategorySlider;
