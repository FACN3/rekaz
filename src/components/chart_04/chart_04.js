import React, { Component } from "react";
import change from "../../model/d3_chart04";

class Chart04 extends Component {
  constructor(props) {
    super(props);
    (this.width = window.innerWidth),
      (this.height = 0.7 * this.width),
      (this.radius = Math.min(this.width, this.height) / 2.8);
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
      .innerRadius(this.radius * 0.8)
      .outerRadius(this.radius * 0.8);
    this.labels = this.props.values.labels;

    this.colors = this.props.values.colors;
  }
  compileDataSet(labels, data, colors) {
    return labels.map((label, i) => {
      return { label: label, value: data[i], color: colors[i] };
    });
  }
  componentDidMount() {
    const svg = d3
      .select("." + this.props.name)
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g");

    svg.append("g").attr("class", "slices");
    svg.append("g").attr("class", "labels");
    svg.append("g").attr("class", "lines");

    svg.attr(
      "transform",
      "translate(" + this.width / 2 + "," + this.height / 2.6 + ")"
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
    const svg = d3.select("." + this.props.name);
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
    console.log(this.props.name);
    return <svg className={this.props.name} />;
  }
}

export default Chart04;
