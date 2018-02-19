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
      <select
        id="age"
        className="First-chart-filter"
        onChange={ props.changeLanguage }
        value={props.chosen}
      >
        <option value="en"> English</option>
        <option value="ar">العربية </option>
      </select>

      <h1>{props.languages.somkingTitle}</h1>
      <div className="charts">
        <FirstChart />
        <h2>{props.languages.chartDefault}</h2>
        <FourthChartCon languages={props.languages} name="fourth" data={chart04Data} />
        <h2>{props.languages.chartDefault}</h2>
        <FourthChartCon languages={props.languages} name="fith" data={chart05Data} />
      </div>
    </div>
  );
};

export default SmokingPage;
