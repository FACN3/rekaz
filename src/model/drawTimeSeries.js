function drawTimeSeries(canvas,data, count,prev) {
  const ctx= canvas.getContext("2d");

  if (count > data.length){
  drawPrev(data);
    return 0; }
  var dataNow = data.slice(0, count)

  var last = dataNow.length - 1;
  //(dataNow[last ][0] - dataNow[last - 1 ][0])/300
  var cofX = 1;
  var cofY = ((dataNow[last][1] - dataNow[last - 1][1]) / 100);
  var counterX = dataNow[last - 1][0];
  var counterY = dataNow[last - 1][1];
  var g = setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPrev(dataNow.slice(0, last));
    if(prev) drawPrev(prev);

    drawLine(dataNow[last - 1][0], dataNow[last - 1][1], counterX, counterY);
    drawLine(dataNow[last - 1][0],0,counterX,0)

    if (counterX <= dataNow[last][0]) {
      counterX += cofX;
      counterY += cofY;

    } else {
      window.clearInterval(g);
      drawTimeSeries(canvas,data, count + 1,prev);
    }

  }, 15);

  function drawPrev(points) {
    for (var i = 0; i < points.length - 1; i++) {
      drawCircle(points[i][0], points[i][1]);
      drawLine(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1])
      drawLine(points[i][0], 0, points[i + 1][0], 0)
      ctx.font = "20px Arial";
  ctx.fillText(2000+i,points[i][0],400-5);
  ctx.fillText(points[i+1][1],points[i+1][0], 400-points[i+1][1]+15);
    }
  }

  function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x2, 400-y2);
    ctx.lineTo(x1, 400-y1);
    ctx.stroke();
  }
  function drawCircle(x,y){
    ctx.beginPath();
  ctx.arc(x,400-y,5,0,2*Math.PI);
  ctx.stroke();

  }

}



export default drawTimeSeries;
