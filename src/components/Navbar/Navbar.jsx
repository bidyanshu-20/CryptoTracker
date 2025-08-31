import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import icon from "../../assets/arrow_icon.png";
import { Coincontext } from "../../context/coincontext.jsx";
import { Link, NavLink, useNavigate } from "react-router-dom"; // <-- import useNavigate

const Navbar = () => {
  const { setcurrency } = useContext(Coincontext);
  const navigate = useNavigate(); // <-- initialize navigate

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

  // Function to navigate to signup page
  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <ul>
        <li>
          <NavLink className="navstyle" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navstyle" to="/coinsFeatures">
            Features
          </NavLink>
        </li>
        <li>
          <NavLink className="navstyle" to="/coinspricing">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink className="navstyle" to="/coinsblog">
            Blogs
          </NavLink>
        </li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
          <option value="gbp">GBP</option>
          <option value="jpy">JPY</option>
          <option value="aud">AUD</option>
        </select>
        <button onClick={handleSignUpClick}> 
          Sign Up
          <img src={icon} alt="img" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
