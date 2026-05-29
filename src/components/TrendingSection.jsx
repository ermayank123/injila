import React, { useEffect, useState } from "react";
import axios from "axios";

const TrendingSection = () => {
  const [trendingItems, setTrendingItems] = useState([]);
  const BASE_URL = "https://injila.in"; 

  useEffect(() => {
    axios.get(`${BASE_URL}/api/fetch-products?trending=1`)
      .then(res => setTrendingItems(res.data.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="trending-section py-5">
      <div className="container">
        
        
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2" style={{ color: '#222', fontSize: '2.5rem' }}>
            Trending Products
          </h2>
          <div style={{ width: '60px', height: '3px', background: '#ffc107', margin: '0 auto' }}></div>
          <p className="text-muted mt-3">Explore our most trending and handpicked jewelry pieces.</p>
        </div>

    
        <div className="row g-4 justify-content-center">
          {trendingItems.length > 0 ? (
           
            trendingItems.slice(0, 4).map((item) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
                <a href={`/product-detail/${item.id}`} className="card-wrap text-decoration-none shadow-sm" style={{ background: '#fff', borderRadius: '15px', padding: '15px', display: 'block', transition: 'transform 0.3s' }}>
                  <div className="img-wrapper overflow-hidden" style={{ borderRadius: '10px' }}>
                    <img
                      src={item.image_urls && item.image_urls[0] ? item.image_urls[0] : 'https://via.placeholder.com/200'} 
                      alt={item.name}
                      className="img-fluid w-100 trending-img"
                      style={{ height: 250, objectFit: 'cover' }}
                    />
                  </div>
                  <div className="content-wrapper text-center mt-3">
                    <h3 className="fw-bold text-dark" style={{ fontSize: '1rem' }}>{item.name}</h3>
                    <p className="text-primary fw-bold">₹{item.SellPrice}</p>
                  </div>
                </a>
              </div>
            ))
          ) : (
            <div className="text-center w-100">
               <p className="text-muted">Loading trending items...</p>
            </div>
          )}
        </div>

        {/* --- View All Button (Centered) --- */}
        <div className="text-center mt-5">
          <a href="/shop" className="btn btn-dark px-5 py-2" style={{ borderRadius: '30px', fontWeight: '500' }}>
            View All Collection
          </a>
        </div>
      </div>

      <style>{`
        .trending-img { transition: transform 0.5s ease; }
        .card-wrap:hover { transform: translateY(-5px); border: 1px solid #ffc107; }
        .card-wrap:hover .trending-img { transform: scale(1.1); }
      `}</style>
    </section>
  );
};

export default TrendingSection;


// import React from "react";
// // import "../css/styles.css";

// const TrendingSection = () => {
//   const trendingItems = [
//     {
//       title: "Layered Necklaces",
//       desc: "Elevate your look with Injila's stunning layered necklaces that define elegance and grace.",
//       image:
//         "/assets/images/Gold-jwellery/jwellery.gif",
//       link: "product",
//       bgColor: "#d8af55",
//     },
//     {
//       title: "Signature Collections",
//       desc: "Explore Injila’s most loved jewellery pieces crafted to perfection for every occasion.",
//       image:
//         "/assets/images/Gold-jwellery/jwellery.gif", 
//       link: "product",
//       bgColor: "#d8af55",
//     },
//     {
//       title: "Injila Men",
//       desc: "Discover refined jewellery designed for men — bold, timeless, and uniquely Injila.",
//       image:
//         "/assets/images/Gold-jwellery/jwellery.gif", 
//       link: "product",
//       bgColor: "#d8af55",
//     },
//         {
//       title: "Injila Men",
//       desc: "Discover refined jewellery designed for men — bold, timeless, and uniquely Injila.",
//       image:
//         "/assets/images/Gold-jwellery/jwellery.gif",
//       link: "product",
//       bgColor: "#d8af55",
//     },
//         {
//       title: "Injila Men",
//       desc: "Discover refined jewellery designed for men — bold, timeless, and uniquely Injila.",
//       image:
//         "/assets/images/Gold-jwellery/jwellery.gif",
//       link: "product",
//       bgColor: "#d8af55",
//     },

//   ];

//   return (
//     <section className="trending-section py-5">
//       <div className="trending-wrapper animate-trigger animate container d-flex flex-wrap justify-content-center gap-4">
//         {trendingItems.map((item, index) => (
//           <div className="trending-item" key={index}>
//             <a
//               href={item.link}
//               className="card-wrap text-decoration-none"
//               style={{ "--bg-color": item.bgColor }}
//             >
//               <div className="img-wrapper">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="card-image img-fluid"
//                   loading="lazy"
//                   style={{ "--img-bg-color": "#FFFFFF" }}
//                 />
//               </div>
//               <div className="content-wrapper text-center mt-3">
//                 <h3 className="card-title fw-bold text-dark">
//                   <span>{item.title}</span>
//                 </h3>
//                 <p className="card-desc text-muted">{item.desc}</p>
//               </div>
//             </a>
//           </div>
//         ))}
//       </div>

//       {/* Inline CSS for smooth animation feel */}
//       <style jsx>{`
//         .trending-section {
//           background-color: #fff;
//         }
//         .trending-item {
//           width: 280px;
//           transition: all 0.4s ease;
//         }
//         .card-wrap {
//           display: block;
//           border-radius: 20px;
//           background-color: var(--bg-color);
//           padding: 20px;
//           transition: transform 0.4s ease, box-shadow 0.4s ease;
//         }
//         .card-wrap:hover {
//           transform: translateY(-10px) scale(1);
//           box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
//         }
//         .card-image {
//           width: 100%;
//           height: auto;
//           border-radius: 15px;
//         }
//         .card-title {
//           margin-top: 12px;
//           font-size: 1.2rem;
//         }
//         .card-desc {
//           font-size: 0.9rem;
//           line-height: 1.4;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default TrendingSection;
