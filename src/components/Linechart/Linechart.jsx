import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";

const Linechart = ({ historicalData }) => {
  const [data, setdata] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let datacopy = [["Date", "Prices"]];

    if (historicalData?.prices) {
      historicalData.prices.forEach((item) => {
        datacopy.push([new Date(item[0]).toLocaleDateString(), item[1]]);
      });

      setdata(datacopy);
    }
  }, [historicalData]);

  return (
    <Chart
      chartType="LineChart"
      data={data}
      height="400px"
      legendToggle
    />
  );
};

export default Linechart;
