import React from "react";
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../css/styles.css';
// import '../css/animate.css';
// import '../icon/icomoon/style.css';
import PageTitleImage from "../components/PageTitleImage";
import BrandStorySection from '../components/BrandStorySection';
import InstagramSection from '../components/InstagramSection';
import Testimonial from '../components/Testimonial';
import BrandSlider from "../components/BrandSlider ";
import BannerV05 from "../components/BannerV05";

const About = () => {
  return (
    <>
         <PageTitleImage
        title="ABOUT OUR BRAND"
        subtitle="CRAFTING BEAUTY WITH PURPOSE"
        image="assets/images/Gold-jwellery/slider-23.jpg"
        buttonText="Explore Collection"
        buttonLink="/product"
      />

       <BrandSlider /> 
       <BannerV05
  backgroundImage="/assets/images/Gold-jwellery/bannerV05.jpg"
  circularText="Injila Store Fashion Style"
  title="Injila. Store"
  subtitle="Up to 50% off latest collection"
  subText="Explore our stunning jewellery collection crafted for every occasion."
  btnText="Shop Now"
  btnLink="/shop"
/>

    <section className="s-intro flat-spacing">
      <div className="container text-center">
        <p className="brand-name">INJILA. Store</p>
        <div className="box-intro">
          <h4 className="slogan fw-normal">FASHION STYLE IN EVERY BREATH</h4>
          <p className="intro-text">
            Elevate your elegance with Injila—where every design reflects luxury, confidence, 
            and timeless beauty. Our handcrafted jewellery blends modern artistry with classic 
            sophistication, giving you pieces that shine in every moment of your life. 
            Discover style that speaks, sparkles, and stays forever.
          </p>
        </div>
      </div>
    </section>
    <section className="s-about">
      <div className="container">
        <div className="tf-grid-layout tf-col-2 md-col-3 xl-col-4">
          <div className="item_2 image d-none d-md-block">
            <img
              className="lazyload"
              src="assets/images/Gold-jwellery/necklace.jpeg"
              data-src="/images/Gold-jwellery/necklace.jpeg"
              alt="Modal 2"
            />
          </div>

          <div className="wd-2-cols">
            <div className="content-blog text-md-start">
              <div className="d-md-inline-flex">
    
              </div>

              <div className="box-intro">
<h4 className="slogan fw-normal">
  FIRST STORE IN JAIPUR
</h4>

<p className="intro-text">
  Injila proudly opens its first store in Jaipur, bringing timeless elegance 
  and luxury jewellery closer to you. Experience handcrafted designs, premium 
  craftsmanship, and a modern shopping experience crafted with love for the 
  Pink City.
</p>

                
              </div>
            </div>
          </div>

          <div className="item_1 image">                                 
            <img
              className="lazyload"
              src="/assets/images/Gold-jwellery/jhumki-style-2.jpeg"
              // src="../../assets/images/Gold-jwellery/jhumki-style-5.jpeg"
              data-src="/images/Gold-jwellery/jhumki-style-5.jpeg"
              alt="Modal 1"
            />
          </div>

          <div className="d-md-none d-xl-block">
            <img
              className="lazyload d-md-none"
              src="/assets/images/Gold-jwellery/necklace-1.jpeg"
              data-src="/images/Gold-jwellery/necklace-1.jpeg"
              alt="Modal 2"
            />
          </div>

          <div className="item_3 image">
            <img
              className="lazyload"
              src="/assets/images/Gold-jwellery/necklace-3.jpeg"
              data-src="/images/Gold-jwellery/necklace-3.jpeg"
              alt="Modal 3"
            />
          </div>

          <div className="item_4 image">
            <img
              className="lazyload"
              src="/assets/images/Gold-jwellery/jhumki-style-4.jpeg"
              data-src="/images/Gold-jwellery/jhumki-style-4.jpeg"
              alt="Modal 4"
            />
          </div>
        </div>
      </div>
    </section>
    <BrandStorySection />
<Testimonial />
    <InstagramSection />
    </>
  );
};

export default About;
