import React, { Component } from "react";
import Figure from "./First_chart_figure";
import Counter from "./First_chart_counter";

class ChartHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipps: [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ],
      data: Math.round(this.props.data / 5)
    };
  }
  addOne(array) {
    let i = array.indexOf("");
    let newArray = array.slice();
    newArray[i] = "flipped";
    return newArray;
  }
  lessOne(array) {
    let i = array.indexOf("");
    let newArray = array.slice();
    newArray[i - 1] = "";
    return newArray;
  }
  counter(array) {
    let a = array.reduce((acc, i) => {
      if (i == "flipped") {
        return acc + 1;
      }
      return acc;
    }, 0);
    return a;
  }
  componentDidMount() {
    if (this.state.data >= 1) {
      this.setState({ flipps: this.addOne(this.state.flipps) });
    }
  }
  componentDidUpdate() {
    setTimeout(() => {
      if (this.state.data !== Math.round(this.props.data / 5)) {
        this.setState({ data: Math.round(this.props.data / 5) });
      }
      if (this.counter(this.state.flipps) > this.state.data) {
        this.setState({ flipps: this.lessOne(this.state.flipps) });
      } else {
        if (this.counter(this.state.flipps) < this.state.data) {
          this.setState({ flipps: this.addOne(this.state.flipps) });
        }
      }
    }, 200);
  }

  render() {
    let firstChart = [];
    for (let i = 0; i < 20; i++) {
      firstChart.push(i);
    }
    return (
      <div className="First-chart-container">
        <div className={this.props.lang=='ar'?"first-chart-gender-title-ar":"first-chart-gender-title"}>
          <h3>{this.props.gender}</h3>
        </div>
        <div className={this.props.lang=='ar'?"First-chart-data-container-ar":"First-chart-data-container"}>
          <div className="First-chart-figure-container">
            {firstChart.map((id, i) => {
              return <Figure key={id} flipped={this.state.flipps[i]} id={id} />;
            })}
          </div>
          <div className="first-chart-counters">
            <Counter value={this.props.data} position={this.props.index} />
          </div>
        </div>
      </div>
    );
  }
}

export default ChartHolder;
