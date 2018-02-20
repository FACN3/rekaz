import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import FirstChart from "./First_chart";
import FourthChartCon from "./chart_04/Fourth_Chart_Con";
import chart05Data from "./chart_05/data";
import chart04Data from "./chart_04/data";

const SmokingPage = (props) => {
  return (<div>
    <Navbar changeLanguage={props.changeLanguage} chosen={props.chosen} />
    <div className="header">
      <img className="header-image" src="public/assets/logo.png" alt="Galille society logo"/>
    </div>
    <h1>{props.languages.somkingTitle}</h1>
    <div className="charts">
      <div className="Achart-holder">
        <FirstChart languages={props.languages} chosenLang={props.chosen}/>
      </div>
      <h2>{props.languages.chartDefault}</h2>
      <div className="Achart-holder">
        <FourthChartCon languages={props.languages} name="fourth" data={{
            values: chart04Data.values,
            colors: chart04Data.colors,
            labels: props.languages.labels4
          }}/>
      </div>
      <h2>{props.languages.chartDefault}</h2>
      <div className="Achart-holder">
        <FourthChartCon languages={props.languages} name="fith" data={{
            values: chart05Data.values,
            colors: chart05Data.colors,
            labels: props.languages.labels5
          }}/>
      </div>
    </div>
    <Footer />
  </div>);
};
//chart04Data.values,chart04Data.colors,labels:this.props.languages.labels4
export default SmokingPage;
