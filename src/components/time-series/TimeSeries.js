import React from 'react';
import drawTimeSeries from '../../model/drawTimeSeries';
class TimeSeries extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.myCanvas.height="450";
    this.myCanvas.width="600";
    drawTimeSeries(this.myCanvas,this.props.data,2)
  }

  componentDidUpdate(){
    drawTimeSeries(this.myCanvas,this.props.data,2)

  }


  render(){
    return(<canvas ref={canvas=>{this.myCanvas=canvas;}}></canvas>);

  }
}
export default TimeSeries;
