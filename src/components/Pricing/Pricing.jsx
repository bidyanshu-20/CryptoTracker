import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Pricing.css";

const Pricing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 20,
              page: 1,
            },
          }
        );
        setCoins(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCoins();
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleWatchlist = (id) => {
    setWatchlist((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  return (
    <div className="pricing-dashboard">
      <h1 className="title">Crypto Pricing Dashboard</h1>

      <input
        type="text"
        placeholder="Search coin..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="coins-grid">
        {filteredCoins.map((coin) => (
          <div key={coin.id} className="coin-card">
            <div className="coin-header">
              <img src={coin.image} alt="" className="coin-img" />
              <h2>{coin.name} ({coin.symbol.toUpperCase()})</h2>
            </div>
            <p><strong>Price:</strong> ${coin.current_price.toLocaleString()}</p>
            <p className={coin.price_change_percentage_24h > 0 ? "green" : "red"}>
              <strong>24h Change:</strong> {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
            <p><strong>Market Cap:</strong> ${coin.market_cap.toLocaleString()}</p>
            <button
              onClick={() => toggleWatchlist(coin.id)}
              className={`watch-btn ${watchlist.includes(coin.id) ? "added" : ""}`}
            >
              {watchlist.includes(coin.id) ? "Remove" : "Add"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
