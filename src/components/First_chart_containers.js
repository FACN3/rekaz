import React, { Component } from 'react';
import Figure from "./First_chart_figure";

class ChartHolder extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const firstChart = [0,1,2,3,4,5,6,7,8,9];
    return (
    <div className="First-chart-container">
      <div className="first-chart-gender-title"><h3>{this.props.gender}</h3></div>
        <div className="First-chart-data-container">
          <div className="First-chart-figure-container">
            {firstChart.map((id) => {
              return <Figure key={id} id={id} percentage="5"/>
            })}
          </div>
          <div className="first-chart-counters"><h3>counter</h3></div>
        </div>
      </div>
    );
  }
}

export default ChartHolder;
