import React, { Component } from "react";
import change from "../../model/d3_chart04";

class Chart04 extends Component {
  constructor(props) {
    super(props);
    (this.width = window.innerWidth),
      (this.height = 0.7 * this.width),
      (this.radius = Math.min(this.width, this.height) / 3.5);
      if(this.width>1000){
        this.width = this.width * 0.75;
      }
    this.pie = d3 //.layout
      .pie()
      .sort(null)
      .value(d => {
        return d.value;
      });

    this.arc = d3
      .arc()
      .outerRadius(this.radius * 0.8)
      .innerRadius(this.radius * 0.4);

    this.outerArc = d3
      .arc()
      .innerRadius(this.radius * 0.9)
      .outerRadius(this.radius * 0.9);
    this.labels = [
      "unknown where to sick advice",
      "lack of health solutions",
      "peer pressure",
      "lack of support programs",
      "lack of will"
    ];

    this.colors = ["#005073", "#107dac", "#189ad3", "#1ebbd7", "#71c7ec"];
  }
  compileDataSet(labels, data, colors) {
    return labels.map((label, i) => {
      return { label: label, value: data[i], color: colors[i] };
    });
  }
  componentDidMount() {
    const svg = d3
      .select(".chartC")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g");

    svg.append("g").attr("class", "slices");
    svg.append("g").attr("class", "labels");
    svg.append("g").attr("class", "lines");

    svg.attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 3 + ")"
    );

    const format = d3.format(".1f");

    const dataSet1 = this.compileDataSet(
      this.labels,
      this.props.data,
      this.colors
    );
    const dataSet2 = this.compileDataSet(
      this.labels,
      this.props.data,
      this.colors
    );

    change(
      dataSet1,
      true,
      svg,
      this.pie,
      this.arc,
      this.outerArc,
      this.width,
      this.height,
      this.radius
    );
    change(
      dataSet1,
      false,
      svg,
      this.pie,
      this.arc,
      this.outerArc,
      this.width,
      this.height,
      this.radius
    );
  }

  componentDidUpdate() {
    //const dataSet1 = compileDataSet(labels, this.props.data, colors);
    //change(dataSet1, false);
    const dataSet1 = this.compileDataSet(
      this.labels,
      this.props.data,
      this.colors
    );
    const svg = d3.select(".chartC");
    change(
      dataSet1,
      false,
      svg,
      this.pie,
      this.arc,
      this.outerArc,
      this.width,
      this.height,
      this.radius
    );
  }

  render() {
    return <svg className="chartC" />;
  }
}

export default Chart04;
