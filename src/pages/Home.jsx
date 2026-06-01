import React, { useEffect, useState } from "react";

import "../App.css";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Slider from "../components/Slider";
import CollectionSlider from "../components/CollectionSlider";
import ShopByCategories from "../components/ShopByCategories";
import Cloth from "../components/Cloth";
import InstagramSection from "../components/InstagramSection";
import ArtificialJewellery from "../components/ArtificialJewellery";
import Testimonial from "../components/Testimonial";
import Policies from "../components/Policies";
import Injila from "../components/Injila";
import SaleBanner from "../components/SaleBanner";
import BannerV05 from "../components/BannerV05";
import TrendingSection from "../components/TrendingSection";

function Home() {
  const [banner, setBanner] = useState(null);

  const BASE_URL = "https://admin.injila.in";

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/banner`);
        const data = await response.json();

        console.log("Banner Response:", data);

        if (data.status && data.data) {
          setBanner(data.data);
        }
      } catch (error) {
        console.error("Banner API Error:", error);
      }
    };

    fetchBanner();
  }, []);

  return (
    <>
      <Slider />

      <CollectionSlider />

      <TrendingSection />

      <ShopByCategories />

      <Injila />

      <SaleBanner />

      {banner && (
        <BannerV05
          backgroundImage={`${BASE_URL}/storage/${banner.image}`}
          circularText={banner.circular_text || banner.circularText}
          title={banner.title}
          subtitle={banner.subtitle}
          subText={banner.description}
          btnText={banner.button_text}
          btnLink={banner.button_link}
        />
      )}

      <ArtificialJewellery />

      <Cloth />

      <Testimonial />

      <Policies />

      <InstagramSection />
    </>
  );
}

export default Home;