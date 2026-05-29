import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import AdminHeader from "./AdminHeader";

const AddProduct = () => {
  const { addProduct } = useProducts();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  // 🔹 Convert uploaded image to Base64 (so it saves permanently)
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !category) {
      setMessage("⚠️ Please fill all fields.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      category,
      image, // ✅ this will now contain Base64 image
      date: new Date().toISOString().slice(0, 10),
    };

    addProduct(newProduct);
    setMessage("✅ Product added successfully!");
    setName("");
    setCategory("");
    setImage("");
  };

  return (
    <>
      <AdminHeader />

      <section className="flat-spacing">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-xl-3 d-none d-xl-block">
              <div
                className="sidebar-account sidebar-content-wrap sticky-top"
                style={{ top: "15px" }}
              >
                <div className="account-author text-center">
                  <div className="author_avatar position-relative">
                    <div className="image">
                      <img src="/assets/images/Gold-jwellery/avatar-4.jpg" alt="Avatar" />
                    </div>
                  </div>
                  <h4 className="author_name mt-3">INJILA THEME</h4>
                  <p className="author_email h6">narayanijewells@gmail.com</p>
                </div>

                <ul className="my-account-nav list-unstyled mt-4">
                  <li>
                    <Link to="/ProfileUpdate" className="my-account-nav_item h5">
                      Profile Update
                    </Link>
                  </li>
                  <li>
                    <Link to="/AddProduct" className="my-account-nav_item h5 active">
                      Add Product
                    </Link>
                  </li>
                  <li>
                    <Link to="/ManageProducts" className="my-account-nav_item h5">
                      Manage Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="my-account-nav_item h5 text-dark">
                      Log out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-xl-9 col-lg-9">
              <div className="border">
                <h3 className="bg-light p-4 border-bottom">Add Product</h3>
                <form onSubmit={handleSubmit} className="p-5">
                  <input
                    type="text"
                    placeholder="Product Name"
                    className="form-control mb-5"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Category"
                    className="form-control mb-5"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  
                  {/* 🔹 Image Upload - converts to Base64 */}
                  <input
                    type="file"
                    className="form-control mb-5"
                    onChange={async (e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const base64 = await convertToBase64(file); 
                        setImage(base64);
                      }
                    }}
                  />

                  <button type="submit" className="tf-btn animation-btn">
                    Add Product
                  </button>
                </form>

                {message && <p className="mt-3 text-success">{message}</p>}
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default AddProduct;
