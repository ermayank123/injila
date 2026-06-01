import React, { useEffect, useState } from 'react';

import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Components
import CategorySlider from '../components/CategorySlider';
import ProductSidebar from '../components/ProductSidebar';
import PageTitleImage from '../components/PageTitleImage';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://admin.injila.in/api/fetch-products')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.status) {
          setProducts(data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <PageTitleImage
        title="OUR EXCLUSIVE COLLECTION"
        subtitle="JEWELLERY THAT DEFINES YOU"
        image="assets/images/Gold-jwellery/slider-24.jpg"
        buttonText="Shop Now"
        buttonLink="/product"
      />

      <CategorySlider />

      <ProductSidebar products={products} />
    </>
  );
}

export default Product;