const updateState = newData => {
  let width = window.innerWidth * 0.7,
    height = 1.2 * width,
    margin = { top: 20, right: 30, bottom: 20, left: 0.1 * width };

  //----------chart config------------
  let chartHeight = height / 1.3;
  let chartWidth = width / 1.3;
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
    newData.map(function(d) {
      return d.label;
    })
  );

  console.log("newData", newData);

  let bar = d3.selectAll(".chartBar").enter(newData);

  d3
    .selectAll(".chartBar")
    .transition()
    .ease(d3.easeQuad)
    .duration(2000)
    .attr("width", function(d, i) {
      console.log("i", i);
      console.log("newData[i].frequency", newData[i].frequency);
      return x(newData[i].frequency);
    });

  d3
    .selectAll(".cigNumber")
    .transition()
    .ease(d3.easeQuad)
    .duration(2000)
    .attr("x", function(d, i) {
      return x(newData[i].frequency) + 3;
    })
    .tween("text", function(d, i) {
      console.log("this", this);
      console.log("d", d);
      let textLabel = d3.select(this);
      this._current = this._current || d.frequency;
      let interpolate = d3.interpolate(this._current, newData[i].frequency);
      this._current = interpolate(0);
      return function(t) {
        let d2 = interpolate(t);
        textLabel.text(d3.format(".0f")(d2) + "%");
      };
    });
};
export default updateState;
