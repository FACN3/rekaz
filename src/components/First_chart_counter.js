import React, { Component } from "react";
import Circle from "../model/d3_counter";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, value: 60 };
    this.startCounter = this.startCounter.bind(this);
    this.counterCirclesArray = [
      new Circle(`counter${this.props.position}`, 50, 50, 50, 0)
    ];
  }

  componentDidMount() {
    const width = window.outerWidth;
    const svg = d3.select(".counter" + this.props.position);
    let svgWidth = 0;
    let svgHeight = 0;
    let radius = 0;
    if(width < 1000){
      svgWidth = width * 0.25;
      svgHeight = width * 0.25;
      radius = width / 10;
    }else{
      svgWidth = width * 0.125;
      svgHeight = width * 0.125;
      radius = width/20;
    }

    svg.attr("width", svgWidth).attr("height", svgHeight);
    svg
      .selectAll("g")
      .data(this.counterCirclesArray)
      .enter()
      .append("g")
      .attr("transform", function(d) {
        return `translate(${radius}, ${radius})`;
      })
      .append("circle")
      .attr("r", radius)
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("fill", "#fae596");

    svg
      .selectAll("g")
      .append("text")
      .attr("id", `counter${this.props.position}`)
      .attr("fill", "black")
      .style("font-size", `${radius / 2}px`)
      .style("font-family", "Robot")
      .style("font-weight", "bold")
      .attr("anchor", "middle")
      .attr("x", -0.65 * radius)
      .text(function(d) {
        return "0%";
      });

    this.startCounter();
  }

  componentDidUpdate() {
    this.startCounter();
  }

  startCounter() {
    const svg = d3.select(".counter" + this.props.position);
    {
      this.counterCirclesArray.forEach((value, i) => {
        value.updateState(this.props.value);
      });

      svg
        .select(`#counter${this.props.position}`)
        .transition()
        .duration(2000)
        .ease(d3.easeSin)
        .tween("text", function(d) {
          let that = d3.select(this),
            i = d3.interpolate(d.previousState / 100, d.currentState / 100);
          return function(t) {
            that.text(d3.format(".1%")(i(t)));
          };
        });
    }
  }

  render() {
    return <svg className={"counter" + this.props.position} />;
  }
}
export default Counter;
