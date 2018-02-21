import React from "react";
import Chart04 from "./chart_04";
class FourthChartCon extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.data.values);
    this.state = {
      index: 0,
      data: this.props.data.values.data.age.age,
      age: "age",
      income: "income",
      education: "education"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    switch (e.target.id) {
      case "education":
        this.setState({
          age: "age",
          income: "income",
          [e.target.id]: e.target.value,
          data: this.props.data.values.data.education[e.target.value]
        }); //Fix
        break;
      case "age":
        this.setState({
          education: "education",
          income: "income",
          [e.target.id]: e.target.value,
          data: this.props.data.values.data.age[e.target.value]
        }); //Fix
        break;
      case "income":
        this.setState({
          education: "education",
          age: "age",
          [e.target.id]: e.target.value,
          data: this.props.data.values.data.income[e.target.value]
        }); //Fix
        break;
    }
  }

  render() {
    return (
      <div className="First-chart-holder">
        <h1>{this.props.languages.title4}</h1>
        <br/>
        <Chart04
          name={this.props.name}
          values={this.props.data.values}
          data={this.state.data}
          labels={this.props.data.labels}
          colors={this.props.data.colors}
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
            <option value="highschool">
              {this.props.languages.highschool}
            </option>
            <option value="bs+">{this.props.languages.bs}</option>
          </select>
        </div>
      </div>
    );
  }
}
export default FourthChartCon;
