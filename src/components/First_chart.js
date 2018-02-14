import React, {Component} from 'react';
import FirstChartContainers from './First_chart_containers';

const gender = ['Female','Male','Both'];

class FirstChart extends Component {
  constructor(props) {
    super(props);]
  }
  render() {
    return (
      <div className="First-chart-holder">
        {
          gender.map(sex => {return <FirstChartContainers gender={sex} />})
        }
        <div className="First-chart-filters-holder">
          <button className="First-chart-filter"><span>Age</span></button>
          <button className="First-chart-filter"><span>Income</span></button>
          <button className="First-chart-filter"><span>Education</span></button>
        </div>
      </div>
    );
  }
}

export default FirstChart;
