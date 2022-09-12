import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const items = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-light bg-light justify-content-between p-4">
      <div className="justify-content-around">
        <Link className="navbar-brand" to="/">
          <span className="logo">
            Redux Store <i className="bi bi-shop"></i>
          </span>
        </Link>

        <Link className="navlink mx-4 text-decoration-none text-dark" to="/">
          Home
        </Link>

        <Link className="navlink mx-4 text-decoration-none text-dark" to="/cart">
          Cart
        </Link>
      </div>

      <div>
        <Link className="navbar-brand" to="/cart">
          <span className="logo">
            Items: { items.length } <i className="bi bi-cart"></i>
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
