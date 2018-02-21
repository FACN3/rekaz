import React, {Component} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FirstChart from "./First_chart";
import FourthChartCon from "./chart_04/Fourth_Chart_Con";
import ThirdChartCon from "./chart_03/Third_Chart_Con";
import chart05Data from "./chart_05/data";
import chart04Data from "./chart_04/data";
import TimeSeriesCon from "./time-series/TimeSeriesCon";

class SmokingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0
    }
    this.onChartChange=this.onChartChange.bind(this);
  }
  onChartChange(e) {
    console.log(e.target);
    if (e.target.id == "right") {
      if (this.state.display == 4) {
        this.setState({display: 0});
      } else {
        this.setState({
          display: (this.state.display + 1)
        });
      }
    } else {
      if (this.state.display == 0) {
        this.setState({display: 4});
      } else {
        this.setState({
          display: (this.state.display - 1)
        });
      }
    }
  }
    render() {
      let chart = "";
      let title = "";
      switch(this.state.display){
        case 0:
          title = this.props.languages.chart1;
          chart = (<FirstChart languages={this.props.languages} chosenLang={this.props.chosen}/>);
          break;
        case 1:
        title = this.props.languages.chart2;
          chart = (<TimeSeriesCon languages={this.props.languages} chosenLang={this.props.chosen}/>);
          break;
        case 2:
          title = this.props.languages.chart3;
          chart = (<ThirdChartCon languages={this.props.languages} chosenLang={this.props.chosen}/>);
          break;
        case 3:
         title = this.props.languages.chart4;
          chart = (<FourthChartCon languages={this.props.languages} name="fourth" data={{
              values: chart04Data.values,
              colors: chart04Data.colors,
              labels: this.props.languages.labels4
            }} chosenLang={this.props.chosen}/>);
          break;
        case 4:
          title = this.props.languages.chart5;
          chart = (<FourthChartCon languages={this.props.languages} name="fith" data={{
              values: chart05Data.values,
              colors: chart05Data.colors,
              labels: this.props.languages.labels5
            }} chosenLang={this.props.chosen}/>);
          break;

      }
      return (<div>
        <Navbar changeLanguage={this.props.changeLanguage} chosen={this.props.chosen}/>
        <div className="header">
          <img className="header-image" src="public/assets/logo.png" alt="Galille society logo"/>
        </div>
        <div className="smoking-page-header">
          <h1>{this.props.languages.somkingTitle}</h1>
        </div>
        <div className="smoking-introduction-div">{this.props.languages.smokingDiscription}</div>
        <div className="charts">
          <div className="right-div" onClick={this.onChartChange}><img id="right" src="../../public/assets/aright-arrow.png" alt=""/></div>
          <div className="left-div" onClick={this.onChartChange}><img id="left" src="../../public/assets/aright-arrow.png" alt=""/></div>
          <div className="chart-intro-div">
            <span>{this.props.languages.chart1}</span>
          </div>
          <div className="Achart-holder">
            {chart}
          </div>
        </div>
        <Footer/>
      </div>);
    }
  }
  /* --------------------------------- */
  {/* <div className="charts">
  <div className="chart-intro-div">
    <span>{props.languages.chart1}</span>
  </div>
  <div className="Achart-holder">
    <FirstChart languages={props.languages} chosenLang={props.chosen}/>
  </div>
  <div className="chart-intro-div">
    <span>{props.languages.chart2}</span>
  </div>
  <div className="Achart-holder">
    <TimeSeriesCon languages={props.languages} chosenLang={props.chosen}/>
  </div>
  <div className="chart-intro-div">
    <span>{props.languages.chart3}</span>
  </div>
  <div className="Achart-holder">
    <ThirdChartCon languages={props.languages} chosenLang={props.chosen}/>
  </div>
  <div className="chart-intro-div">
    <span>{props.languages.chart4}</span>
  </div>
  <div className="Achart-holder">
    <FourthChartCon languages={props.languages} name="fourth" data={{
        values: chart04Data.values,
        colors: chart04Data.colors,
        labels: props.languages.labels4
      }} chosenLang={props.chosen}/>
  </div>
  <div className="chart-intro-div">
    <span>{props.languages.chart5}</span>
  </div>
  <div className="Achart-holder">
    <FourthChartCon languages={props.languages} name="fith" data={{
        values: chart05Data.values,
        colors: chart05Data.colors,
        labels: props.languages.labels5
      }} chosenLang={props.chosen}/>
  </div>

</div> */
  }
  //chart04Data.values,chart04Data.colors,labels:this.props.languages.labels4
  export default SmokingPage;
