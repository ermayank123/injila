import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

const AdminDashboard = () => {
  // ✅ Use fallback empty arrays to prevent undefined errors
  const { products = [], removedProducts = [] } = useProducts();

  // 🔍 Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [removedSearchTerm, setRemovedSearchTerm] = useState("");

  // 📄 Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [removedCurrentPage, setRemovedCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 🔍 Filter logic for Added Products
  const filteredProducts = (products || []).filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔍 Filter logic for Removed Products
  const filteredRemoved = (removedProducts || []).filter(
    (p) =>
      p.name.toLowerCase().includes(removedSearchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(removedSearchTerm.toLowerCase())
  );

  // 📄 Pagination logic for Added Products
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  // 📄 Pagination logic for Removed Products
  const removedTotalPages = Math.ceil(filteredRemoved.length / itemsPerPage);
  const removedStartIndex = (removedCurrentPage - 1) * itemsPerPage;
  const currentRemovedItems = filteredRemoved.slice(
    removedStartIndex,
    removedStartIndex + itemsPerPage
  );

  return (
    <>
      {/* ✅ Inline CSS */}
      <style>{`
        header.tf-header {
          background-color: #000 !important;
        }
        .my-account-nav_item {
          color: #333;
          transition: color 0.3s ease;
        }
        .my-account-nav_item:hover {
          color: #c9a14a; /* gold hover */
        }
        .pagination {
          display: flex;
          justify-content: center;
          list-style: none;
          padding: 0;
        }
        .pagination li {
          margin: 0 5px;
        }
        .pagination button {
          border: none;
          background: #eee;
          padding: 6px 12px;
          border-radius: 4px;
          cursor: pointer;
        }
        .pagination .active button {
          background-color: #c9a14a;
          color: #fff;
        }
        .product-img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 8px;
        }
      `}</style>

      <section className="flat-spacing mt-5">
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
                      <i className="icon icon-circle-four"></i> Profile Update
                    </Link>
                  </li>
                  <li>
                    <Link to="/AddProduct" className="my-account-nav_item h5">
                      <i className="icon icon-box-arrow-down"></i> Add Product
                    </Link>
                  </li>
                  <li>
                    <Link to="/ManageProducts" className="my-account-nav_item h5">
                      <i className="icon icon-address-book"></i> Manage Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="my-account-nav_item h5 text-dark">
                      <i className="icon icon-sign-out"></i> Log out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Dashboard */}
            <div className="col-xl-9 col-lg-9 col-md-8 admin-main">
              <div className="my-account-content">
                <div className="account-my_order">
                  <h2 className="account-title type-semibold mb-4">
                    Dashboard Overview
                  </h2>

                  {/* 🟢 Added Products */}
                  <h4 className="my-4">🟢 Added Products</h4>

                  {/* Filter Input */}
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Search added products..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                  />

                  <table className="table-my_order order_recent">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Date Added</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.length > 0 ? (
                        currentItems.map((p, i) => (
                          <tr key={p.id}>
                            <td>{startIndex + i + 1}</td>
                            <td>
                              {p.image ? (
                                <img
                                  src={p.image}
                                  alt={p.name}
                                  className="product-img"
                                />
                              ) : (
                                <span>No image</span>
                              )}
                            </td>
                            <td>{p.name}</td>
                            <td>{p.category}</td>
                            <td>{p.date || "—"}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="text-center text-muted">
                            No products found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <ul className="pagination my-3">
                      {[...Array(totalPages)].map((_, i) => (
                        <li
                          key={i}
                          className={currentPage === i + 1 ? "active" : ""}
                        >
                          <button onClick={() => setCurrentPage(i + 1)}>
                            {i + 1}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* 🔴 Removed Products */}
                  <h4 className="mt-5 mb-4">🔴 Removed Products</h4>

                  {/* Filter Input */}
                  <input
                    type="text"
                    className="form-control mb-3 mt-4"
                    placeholder="Search removed products..."
                    value={removedSearchTerm}
                    onChange={(e) => {
                      setRemovedSearchTerm(e.target.value);
                      setRemovedCurrentPage(1);
                    }}
                  />

                  <table className="table-my_order order_recent mt-4">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Date Removed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentRemovedItems.length > 0 ? (
                        currentRemovedItems.map((p, i) => (
                          <tr key={p.id}>
                            <td>{removedStartIndex + i + 1}</td>
                            <td>
                              {p.image ? (
                                <img
                                  src={p.image}
                                  alt={p.name}
                                  className="product-img"
                                />
                              ) : (
                                <span>No image</span>
                              )}
                            </td>
                            <td>{p.name}</td>
                            <td>{p.category}</td>
                            <td>{p.removedDate || "—"}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="5" className="text-center text-muted">
                            No removed products found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                                                                                                                                                       
                  {/* Pagination */}  
                  {removedTotalPages > 1 && (
                    <ul className="pagination my-3">
                      {[...Array(removedTotalPages)].map((_, i) => (
                        <li
                          key={i}
                          className={removedCurrentPage === i + 1 ? "active" : ""}
                        >
                          <button onClick={() => setRemovedCurrentPage(i + 1)}>
                            {i + 1}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
