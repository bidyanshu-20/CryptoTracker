import React, { useContext, useEffect, useState } from "react";
import "./coin.css";
import { useParams } from "react-router-dom";
import { Coincontext } from "../../context/coincontext";
import Linechart from "../../components/Linechart/Linechart";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setcoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(Coincontext);

  const fetchcoindata = async () => {
    // -----------------------------------------------------------
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-gwRxZeMKBrKuVyWbjMxCny1B",
      },
    };
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => setcoinData(res))
      .catch((err) => console.error(err));
  };

  
  const fetchHistoricaldata = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-gwRxZeMKBrKuVyWbjMxCny1B",
      },
    };
    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`,
      options
    )
      .then((res) => res.json())
      .then((res) => setHistoricalData(res))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchcoindata();
    fetchHistoricaldata();
  }, [currency]);
  if ((coinData&&historicalData)) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coinData.image.large} alt="" />
          <p>
            <b>
              {coinData.name} {coinData.symbol.toUpperCase()}
            </b>
          </p>
        </div>
        <div className="coin-chart">
          <Linechart historicalData={historicalData} />
        </div>

        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
           <ul>
            <li>Current Price:</li>
            <li>{currency.symbol}   {coinData.market_data.current_price[currency.name.toLowerCase()].toLocaleString()}</li>
          </ul>
          <ul>
            <li>Market cap:</li>
           <li>{currency.symbol} {coinData.market_data.market_cap[currency.name.toLowerCase()]}</li>
          </ul>
          <ul>
            <li>24 Hours high</li>
           <li>{currency.symbol} {coinData.market_data.high_24h[currency.name.toLowerCase()]}</li>
          </ul>
          <ul>
            <li>24 Hours low:</li>
           <li>{currency.symbol} {coinData.market_data.low_24h[currency.name.toLowerCase()]}</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinnner">
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;
