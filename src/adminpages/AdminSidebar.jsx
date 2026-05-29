import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();  

  return (
    <div className="sidebar-account sidebar-content-wrap sticky-top" style={{ top: "15px" }}>
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
          <Link
            to="/ProfileUpdate"
            className={`my-account-nav_item h5 ${location.pathname === "/ProfileUpdate" ? "active" : ""}`}
          >
            Profile Update
          </Link>
        </li>
        <li>
          <Link
            to="/AddProduct"
            className={`my-account-nav_item h5 ${location.pathname === "/AddProduct" ? "active" : ""}`}
          >
            Add Product                       
          </Link>
        </li>
        <li>
          <Link
            to="/ManageProducts"
            className={`my-account-nav_item h5 ${location.pathname === "/ManageProducts" ? "active" : ""}`}
          >
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
  );
};

export default AdminSidebar;
