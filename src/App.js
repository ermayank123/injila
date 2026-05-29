import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import Faq from "./pages/faq";
import Terms from "./pages/Terms";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import MyAccount from "./pages/MyAccount";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import AdminDashboard from "./adminpages/AdminDashboard";
import AddProduct from "./adminpages/AddProduct";
import ManageProducts from "./adminpages/ManageProducts";
import ProfileUpdate from "./adminpages/ProfileUpdate";

import { ProductProvider } from "./context/ProductContext";

// jQuery global
// window.$ = $;
// window.jQuery = $;

function App() {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  return (
    <Router basename="/">
      <ProductProvider>
        <MainApp
          showEnquiryForm={showEnquiryForm}
          setShowEnquiryForm={setShowEnquiryForm}
        />
      </ProductProvider>
    </Router>
  );
}

function MainApp({ showEnquiryForm, setShowEnquiryForm }) {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/AdminDashboard");

  return (
    <>
      {/* Header */}
      {!isAdminRoute && (
        <Header setShowEnquiryForm={setShowEnquiryForm} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/productdetail" element={<ProductDetail />} />
        <Route path="faq" element={<Faq />} />
        <Route path="terms" element={<Terms />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="myaccount" element={<MyAccount />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="AdminDashboard" element={<AdminDashboard />} />
        <Route path="AddProduct" element={<AddProduct />} />
        <Route path="ManageProducts" element={<ManageProducts />} />
        <Route path="ProfileUpdate" element={<ProfileUpdate />} />
      </Routes>

      {/* Footer */}
      {!isAdminRoute && <Footer />}

      {/* Enquiry Popup */}
      {!isAdminRoute && showEnquiryForm && (
        <div className="enquiry-modal">
          <div className="enquiry-content">
            <button
              className="close-btn"
              onClick={() => setShowEnquiryForm(false)}
            >
              ×
            </button>

            <h4>Enquiry Form</h4>

            <div className="tf-mini-cart-item mt-5">
              <div className="tf-mini-cart-image">
                <img
                  src="/assets/images/Gold-jwellery/earring.jpeg"
                  alt="Earring"
                  loading="lazy"
                />
              </div>

              <div className="tf-mini-cart-info">
                <div className="text-small text-main-2 sub">
                  Gold Earring
                </div>

                <h6 className="title">
                  <a
                    href="productdetail"
                    className="link text-line-clamp-1"
                  >
                    Earring
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
