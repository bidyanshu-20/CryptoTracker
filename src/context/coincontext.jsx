import { createContext, useEffect, useState } from "react";

export const Coincontext = createContext();

const CoincontextProvider = (props) => {
  const [allcoin, setallcoin] = useState([]);
  const [currency, setcurrency] = useState({
    name: "USD",
    symbol: "$",
  });
  const fetchAllcoindata = async () => {
    
    const options = {
      method: "GET",
      headers: { accept: "application/json", "x-cg-demo-api-key": "CG-gwRxZeMKBrKuVyWbjMxCny1B",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((res) => res.json())
      .then((res) => setallcoin(res))
      .catch((err) => console.error(err));
  };

  useEffect(()=>{
    fetchAllcoindata();
  },[currency])


  const contextVal = {
     allcoin,currency,setcurrency

  };

  return <Coincontext.Provider  value={contextVal} >{props.children}</Coincontext.Provider>;
};

export default CoincontextProvider;
