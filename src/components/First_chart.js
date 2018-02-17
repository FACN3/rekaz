import React, {Component} from 'react';
import FirstChartContainers from './First_chart_containers';

const gender = ['Female', 'Male', 'Both'];


class FirstChart extends Component {
  constructor(props) {
    super(props);
    this.state={
      age:"age",
      income:"income",
      education:"education",
      data : {
        age:{
          age:[9,50,30],
          '18-29':[12,45,29],
          '30-44':[7,60, 33],
          '45-59':[5,55,30],
          '60+':[2,40,20]
        },
        income:{
          income:[9,50,30],
          'low':[9,43,26],
          'meduim':[10,50,30],
          'high':[12,60,37]
        },
        education:{
          education: [9,50,30],
          'secondary':[7,62,35],
          'highschool':[5,55,30],
          'bs+':[4,50,27]
        }
      },
      choosen:['age','age']
    }
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange(e){
    switch(e.target.id){
     case "education":
     this.setState({  age:"age", income:"income", [e.target.id] : e.target.value,choosen:[e.target.id,e.target.value]});//Fix
    break;
    case "age":
    this.setState({  education:"education", income:"income", [e.target.id] : e.target.value,choosen:[e.target.id,e.target.value]});//Fix
   break;
   case "income":
   this.setState({  age:"age", education:"education", [e.target.id] : e.target.value,choosen:[e.target.id,e.target.value]});//Fix
  break;
  }
}
  render() {
    console.log(this.state.choosen);
    return (<div className="First-chart-holder">
      {
        gender.map((sex, i) => {
          return <FirstChartContainers gender={sex} data={this.state.data[this.state.choosen[0]][this.state.choosen[1]][i]}/>
        })
      }
      <div className="First-chart-filters-holder sel sel--black-panther">
        <select id="age" className="First-chart-filter"  onChange={this.handleChange} value={this.state.age}>
          <option value="age">Age</option>
          <option value="18-29">18-29</option>
          <option value="30-44">30-44</option>
          <option value="45-59">45-59</option>
          <option value="60+">60+</option>
        </select>
        <select id="income" className="First-chart-filter"  onChange={this.handleChange} value={this.state.income}>
          <option value="income">Income</option>
          <option value="low">Low</option>
          <option value="meduim">Medium</option>
          <option value="high">High</option>
        </select>
        <select id="education" className="First-chart-filter" onChange={this.handleChange} value={this.state.education}>
          <option value="education">Education</option>
          <option value="secondary">Secondary</option>
          <option value="highschool">Highschool</option>
          <option value="bs+">BS+</option>
        </select>
      </div>
    </div>);
  }
}

export default FirstChart;
