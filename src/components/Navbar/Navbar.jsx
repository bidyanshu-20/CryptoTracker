import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Coincontext } from "../../context/coincontext.jsx";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { setcurrency } = useContext(Coincontext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setcurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setcurrency({ name: "eur", symbol: "€" });
        break;
      case "inr":
        setcurrency({ name: "INR", symbol: "₹" });
        break;
      default:
        setcurrency({ name: "usd", symbol: "$" });
        break;
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"} className="logo-text">
        CryptoTracker
      </Link>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/coinsFeatures" onClick={() => setMenuOpen(false)}>
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to="/coinspricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/coinsblog" onClick={() => setMenuOpen(false)}>
            Blogs
          </NavLink>
        </li>
      </ul>

      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>

        <button onClick={() => navigate("/signup")}>
          Sign Up →
        </button>
      </div>
    </div>
  );
};

export default Navbar;
