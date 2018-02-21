import React from 'react';
import TimeSeries from './TimeSeries';
import TimeSeriesData from './TimeSeriesData';
class TimeSeriesCon extends React.Component {

  constructor(props) {
    super(props);
    this.state={selection:'default'};
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e) {
    switch (e.target.id) {
      case "education":
        this.setState({
          selection: "education"
        }); //Fix
        break;
      case "age":
        this.setState({
          selection: "age"
        }); //Fix
        break;
      case "income":
        this.setState({
          selection: "income"
        }); //Fix
        break;
    }
  }



 render(){
   return (
     <div className="First-chart-holder">
       <h1>Smoking Trends</h1>
       <TimeSeries male={this.props.languages.male} female={this.props.languages.female} data={TimeSeriesData[this.state.selection]}/>
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
export default TimeSeriesCon;
