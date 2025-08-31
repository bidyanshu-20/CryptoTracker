// src/pages/Features/Features.jsx
import React from "react";
import "./Features.css";
import {
  FaChartLine,
  FaBell,
  FaBitcoin,
  FaExchangeAlt,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaBitcoin />,
      title: "Live Crypto Prices",
      description: "Get real-time updates of Bitcoin, Ethereum, and altcoins without refreshing the page.",
      link: "https://en.wikipedia.org/wiki/Cryptocurrency",
    },
    {
      icon: <FaChartLine />,
      title: "Market Data & Rankings",
      description: "Track market cap, 24h volume, circulating supply, and see the top gainers & losers.",
      link: "https://www.investopedia.com/terms/m/market-data.asp",
    },
    {
      icon: <FaBell />,
      title: "Price Alerts",
      description: "Set custom alerts when a coin reaches your target price and get notified instantly.",
      link: "https://www.investopedia.com/terms/p/price-alert.asp",
    },
    {
      icon: <FaExchangeAlt />,
      title: "Currency Converter",
      description: "Convert cryptocurrency prices into multiple fiat currencies quickly.",
      link: "https://www.xe.com/currencyconverter/", // popular online currency converter
    },
  ];

  return (
    <div className="features-page">
      <h1>Key Features</h1>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              className="feature-link-btn"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
