import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="/" className="brand-link">
            <img
              src="dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">AdminValen</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="#" className="d-block">
                  Alexander Pierce
                </a>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
                <li className="nav-item has-treeview menu-open">
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                      Dashboard
                      <i className="right fas fa-angle-left" />
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to={"/dashboard1"} className="nav-link active">
                        <i className="far fa-circle nav-icon" />
                        <p>Home</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/dashboard2"} className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>User</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/dashboard3"} className="nav-link">
                        <i className="far fa-circle nav-icon" />
                        <p>Sexul</p>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    );
  }
}
