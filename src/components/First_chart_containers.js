import React, { Component } from 'react';
import Figure from "./First_chart_figure";


class ChartHolder extends Component {
  constructor(props){
    super(props);
    this.state={flipps:["","","","","","","","","",""],data:Math.round(this.props.data/10)}
  }
  addOne(array){
    let i=array.indexOf("");
    let newArray = array.slice();
    newArray[i] = "flipped";
    return newArray;
  }
  lessOne(array){
    let i=array.indexOf("");
    let newArray = array.slice();
    newArray[i-1] = "";
    return newArray;
  }
  counter(array){
    let a = array.reduce((acc,i) =>{
      if(i=="flipped"){
        return acc+1;
      }
      return acc;
    },0);
    return a;
  }
  componentDidMount(){
    if(this.state.data>=1){
      this.setState({flipps:this.addOne(this.state.flipps)});
    }
  }
  componentDidUpdate(){

    setTimeout(() => {
      if(this.state.data!==Math.round(this.props.data/10)){
        this.setState({data:Math.round(this.props.data/10)});
      }
      if(this.counter(this.state.flipps)>this.state.data){
        this.setState({flipps:this.lessOne(this.state.flipps)});
      }else{
        if(this.counter(this.state.flipps)<this.state.data){
          this.setState({flipps:this.addOne(this.state.flipps)});
        }
      }
    },200)
  }


  render(){
    const firstChart = [0,1,2,3,4,5,6,7,8,9];
    return (
    <div className="First-chart-container">
      <div className="first-chart-gender-title"><h3>{this.props.gender}</h3></div>
        <div className="First-chart-data-container">
          <div className="First-chart-figure-container">
            {firstChart.map((id,i) => {
              return <Figure key={id} flipped={this.state.flipps[i]} id={id}/>
            })}
          </div>
          <div className="first-chart-counters"><h3>counter</h3></div>
        </div>
      </div>
    );
  }
}

export default ChartHolder;
