// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUser,
//   faMagnifyingGlass,
//   faHeart,
//   faCartShopping
// } from "@fortawesome/free-solid-svg-icons";
// // import "../css/styles.css";

// const Header = ({ setShowEnquiryForm }) => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [productMenuOpen, setProductMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);

//   const jewelleryCategories = [
//     "Gold Kundan Jewellery",
//     "Meena Jewellery",
//     "Polki Jewellery",
//     "Jadau Jewellery",
//     "22 Karat Gold Jewellery",
//     "18 Karat Gold Jewellery",
//     "14 Karat Gold Jewellery",
//     "24 Karat Gold Ornaments (Pure Gold – mostly coins, bars)",
//   ];

//   const artificialJewellery = [
//     "Kundan Jewellery",
//     "Antique jewellery",
//     "Ad jewellery",
//     "Rajputi jewellery",
//     "1 gram gold jewellery",
//     "Bridal set, sale and rent both",
//     "Handmade Traditional Jewellery",
//     "Antique Gold Jewellery",
//     "Matte Finish Gold Jewellery",
//     "Temple Jewellery",
//   ];


//   const kurtiCategories = [
//     "Cotton Kurtis",
//     "Silk Kurtis",
//     "Designer Kurtis",
//     "Printed Kurtis",
//     "Anarkali Kurtis",
//     "Party Wear Kurtis",
//   ];
//   useEffect(() => {
//     const handleScroll = () => setIsSticky(window.scrollY > 100);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* 🔹 Top Black Bar */}
//       <div className="tf-topbar bg-black">
//         <div className="container-full">
//           <div className="row">
//             <div className="col-xl-7 col-lg-8">
//               <div className="topbar-left">
//                 <h6 className="text-up text-white fw-normal text-line-clamp-1">
//                   Injila brings you exquisite jewellery designed with artistry, passion, and a touch of royal charm.
//                 </h6>
//               </div>
//             </div>
//             <div className="col-xl-5 col-lg-4 d-none d-lg-block">
//               <ul className="topbar-right topbar-option-list">
//                 <li className="h6">
//                   <Link to="/faq" className="text-white link">Help & FAQs</Link>
//                 </li>
//                 <li className="br-line"></li>
//                 <li className="h6">
//                   <Link to="/factory" className="text-white link">Factory</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Header Section */}
//       <header className={`tf-header admin-h header-fix header-abs-1 ${isSticky ? "sticky" : ""}`}>
//         <div className="container-full">
//           <div className="row align-items-center">

//             {/* 🔹 Mobile Menu Button */}
//             <div className="col-md-4 col-3 d-xl-none">
//               <button
//                 className="btn-mobile-menu"
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               >
//                 <span></span>
//               </button>
//             </div>

//             {/* 🔹 Logo */}
//             <div className="col-xl-3 col-md-4 col-6 d-flex justify-content-center justify-content-xl-start">
//               <Link to="/" className="logo-site">
//                 <img src="assets/images/logo/logo.svg" alt="Logo" />
//               </Link>
//             </div>

//             {/* 🔹 Desktop Navigation */}
//             <div className="col-xl-6 d-none d-xl-block">
//               <nav className="box-navigation">
//                 <ul className="box-nav-menu">
//                   <li className="menu-item"><Link to="/" className="item-link">HOME</Link></li>

//                   <li
//                     className="menu-item"
//                     onMouseEnter={() => setProductMenuOpen(true)}
//                     onMouseLeave={() => setProductMenuOpen(false)}
//                   >
//                     <Link to="/product" className="item-link">
//                       PRODUCT <i className="icon icon-caret-down"></i>
//                     </Link>

//                     {productMenuOpen && (
//                       <div className="sub-menu mega-menu">
//                         <div className="container">
//                           <div className="row">
//                             <div className="col-3">
//                               <h4 className="menu-heading">Jewellery</h4>
//                               <ul className="sub-menu_list">
//                                 {jewelleryCategories.map((item, i) => (
//                                   <li key={i}>
//                                     <Link to="/product/productdetail" className="sub-menu_link">
//                                       {item}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>

//                             <div className="col-3">
//                               <h4 className="menu-heading">Imitation Jewellery</h4>
//                               <ul className="sub-menu_list">
//                                 {artificialJewellery.map((item, i) => (
//                                   <li key={i}>
//                                     <Link to="/product/productdetail" className="sub-menu_link">
//                                       {item}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>

//                             <div className="col-3">
//                               <h4 className="menu-heading">Kurtis</h4>
//                               <ul className="sub-menu_list">
//                                 {kurtiCategories.map((item, i) => (
//                                   <li key={i}>
//                                     <Link to="/product/productdetail" className="sub-menu_link">
//                                       {item}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>

//                             <div className="col-3">
//                               <ul className="list-hor">
//                                 <li className="wg-cls hover-img">
//                                   <Link to="/product" className="image img-style">
//                                     <img src="/assets/images/Gold-jwellery/cls-header-1.jpg" alt="Collection" />
//                                   </Link>
//                                   <div className="cls-content">
//                                     <h4 className="tag_cls">Kurtis</h4>
//                                     <span className="br-line type-vertical"></span>
//                                     <Link to="/product" className="tf-btn-line">Shop Now</Link>
//                                   </div>
//                                 </li>
//                               </ul>
//                             </div>

//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </li>

//                   <li className="menu-item"><Link to="/about" className="item-link">ABOUT US</Link></li>
//                   <li className="menu-item"><Link to="/contact" className="item-link">CONTACT</Link></li>
//                 </ul>
//               </nav>
//             </div>

//             {/* 🔹 Icons */}
//             <div className="col-xl-3 col-md-4 col-3">
//               <ul className="nav-icon-list">

//                 {/* Login */}
//                 <li className="d-none d-lg-flex">
//                   <Link to="/login" className="nav-icon-item link">
//                     <FontAwesomeIcon icon={faUser} />
//                   </Link>
//                 </li>

//                 {/* Search */}
//                 <li className="d-none d-md-flex">
//                   <button
//                     onClick={() => setSearchOpen(!searchOpen)}
//                     className="nav-icon-item link"
//                     style={{ background: "none", border: "none" }}
//                   >
//                     <FontAwesomeIcon icon={faMagnifyingGlass} />
//                   </button>
//                 </li>

//                 {/* Wishlist */}
//                 <li className="d-none d-sm-flex">
//                   <Link to="/wishlist" className="nav-icon-item link">
//                     <FontAwesomeIcon icon={faHeart} />
//                   </Link>
//                 </li>

//                 {/* Cart */}
//                 <li className="shop-cart">
//                   <button
//                     onClick={() => setShowEnquiryForm(true)}
//                     className="nav-icon-item link"
//                     style={{ background: "none", border: "none", cursor: "pointer" }}
//                   >
//                     <FontAwesomeIcon icon={faCartShopping} />
//                   </button>

//                   <span className="count">24</span>
//                 </li>

//               </ul>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* 🔹 Search Dropdown */}
//       {searchOpen && (
//         <div className="search-dropdown">
//           <input
//             type="text"
//             placeholder="Search for products..."
//             className="form-control search-input"
//             autoFocus
//           />
//           <button onClick={() => setSearchOpen(false)} className="close-search">×</button>
//         </div>
//       )}

//       {/* 🔹 Mobile Menu Overlay */}
//       {mobileMenuOpen && (
//         <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}></div>
//       )}

//       {/* 🔹 Mobile Navigation */}
//       <nav className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
//         {/* 🔹 Close Icon */}
//         <div
//           className="mobile-menu-header"
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             padding: "10px 20px",
//             fontSize: "30px",
//           }}
//         >
//           <h4 style={{ color: "#fff", margin: 0 }}>Menu</h4>
//           <button
//             onClick={() => setMobileMenuOpen(false)}

//             aria-label="Close Menu"
//           >
//             &times;
//           </button>
//         </div>

//         <ul className="nav-ul-mb" style={{ padding: "15px 20px" }}>
//           <li className="pb-3">
//             <Link to="/" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
//           </li>

//           {/* 🔹 PRODUCT Dropdown */}
//           <li className="pb-3">
//             <button
//               className=""
//               onClick={() => setProductMenuOpen(!productMenuOpen)}

//             >
//               PRODUCT <i className={`icon icon-caret-${productMenuOpen ? "up" : "down"}`}></i>
//             </button>

//             {productMenuOpen && (
//               <ul className="sub-nav-menu" style={{ background: "#222", paddingLeft: "20px" }}>
//                 <li><strong style={{ color: "#f8d90f" }}>Jewellery</strong></li>
//                 {[
//                   "Gold Kundan Jewellery",
//                   "Meena Jewellery",
//                   "Polki Jewellery",
//                   "Jadau Jewellery",
//                   "22 Karat Gold Jewellery",
//                   "18 Karat Gold Jewellery",
//                   "14 Karat Gold Jewellery",
//                   "24 Karat Gold Ornaments (Pure Gold – mostly coins, bars)",
//                 ].map((item, i) => (
//                   <li key={i}>
//                     <Link
//                       to="/product/productdetail"
//                       onClick={() => setMobileMenuOpen(false)}
//                       style={{ color: "#ddd", display: "block", padding: "5px 0" }}
//                     >
//                       {item}
//                     </Link>
//                   </li>
//                 ))}

//                 <li><strong style={{ color: "#f8d90f" }}>Imitation Jewellery</strong></li>
//                 {[
//                   "Kundan Jewellery",
//                   "Antique jewellery",
//                   "Ad jewellery",
//                   "Rajputi jewellery",
//                   "1 gram gold jewellery",
//                   "Bridal set, sale and rent both",
//                   "Handmade Traditional Jewellery",
//                   "Antique Gold Jewellery",
//                   "Matte Finish Gold Jewellery",
//                   "Temple Jewellery",
//                 ].map((item, i) => (
//                   <li key={i}>
//                     <Link
//                       to="/product/productdetail"
//                       onClick={() => setMobileMenuOpen(false)}
//                       style={{ color: "#ddd", display: "block", padding: "5px 0" }}
//                     >
//                       {item}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>

//           <li className="pb-3"><Link to="/about" onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link></li>
//           <li className="pb-3"><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link></li>
//           <li className="pb-3"><Link to="/login" onClick={() => setMobileMenuOpen(false)}>LOGIN</Link></li>



          
//         </ul>
//       </nav>


//     </>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass, faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = ({ setShowEnquiryForm }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Dynamic Categories State
  const [categories, setCategories] = useState({
    jewellery: [],
    imitation: [],
    kurtis: []
  });

  const BASE_URL = "https://injila.in";

  useEffect(() => {

     const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
  axios.get(`${BASE_URL}/api/fetch-categories`)
    .then(res => {
      const allData = res.data.data;

      const jewellery = allData.find(cat => cat.name === "Jewellery");
      const imitation = allData.find(cat => cat.name === "Imitation Jewellery");
      const kurtis = allData.find(cat => cat.name === "Kurtis");

      setCategories({
        jewellery: jewellery ? jewellery.sub_categories : [],
        imitation: imitation ? imitation.sub_categories : [],
        kurtis: kurtis ? kurtis.sub_categories : []
      });
    })
    .catch(err => console.error("Error loading categories:", err));

     return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      {/* 🔹 Top Bar (Same as before) */}
      

             <div className="tf-topbar bg-black">
        <div className="container-full">
         <div className="row">
          <div className="col-xl-7 col-lg-8">
             <div className="topbar-left">
               <h6 className="text-up text-white fw-normal text-line-clamp-1">
                 Injila brings you exquisite jewellery designed with artistry, passion, and a touch of royal charm.
                </h6>
              </div>
                        </div>
             <div className="col-xl-5 col-lg-4 d-none d-lg-block">
              <ul className="topbar-right topbar-option-list">
                <li className="h6">
                 <Link to="/faq" className="text-white link">Help & FAQs</Link>
               </li>
               <li className="br-line"></li>
                 <li className="h6">
                 <Link to="/factory" className="text-white link">Factory</Link>
                </li>
              </ul>
            </div>
          </div>
       </div>     </div>
     

      <header className={`tf-header admin-h header-fix header-abs-1 ${isSticky ? "sticky" : ""}`}>
        <div className="container-full">
          <div className="row align-items-center">
            
            {/* Logo */}
            <div className="col-xl-3 col-md-4 col-6">
              <Link to="/" className="logo-site">
                <img src="/assets/images/logo/logo.svg" alt="Logo" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="col-xl-6 d-none d-xl-block">
              <nav className="box-navigation">
                <ul className="box-nav-menu">
                  <li className="menu-item"><Link to="/" className="item-link">HOME</Link></li>

                  <li 
                    className="menu-item"
                    onMouseEnter={() => setProductMenuOpen(true)}
                    onMouseLeave={() => setProductMenuOpen(false)}
                  >
                    <Link to="/product" className="item-link">PRODUCT</Link>

                    {productMenuOpen && (
                      <div className="sub-menu mega-menu">
                        <div className="container">
                          <div className="row">
                            
                            {/* Dynamic Jewellery */}
                            <div className="col-3">
                              <h4 className="menu-heading">Jewellery</h4>
                              <ul className="sub-menu_list">
                                {categories.jewellery.map((cat) => (
                                  <li key={cat.id}>
                                    <Link to={`/product?category=${cat.id}`} className="sub-menu_link">
                                      {cat.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Dynamic Imitation */}
                            <div className="col-3">
                              <h4 className="menu-heading">Imitation Jewellery</h4>
                              <ul className="sub-menu_list">
                                {categories.imitation.map((cat) => (
                                  <li key={cat.id}>
                                    <Link to={`/product?category=${cat.id}`} className="sub-menu_link">
                                      {cat.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Dynamic Kurtis */}
                            <div className="col-3">
                              <h4 className="menu-heading">Kurtis</h4>
                              <ul className="sub-menu_list">
                                {categories.kurtis.map((cat) => (
                                  <li key={cat.id}>
                                    <Link to={`/product?category=${cat.id}`} className="sub-menu_link">
                                      {cat.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Static Promo Box */}
                            <div className="col-3">
                               <div className="wg-cls hover-img">
                                  <img src="/assets/images/Gold-jwellery/cls-header-1.jpg" alt="Promo" />
                               </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    )}
                  </li>

                  <li className="menu-item"><Link to="/about" className="item-link">ABOUT US</Link></li>
                  <li className="menu-item"><Link to="/contact" className="item-link">CONTACT</Link></li>
                </ul>
              </nav>
            </div>

            {/* Icons Section (Login, Search, Wishlist, Cart) */}
            <div className="col-xl-3 col-md-4 col-3">
              {/* Same as your previous code */}
            </div>
          </div>
        </div>
      </header>

      {/* Search Dropdown & Mobile Menu (Update loops here as well) */}
      {/* ... */}
    </>
  );
};

export default Header;