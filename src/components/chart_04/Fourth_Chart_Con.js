import React from "react";
import Chart04 from "./chart_04";
class FourthChartCon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      data: this.props.data.values
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    switch (e.target.id) {
      case "education":
        this.setState({
          index: 0
        }); //Fix
        break;
      case "age":
        this.setState({
          index: 1
        }); //Fix
        break;
      case "income":
        this.setState({
          index: 2
        }); //Fix
        break;
    }
  }

  render() {
    return (
      <div className="First-chart-holder">
        <Chart04
          name={this.props.name}
          values={this.props.data}
          data={this.state.data[this.state.index]}
        />
        <div className="First-chart-filters-holder sel sel--black-panther">
          <select
            id="age"
            className="First-chart-filter"
            onChange={this.handleChange}
            value={this.state.age}
          >
            <option value="age">Age</option>
            <option value="18-29">18-29</option>
            <option value="30-44">30-44</option>
            <option value="45-59">45-59</option>
            <option value="60+">60+</option>
          </select>
          <select
            id="income"
            className="First-chart-filter"
            onChange={this.handleChange}
            value={this.state.income}
          >
            <option value="income">Income</option>
            <option value="low">Low</option>
            <option value="meduim">Medium</option>
            <option value="high">High</option>
          </select>
          <select
            id="education"
            className="First-chart-filter"
            onChange={this.handleChange}
            value={this.state.education}
          >
            <option value="education">Education</option>
            <option value="secondary">Secondary</option>
            <option value="highschool">Highschool</option>
            <option value="bs+">BS+</option>
          </select>
        </div>
      </div>
    );
  }
}
export default FourthChartCon;
