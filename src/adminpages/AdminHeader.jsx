// src/adminpages/AdminHeader.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminHeader = () => {
  const location = useLocation();
  const pathNames = location.pathname.split("/").filter((x) => x);

  return (
    <>
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
      `}</style>
    <div className="container">
<div
  className="admin-page-header mb-4 d-flex justify-content-between align-items-center"
  style={{ marginTop: "140px" }}
>

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to="/AdminDashboard">Dashboard</Link>
          </li>
          {pathNames.map((name, index) => {
            const routeTo = `/${pathNames.slice(0, index + 1).join("/")}`;
            return (
              <li
                key={index}
                className={`breadcrumb-item ${
                  index === pathNames.length - 1 ? "active" : ""
                }`}
                aria-current={index === pathNames.length - 1 ? "page" : undefined}
              >
                {index === pathNames.length - 1 ? (
                  name.replace(/-/g, " ")
                ) : (
                  <Link to={routeTo}>{name.replace(/-/g, " ")}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Dashboard button */}
      {location.pathname !== "/AdminDashboard" && (
        <Link to="/AdminDashboard" className="tf-btn animate-btn">
          Go to Dashboard
        </Link>
      )}
    </div>
    </div>
    </>
  );
};

export default AdminHeader;
