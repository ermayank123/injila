import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../adminpages/AdminHeader";

const ProfileUpdate = () => {
  const [formData, setFormData] = useState({
    name: "Admin User",
    email: "admin@injilajwellery.com",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });           
                                  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImage") {
      setFormData({ ...formData, profileImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Profile Updated:", formData);
    alert("Profile updated successfully!");
  };

  return (
    <>

      <AdminHeader />
    <section className="flat-spacing">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-xl-3 d-none d-xl-block">
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
                <li><Link to="/ProfileUpdate" className="my-account-nav_item h5 active"><i className="icon icon-circle-four"></i> Profile Update</Link></li>
                <li><Link to="/AddProduct" className="my-account-nav_item h5"><i className="icon icon-box-arrow-down"></i> Add Product</Link></li>
                <li><Link to="/ManageProducts" className="my-account-nav_item h5"><i className="icon icon-address-book"></i> Manage Products</Link></li>
                <li><Link to="/" className="my-account-nav_item h5 text-dark"><i className="icon icon-sign-out"></i> Log out</Link></li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-xl-9 profile-update">
            <div className="card shadow-lg border-0 mx-auto" style={{ maxWidth: "600px" }}>
              <div className="card-header bg-blue text-white text-center py-3">
                <h4 className="mb-0">Update Profile</h4>
              </div>

              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="text-center my-5">
                    <label htmlFor="profileImage" style={{ cursor: "pointer" }}>
                      {formData.profileImage ? (
                        <img
                          src={URL.createObjectURL(formData.profileImage)}
                          alt="Profile"
                          className="rounded-circle border"
                          style={{ width: "120px", height: "120px", objectFit: "cover" }}
                        />
                      ) : (
                        <div
                          className="rounded-circle bg-light d-flex align-items-center justify-content-center border"
                          style={{ width: "120px", height: "120px", margin: "0 auto" }}
                        >
                          <i className="icomoon icon-user" style={{ fontSize: "70px" }}></i>
                        </div>
                      )}
                    </label>
                    <input
                      type="file"
                      id="profileImage"
                      name="profileImage"
                      accept="image/*"
                      onChange={handleChange}
                      hidden
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>                                           

                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter new password"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      className="form-control"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Re-enter password"
                    />
                  </div>

                  <div className="d-flex justify-content-between">
                    <button type="submit" className="tf-btn animate-btn my-5">
                      Save Changes
                    </button>
                    <button
                      type="reset"
                      className="tf-btn animate-btn my-5"
                      onClick={() =>
                        setFormData({
                          name: "",
                          email: "",
                          password: "",
                          confirmPassword: "",
                          profileImage: null,
                        })
                      }
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ProfileUpdate;
