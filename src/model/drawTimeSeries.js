function drawTimeSeries(canvas, dataOrg, count, male, female) {

  var dataAll = scaleIt(dataOrg, canvas.width, count);
  const ctx = canvas.getContext("2d");
  const data = dataAll[0];
  const data2 = dataAll[1];
  if (count > data.length) {
    drawPrev(data, "#7347E1");
    drawPrev(data2, "#5aad5a");
    return 0;
  }

  var dataNow2 = data2.slice(0, count)
  var dataNow = data.slice(0, count)
  var xDis = dataNow[1][0] - dataNow[0][0];
  var last = dataNow.length - 1;
  var cofX = 1;
  var cofY = ((dataNow[last][1] - dataNow[last - 1][1]) / xDis);
  var counterX = dataNow[last - 1][0];
  var counterY = dataNow[last - 1][1];
  var cofX2 = 1;
  var cofY2 = ((dataNow2[last][1] - dataNow2[last - 1][1]) / xDis);
  var counterX2 = dataNow2[last - 1][0];
  var counterY2 = dataNow2[last - 1][1];

  var g = setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPrev(dataNow.slice(0, last), "#7347E1");
    drawPrev(dataNow2.slice(0, last), "#5aad5a");
    drawLine2(dataNow[last - 1][0], dataNow[last - 1][1], counterX, counterY, dataNow2[last - 1][0], dataNow2[last - 1][1], counterX2, counterY2, "#7347E1", "#5aad5a");

    drawLine(dataNow[last - 1][0], 10, counterX, 10, "#000000")

    if (counterX <= dataNow[last][0]) {
      counterX += cofX;
      counterY += cofY;
      counterX2 += cofX2;
      counterY2 += cofY2;

    } else {
      window.clearInterval(g);
      drawTimeSeries(canvas, dataAll, count + 1, male, female);
    }

  }, Math.sin((Math.PI / 100) * (counterX - ((last - 1) * 100))) * 10);

  function drawPrev(points, color) {
    drawDefault();
    for (var i = 0; i < points.length; i++) {
      drawCircle(points[i][0], points[i][1], "#0000000");
      if (i < points.length - 1) {
        drawLine(points[i][0], (points[i][1]), points[i + 1][0], points[i + 1][1], color)
        drawLine(points[i][0], 10, points[i + 1][0], 10, "#000000")
      }
      ctx.font = "20px Arial";
      ctx.fillText(2004 + (i*2), points[i][0], 410);
      ctx.fillText(Math.round((points[i][1]/canvas.height)*100), points[i][0], 400 - points[i][1] + 15);

    }
  }

  function drawLine(x1, y1, x2, y2, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x2, 400 - y2);
    ctx.lineTo(x1, 400 - y1);
    ctx.stroke();
  }
  function drawLine2(x1, y1, x2, y2, x12, y12, x22, y22, color, color2) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x2, 400 - y2);
    ctx.lineTo(x1, 400 - y1);
    ctx.stroke();
    ctx.beginPath();

    ctx.strokeStyle = color2;
    ctx.moveTo(x22, 400 - y22);
    ctx.lineTo(x12, 400 - y12);

    ctx.stroke();
  }
  function drawCircle(x, y, color) {
    ctx.beginPath();
    ctx.strokeStyle = ("#000000");
    ctx.arc(x, 400 - y, 5, 0, 2 * Math.PI);
    ctx.stroke();

  }

  function scaleIt(unScaled, width) {
    var line1 = unScaled[0];
    var line2 = unScaled[1];
    var widthNew = (width - (width / 8));
    var points = [
      (width / 8),
      (width / 2),
      (width - (width / 8))
    ]

    return ([
      changeIt(line1, points),
      changeIt(line2, points)
    ]);

  }
  function changeIt(points1, newPoints) {

    var newPointsS = points1.slice();

    for (var i = 0; i < points1.length; i++) {

      newPointsS[i][0] = newPoints[i];

      if (count == 2)
        newPointsS[i][1] = (newPointsS[i][1] / 100) * canvas.height;
      }

    return newPointsS;

  }

  function drawDefault() {

    ctx.beginPath();
    ctx.strokeStyle = ("#7347E1");
    ctx.arc(canvas.width - 80, 10, 8, 0, 2 * Math.PI);
    ctx.fillStyle = '#7347E1';

    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = ("#5aad5a");
    ctx.arc(canvas.width - 80, 40, 8, 0, 2 * Math.PI);
    ctx.fillStyle = '#5aad5a';
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'black';

    ctx.font = "15px Arial";
    ctx.fillText(male, canvas.width - 60, 15);
    ctx.fillText(female, canvas.width - 60, 43);

    //,"#7347E1");
    //"#5aad5a");

  }

}

export default drawTimeSeries;
