import React from 'react';
import TimeSeries from './TimeSeries';
import TimeSeriesData from './TimeSeriesData';
class TimeSeriesCon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selection: 'default',
      selectionSub: 'default',
      age: "age",
      income: "income",
      education: "education"

    };
    this.allDat =  JSON.parse(JSON.stringify(TimeSeriesData));
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidUpdate() {
    this.allDat =  JSON.parse(JSON.stringify(TimeSeriesData));

  }

  handleChange(e) {
    this.allDat =  JSON.parse(JSON.stringify(TimeSeriesData));

    console.log("wew")

    if (e.target.id === e.target.value) {
      console.log("wew=")

      this.setState({age: "age", income: "income", education: "education", selection: "default", selectionSub: "default"}); //Fix
      return;
    }

    switch (e.target.id) {
      case "education":
        this.setState({
          age: "age",
          income: "income",
          [e.target.id]: e.target.value,
          selection: e.target.id,
          selectionSub: e.target.value
        }); //Fix
        break;
      case "age":
        this.setState({
          education: "education",
          income: "income",
          [e.target.id]: e.target.value,
          selection: e.target.id,
          selectionSub: e.target.value
        }); //Fix
        break;
      case "income":
        this.setState({
          education: "education",
          age: "age",
          [e.target.id]: e.target.value,
          selection: e.target.id,
          selectionSub: e.target.value
        }); //Fix
        break;
    }
  }

  render() {
    return (
      <div className="First-chart-holder">
        <h1>{this.props.languages.title2}</h1>
        {console.log(TimeSeriesData)}
        <TimeSeries male={this.props.languages.male} female={this.props.languages.female} data={this.allDat[this.state.selection][this.state.selectionSub]}/>
        <div className="First-chart-filters-holder sel sel--black-panther">
          <select id="age" className={this.props.chosenLang == "ar"
            ? "First-chart-filter-ar"
            : "First-chart-filter"} onChange={this.handleChange} value={this.state.age}>
            <option value="age">{this.props.languages.age}</option>
            <option value="18-29">18-29</option>
            <option value="30-44">30-44</option>
            <option value="45-59">45-59</option>
            <option value="60+">60+</option>
          </select>
          <select id="income" className={this.props.chosenLang == "ar"
            ? "First-chart-filter-ar"
            : "First-chart-filter"} onChange={this.handleChange} value={this.state.income}>
            <option value="income">{this.props.languages.income}</option>
            <option value="low">{this.props.languages.low}</option>
            <option value="meduim">{this.props.languages.meduim}</option>
            <option value="high">{this.props.languages.high}</option>
          </select>
          <select id="education" className={this.props.chosenLang == "ar"
            ? "First-chart-filter-ar"
            : "First-chart-filter"} onChange={this.handleChange} value={this.state.education}>
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
export default TimeSeriesCon;
