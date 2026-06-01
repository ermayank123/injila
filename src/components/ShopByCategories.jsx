// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "../index.css";

// const ShopByCategories = () => {
//   const categories = [
//     { img: "/assets/images/Gold-jwellery/jhumki-style-2.jpeg", name: "Jhumki", count: 27 },
//     { img: "/assets/images/Gold-jwellery/earring.jpeg", name: "Earrings", count: 49 },
//     { img: "/assets/images/Gold-jwellery/necklace-2.jpeg", name: "Necklace", count: 37 },
//     { img: "/assets/images/Gold-jwellery/chauker.jpeg", name: "Chaukar", count: 80 },
//     { img: "/assets/images/Gold-jwellery/nojpin.jpeg", name: "Nosepin", count: 89 },
//   ];

//   return (
//     <section className="flat-spacing">
//       <div className="container">
//         <div className="sect-title text-center wow fadeInUp">
//           <h1 className="title mb-8">Jewellery</h1>
//           <p className="s-subtitle h6">
//             Up to 50% off Explore our sparkling collection of timeless pieces
//           </p>
//         </div>

//         <Swiper
//           modules={[Pagination]}
//           pagination={{ clickable: true }}
//           spaceBetween={40}
//           loop={true}
//           breakpoints={{
//             320: { slidesPerView: 2, spaceBetween: 12 },
//             576: { slidesPerView: 3, spaceBetween: 20 },
//             768: { slidesPerView: 4, spaceBetween: 32 },
//             1024: { slidesPerView: 5, spaceBetween: 40 },
//           }}
//           className="tf-swiper wow fadeInUp"
//         >
//           {categories.map((cat, index) => (
//             <SwiperSlide key={index}>
//               <a href="product/productdetail" className="widget-collection type-space-2 hover-img">
//                 <div className="collection_image img-style">
//                   <img src={cat.img} alt={cat.name} className="lazyload" />
//                 </div>
//                 <p className="collection_name h5 link fw-semibold">
//                   {cat.name} <span className="count text-main-2">({cat.count})</span>
//                 </p>
//               </a>
//             </SwiperSlide>
//           ))}

//           <div className="sw-dot-default tf-sw-pagination"></div>
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default ShopByCategories;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const ShopByCategories = () => {
  const [subCategories, setSubCategories] = useState([]);
  const BASE_URL = "https://admin.injila.in";
  
 
  const JEWELLERY_ID = 29; 


  useEffect(() => {
  axios.get(`${BASE_URL}/api/fetch-categories`) 
    .then(res => {
      const allData = res.data.data;
      
    
      const jewelleryMain = allData.find(cat => cat.id === 29);
      
  
      if (jewelleryMain && jewelleryMain.sub_categories) {
        setSubCategories(jewelleryMain.sub_categories);
      }
    })
    .catch(err => console.error(err));
}, []);

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="sect-title text-center mb-5">
          <h1 className="title">Jewellery Categories</h1>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 12 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
          }}
        >
          {subCategories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <a href={`/product?category=${cat.id}`} className="widget-collection hover-img">
                <div className="collection_image img-style" style={{ borderRadius: '50%', overflow: 'hidden', height: '180px', width: '180px', margin: '0 auto' }}>
                  <img 
                    src={`${BASE_URL}/storage/${cat.image}`} 
                    alt={cat.name} 
                    style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                  />
                </div>
                <p className="collection_name h5 link fw-semibold text-center mt-3">
                  {cat.name}
                </p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ShopByCategories;
