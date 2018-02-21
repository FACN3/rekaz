import React, { Component } from "react";
import change from "../../model/d3_chart03";

class Chart03 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const data = [
      { label: "20+", frequency: 34.3 },
      { label: "10-20", frequency: 47.1 },
      { label: "<10", frequency: 18.6 }
    ];

    const data2 = [
      { label: "20+", frequency: 50.6 },
      { label: "10-20", frequency: 30.3 },
      { label: "<10", frequency: 19.1 }
    ];

    const data3 = [
      { label: "20+", frequency: 15.6 },
      { label: "10-20", frequency: 45.3 },
      { label: "<10", frequency: 40.1 }
    ];

    const packCostLabels = [
      "cost 30 cigs/day",
      "cost 20 cigs/day",
      "cost 10 cigs/day"
    ];
    const packCostYear = [19163, 12775, 6388];
    const packCostMonth = [1575, 1050, 525];
    const packCostWeek = [368, 245, 126];

    //--------svg size config -------
    let width = 0;
    let height = 0;
    let chartWidth = 0;
    let infoBoxPos = 0;
    if (window.innerWidth > window.innerHeight) {
      //desktop screen
      width = window.innerWidth * 0.4;
      height = width;
      chartWidth = 1.2 * width;
      infoBoxPos = 1.3 * width;
    } else {
      //mobile phone screen
      width = window.innerWidth * 0.7;
      height = 1.2 * width;
      chartWidth = width / 1.3;
      infoBoxPos = width;
    }
    let margin = { top: 20, right: 30, bottom: 20, left: 0.1 * width };
    console.log("width", width);
    console.log("height", height);
    //----------chart config------------
    let chartHeight = height / 1.3;

    var formatPercent = d3.format(".3s");
    let infoBoxY = [];

    var x = d3.scaleLinear();
    x.domain([0, 60]).range([0, chartWidth]); //defines chart's width
    let xAxis = d3
      .axisBottom()
      .ticks(5)
      .scale(x);
    // x.domain([
    //   0,
    //   d3.max(data, function(d) {
    //     return d.frequency;
    //   })
    // ]);

    let y = d3
      .scaleBand()
      .range([chartHeight, 0]) //defines chart's heights
      .paddingInner([0.5])
      .paddingOuter([0.5]);

    let yAxis = d3
      .axisLeft()
      .scale(y)
      .ticks(0);

    y.domain(
      data.map(function(d) {
        return d.label;
      })
    );

    var svg = d3
      .select(".chartBars")
      .attr("width", "100%")
      .attr("height", height)
      .append("g")
      .attr("class", "cigConsumption")
      //.attr("width", width / 2)
      .attr("transform", "translate(" + width / 5 + "," + height / 15 + ")");

    var bar = svg
      .selectAll(".chartBar")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "bar");

    bar
      .append("rect")
      .attr("class", "chartBar")
      .attr("y", function(d) {
        infoBoxY.push(y(d.label));
        return y(d.label);
      })
      .attr("height", y.bandwidth())
      .attr("width", 0)
      .style("fill", "#1a9850");

    bar
      .append("text")
      .attr("class", "cigNumber")
      .attr("x", 5)
      .attr("y", function(d) {
        return y(d.label) + y.bandwidth() / 2 + 3;
      })
      .style("font-size", "1rem")
      .text(0);

    bar
      .selectAll("rect")
      .transition()
      .ease(d3.easeQuad)
      .duration(2000)
      .delay(0)
      .attr("width", function(d) {
        return x(d.frequency);
      });

    bar
      .selectAll(".cigNumber")
      .transition()
      .ease(d3.easeQuad)
      .duration(2000)
      .delay(0)
      .attr("x", function(d) {
        return x(d.frequency) + 3;
      })
      .tween("text", function(d) {
        let textLabel = d3.select(this);
        this._current = this._current || d.frequency;
        let interpolate = d3.interpolate(0, d.frequency);
        this._current = interpolate(0);
        return function(t) {
          let d2 = interpolate(t);
          textLabel.text(d3.format(".0f")(d2) + "%");
        };
      });

    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height / 1.3 + ")")
      .style("font-size", "1rem")
      .call(xAxis);

    svg
      .append("g")
      .attr("class", "y_axis")
      .style("font-size", "1rem")
      .call(yAxis)
      .selectAll("text")
      .attr("transform", function() {
        return ` translate(${-10},0) rotate(-90)`;
      })
      .style("text-anchor", "start");

    svg
      .append("text")
      .attr("class", "yLegend")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - 1.6 * margin.left)
      .attr("x", 0 - height / 2.4)
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style("font-size", "1rem")
      .style("font-family", "Roboto")
      .text("cigarettes per day");

    d3
      .select(".chartBars")
      .append("g")
      .attr("class", "cigCostCon")
      .attr("transform", "translate(" + infoBoxPos + "," + 0.03 * height + ")");

    let infoBox = d3
      .select(".cigCostCon")
      .selectAll("g")
      .data(packCostLabels)
      .enter()
      .append("g")
      .attr("class", "infoCon");

    infoBox
      .append("rect")
      .attr("class", "cigCost")
      .attr("y", function(d, i) {
        return infoBoxY[i];
      })
      .attr("height", height / 5)
      .attr("width", 0.4 * width)
      .style("fill", "lightgrey"); //"#1ebbd7");

    infoBox
      .append("text")
      .attr("class", "smokingPerPeriod")
      .text(function(d) {
        return d;
      })
      .attr("fill", "red")
      .attr("y", function(d, i) {
        return infoBoxY[i] + 0.3 * y.bandwidth();
      })
      .attr("x", 0.01 * width)
      .style("font-size", "0.9rem")
      .style("font-weight", "bold");

    infoBox
      .append("text")
      .attr("class", "smokingCost")
      .text(function(d) {
        return `week: `;
      })
      .attr("fill", "red")
      .attr("y", function(d, i) {
        return infoBoxY[i] + 0.8 * y.bandwidth();
      })
      .attr("x", 0.03 * width)
      .style("font-size", "0.8rem")
      .style("font-weight", "bold")
      .append("tspan")
      .text(function(d, i) {
        return packCostWeek[i];
      })
      .style("fill", "blue");

    infoBox
      .append("text")
      .attr("class", "smokingCost")
      .text(function(d) {
        return `month: `;
      })
      .attr("fill", "red")
      .attr("y", function(d, i) {
        return infoBoxY[i] + 1.2 * y.bandwidth();
      })
      .attr("x", 0.03 * width)
      .style("font-size", "0.8rem")
      .style("font-weight", "bold")
      .append("tspan")
      .text(function(d, i) {
        return d3.format(",")(packCostMonth[i]);
      })
      .style("fill", "blue");

    infoBox
      .append("text")
      .attr("class", "smokingCost")
      .text(function(d) {
        return `year:`;
      })
      .attr("fill", "red")
      .attr("y", function(d, i) {
        return infoBoxY[i] + 1.6 * y.bandwidth();
      })
      .attr("x", 0.03 * width)
      .style("font-size", "0.8rem")
      .style("font-weight", "bold")
      .append("tspan")
      .text(function(d, i) {
        return d3.format(",")(packCostYear[i]);
      })
      .style("fill", "blue");
  }

  componentDidUpdate() {
    console.log(this.props.data);
    change(this.props.data);
  }

  render() {
    return <svg className="chartBars" />;
  }
}

export default Chart03;
