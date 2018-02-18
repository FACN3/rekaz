import React from "react";
import FirstChart from "./First_chart";
import FourthChartCon from "./chart_04/Fourth_Chart_Con";

const SmokingPage = () => {
  return (
    <div>
      <div className="header">
        <img
          className="header-image"
          src="public/assets/logo.png"
          alt="Galille society logo"
        />
      </div>
      <h1>Welcome to the smoking page</h1>
      <div className="charts">
        <FirstChart />
        <h2>insert introduction here</h2>
        <FourthChartCon />
      </div>
    </div>
  );
};

export default SmokingPage;
