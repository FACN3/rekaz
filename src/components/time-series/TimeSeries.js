import React from 'react';
import drawTimeSeries from '../../model/drawTimeSeries';
class TimeSeries extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){

    let width = window.innerWidth;
    let height = 0.7 * width;
      if(width>1000){
        width = width * 0.75;
       height = 0.56 * width;
      }

    this.myCanvas.height=height;
    this.myCanvas.width=width;
    drawTimeSeries(this.myCanvas,this.props.data,2,this.props.male,this.props.female)
  }

  componentDidUpdate(){
    drawTimeSeries(this.myCanvas,this.props.data,2,this.props.male,this.props.female)

  }


  render(){
    return(<canvas ref={canvas=>{this.myCanvas=canvas;}}></canvas>);

  }
}
export default TimeSeries;
