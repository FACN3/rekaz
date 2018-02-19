import React from "react";
import FirstChart from "./First_chart";
import FourthChartCon from "./chart_04/Fourth_Chart_Con";
import chart05Data from "./chart_05/data";
import chart04Data from "./chart_04/data";
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
        <FourthChartCon name="fourth" data={chart04Data} />
        <h2>insert introduction here</h2>
        <FourthChartCon name="fith" data={chart05Data} />
      </div>
    </div>
  );
};

export default SmokingPage;
