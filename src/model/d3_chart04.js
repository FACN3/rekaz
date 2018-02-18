const change = (data, init, svg, pie, arc, outerArc, width, height, radius) => {
  const format = d3.format(".1f");
  /* ------- PIE SLICES -------*/
  let slice = svg
    .select(".slices")
    .selectAll("path.slice")
    .data(pie(data));

  if (init) {
    slice
      .enter()
      .append("path")
      .attr("d", arc)
      .style("fill", function(d) {
        return d.data.color;
      })
      .attr("class", "slice");
  } else {
    slice
      .enter()
      .append("path")
      .style("fill", function(d) {
        return d.data.color;
      })
      .attr("class", "slice");
  }

  slice
    .transition()
    .duration(1000)
    .attrTween("d", function(d) {
      this._current = this._current || d;
      let interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function(t) {
        return arc(interpolate(t));
      };
    });

  slice.exit().remove();

  /* ------- TEXT LABELS -------*/

  let text = svg
    .select(".labels")
    .selectAll("text")
    .data(pie(data));

  text
    .enter()
    .append("text")
    .attr("font-size", "0.3em")
    .attr("dy", ".35em")
    .text(function(d) {
      return `${d.data.label} (${format(d.data.value)})`;
    });

  function midAngle(d) {
    return d.startAngle + (d.endAngle - d.startAngle) / 2;
  }

  text
    .transition()
    .duration(1000)
    .attrTween("transform", function(d) {
      this._current = this._current || d;
      let interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function(t) {
        let d2 = interpolate(t);
        let pos = outerArc.centroid(d2);
        pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
        return "translate(" + pos + ")";
      };
    })
    .tween("text", function(d) {
      let textLabel = d3.select(this);
      this._current = this._current || d;
      let interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function(t) {
        let d2 = interpolate(t);
        textLabel.text(`${d.data.label} (${format(d2.data.value)})`);
      };
    })
    .styleTween("text-anchor", function(d) {
      this._current = this._current || d;
      let interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function(t) {
        let d2 = interpolate(t);
        return midAngle(d2) < Math.PI ? "start" : "end";
      };
    });

  text.exit().remove();

  /* ------- SLICE TO TEXT POLYLINES -------*/

  let polyline = svg
    .select(".lines")
    .selectAll("polyline")
    .data(pie(data));

  polyline.enter().append("polyline");

  polyline
    .transition()
    .duration(1000)
    .attrTween("points", function(d) {
      this._current = this._current || d;
      let interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function(t) {
        let d2 = interpolate(t);
        let pos = outerArc.centroid(d2);
        pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
        return [arc.centroid(d2), outerArc.centroid(d2), pos];
      };
    });

  polyline.exit().remove();
};

export default change;
