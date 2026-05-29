import React, { useState } from "react";
import { useProducts } from "../context/ProductContext";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const ManageProducts = () => {
  // ✅ Get products and functions from context
  const { products = [], removeProduct, updateProduct } = useProducts();

  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({ name: "", category: "" });
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 🔍 Filter products safely
  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Edit product
  const handleEditClick = (product) => {
    setEditingProduct(product.id);
    setFormData({ name: product.name, category: product.category });
  };

  const handleSave = () => {
    updateProduct({
      id: editingProduct,
      name: formData.name,
      category: formData.category,
      date: new Date().toISOString().slice(0, 10),
    });
    setEditingProduct(null);
  };

  // Pagination controls
  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPage = (page) => setCurrentPage(page);

  return (
    <>
      <AdminHeader />
      <section className="flat-spacing">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-xl-3 d-none d-xl-block">
              <AdminSidebar />
            </div>

            {/* Main content */}
            <div className="col-xl-9 col-lg-9">
              <h3 className="mb-4 pb-3">Manage Products</h3>

              {/* 🔍 Search */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by product or category..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>

              {filteredProducts.length === 0 ? (
                <p>No products found.</p>
              ) : (
                <>
                  {/* 📋 Product Table */}
                  <table className="table table-striped align-middle">
                    <thead className="table-dark">                   
                      <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Date Added</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentProducts.map((p, i) => (
                        <tr key={p.id}>
                          <td>{indexOfFirstItem + i + 1}</td>
                          <td>
                            {p.image ? (
                              <img
                                src={p.image}
                                alt={p.name}
                                style={{
                                  width: "60px",
                                  height: "60px",
                                  objectFit: "cover",
                                  borderRadius: "8px",
                                }}
                              />
                            ) : (
                              <span>No image</span>
                            )}
                          </td>
                          <td>
                            {editingProduct === p.id ? (
                              <input
                                type="text"
                                value={formData.name}
                                onChange={(e) =>
                                  setFormData({ ...formData, name: e.target.value })
                                }
                                className="form-control"
                              />
                            ) : (
                              p.name
                            )}
                          </td>

                          <td>
                            {editingProduct === p.id ? (
                              <input
                                type="text"
                                value={formData.category}
                                onChange={(e) =>
                                  setFormData({ ...formData, category: e.target.value })
                                }
                                className="form-control"
                              />
                            ) : (
                              p.category
                            )}
                          </td>

                          <td>{p.date || "—"}</td>

                          <td>
                            {editingProduct === p.id ? (
                              <>
                                <button
                                  className="btn btn-success btn-sm me-2"
                                  onClick={handleSave}
                                >
                                  Save
                                </button>
                                <button
                                  className="btn btn-secondary btn-sm"
                                  onClick={() => setEditingProduct(null)}
                                >
                                  Cancel
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  className="btn btn-primary btn-sm me-2"
                                  onClick={() => handleEditClick(p)}
                                >
                                  Edit
                                </button>
                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() => removeProduct(p.id)}
                                >
                                  Remove
                                </button>
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* 🔢 Pagination UI */}
                  <div className="d-flex justify-content-between align-items-center mt-4 pagination">
                    <button
                      className="btn btn-outline-dark btn-sm"
                      onClick={handlePrev}
                      disabled={currentPage === 1}
                    >
                      « Prev
                    </button>

                    <div>
                      {Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i}
                          onClick={() => goToPage(i + 1)}
                          className={`btn btn-sm mx-1 ${
                            currentPage === i + 1
                              ? "btn-primary"
                              : "btn-outline-secondary"
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>

                    <button
                      className="btn btn-outline-dark btn-sm"
                      onClick={handleNext}
                      disabled={currentPage === totalPages}
                    >
                      Next » 
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageProducts;
