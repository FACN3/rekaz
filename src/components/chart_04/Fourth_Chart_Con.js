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
            className={this.props.chosenLang=="ar"?"First-chart-filter-ar":"First-chart-filter"}
            onChange={this.handleChange}
            value={this.state.age}
          >
            <option value="age">{this.props.languages.age}</option>
            <option value="18-29">18-29</option>
            <option value="30-44">30-44</option>
            <option value="45-59">45-59</option>
            <option value="60+">60+</option>
          </select>
          <select
            id="income"
            className={this.props.chosenLang=="ar"?"First-chart-filter-ar":"First-chart-filter"}
            onChange={this.handleChange}
            value={this.state.income}
          >
            <option value="income">{this.props.languages.income}</option>
            <option value="low">{this.props.languages.low}</option>
            <option value="meduim">{this.props.languages.meduim}</option>
            <option value="high">{this.props.languages.high}</option>
          </select>
          <select
            id="education"
            className={this.props.chosenLang=="ar"?"First-chart-filter-ar":"First-chart-filter"}
            onChange={this.handleChange}
            value={this.state.education}
          >
            <option value="education">{this.props.languages.education}</option>
            <option value="secondary">{this.props.languages.secondary}</option>
            <option value="highschool">{this.props.languages.highschool}</option>
            <option value="bs+">{this.props.languages.bs}</option>
            </select>
        </div>
      </div>
    );
  }
}
export default FourthChartCon;
