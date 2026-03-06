import React, { useContext } from "react";
import { BiCartAlt } from "react-icons/bi";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../ShopContext/ShopContext";

const Navbar = () => {
  const { quantity } = useContext(ShopContext);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="navbar">
      
      <div className="link">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>

          <li>
            <Link to="product-list">CLOTHES</Link>
          </li>

          <li>
            {user ? (
              <div className="auth-group">
                <span className="welcome-user">
                  Welcome {user.name}
                </span>

                <button
                  onClick={handleLogout}
                  className="logout-btn"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/Auth">LOGIN</Link>
            )}
          </li>
        </ul>
      </div>

      <div className="logo">
        <h2>CIARA COLLECTION</h2>
      </div>

      <Link to="/cart">
        <div className="nav-icon-wrapper">
          <BiCartAlt className="nav-icon" />
          <p className="nav-qty">{quantity}</p>
        </div>
      </Link>

    </div>
  );
};

export default Navbar;