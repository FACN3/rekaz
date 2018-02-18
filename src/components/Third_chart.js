import React, {Component} from 'react';

class ThirdChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[{letter:"Day",frequency:50},{letter:"Month",frequency:10},{letter:"Year",frequency:100}]
    }
  }
  componentDidMount() {
    var margin = {
        top: 20,
        right: 30,
        bottom: 20,
        left: 30
      },
      width = 500 - margin.left - margin.right,
      height = 700 - margin.top - margin.bottom;

    var formatPercent = d3.format(".3s");

    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleBand().range([
      height, 0
    ], .3, .3);
// idk??
    var xAxis = d3.select(".axis")
    .call(d3.axisBottom(x).tickFormat(formatPercent));

    var yAxis =  d3.select(".axis")
    .call(d3.axisLeft(y).tickFormat(formatPercent));

    var svg = d3.select(".third-chart-div").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const data = this.state.data;
      x.domain([
        0,
        d3.max(data, function(d) {
          return d.frequency;
        })
      ]);
      y.domain(data.map(function(d) {
        return d.letter;
      }));

      var bar = svg.selectAll(".bar").data(data).enter().append("g").attr("class", "bar");

      bar.append("rect").attr("y", function(d) {
        return y(d.letter);
      }).attr("height", y.range()).attr("width", 0).style("fill", "#1a9850");

      bar.append("text").attr("x", 5).attr("y", function(d) {
        return y(d.letter) + y.range() / 2 + 3;
      }).text(0);

      bar.selectAll("rect").transition().ease("quad-out").duration(2000).delay(0).attr("width", function(d) {
        return x(d.frequency);
      });

      bar.selectAll("text").transition().ease("quad-out").duration(2000).delay(0).attr("x", function(d) {
        return x(d.frequency) + 3;
      }).tween("text", function(d) {
        var i = d3.interpolate(0, d.frequency);
        return function(t) {
          d3.select(this).text(formatPercent(i(t)));
        };
      });

      svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);

      svg.append("g").attr("class", "y axis").call(yAxis).selectAll("text").style("font-weight", "bold");

      d3.select(self.frameElement).style("height", (height + margin.top + margin.bottom) + "px");


  }
  render() {
    return (<div className="third-chart-div"></div>);
  }
}

export default ThirdChart;
