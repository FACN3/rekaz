import React, { Component } from 'react';
import Figure from "./First_chart_figure";

class ChartHolder extends Component {
  constructor(props){
    super(props);
    this.state={flipps:["","","","","","","","","",""],update:false}
  }

  componentDidMount(){
    const toChange=Math.round(this.props.data/10);
    if(this.state.flipps.filter(i => i === "flipped").length ===toChange) return;

    let newState=["flipped","flipped","flipped","flipped","flipped",
    "flipped","flipped","flipped","flipped","flipped"].slice(0,Math.round(this.props.data/10));
    length=newState.length;
      for (let i=0;i<(10-length);i++){
        newState.push("");
      }
  /*  if(this.props.id < this.props.data/10){
      setTimeout(()=> this.flipped="flipped", this.props.id * 200)

    }
    */
    this.setState({flipps:newState});
  }
  componentDidUpdate(){
      const toChange=Math.round(this.props.data/10);
      const prev=this.state.flipps.filter(i => i === "flipped").length
      if(prev ===toChange) return;


    let newState=["flipped","flipped","flipped","flipped","flipped",
    "flipped","flipped","flipped","flipped","flipped"].slice(0,Math.round(this.props.data/10));
    length=newState.length;
      for (let i=0;i<(10-length);i++){
        newState.push("");
      }
      
      this.setState({flipps:newState });


    /*
    if(this.props.id < this.props.data/10){
      setTimeout(()=> this.flipped="flipped", this.props.id * 200)

    }else{
      setTimeout(()=> this.flipped="" , this.props.id * 200)

    }
    */
  }


  render(){
    const firstChart = [0,1,2,3,4,5,6,7,8,9];
    console.log(this.props.data/10);
    return (
    <div className="First-chart-container">
      <div className="first-chart-gender-title"><h3>{this.props.gender}</h3></div>
        <div className="First-chart-data-container">
          <div className="First-chart-figure-container">
            {firstChart.map((id,i) => {
              return <Figure key={id} flipped={this.state.flipps[i]} id={id} update={true} percentage={this.props.data/10}/>
            })}
          </div>
          <div className="first-chart-counters"><h3>counter</h3></div>
        </div>
      </div>
    );
  }
}

export default ChartHolder;
