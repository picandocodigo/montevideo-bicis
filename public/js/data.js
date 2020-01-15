var ctx = document.getElementById("chart").getContext("2d");

var total2012 = parseInt(document.getElementById("2012total").innerHTML.trim());
var total2013 = parseInt(document.getElementById("2013total").innerHTML.trim());
var total2014 = parseInt(document.getElementById("2014total").innerHTML.trim());
var total2015 = parseInt(document.getElementById("2015total").innerHTML.trim());
var total2016 = parseInt(document.getElementById("2016total").innerHTML.trim());
var total2017 = parseInt(document.getElementById("2017total").innerHTML.trim());
var total2018 = parseInt(document.getElementById("2018total").innerHTML.trim());

var bike2012 = parseInt(document.getElementById("2012bikes").innerHTML.trim());
var bike2013 = parseInt(document.getElementById("2013bikes").innerHTML.trim());
var bike2014 = parseInt(document.getElementById("2014bikes").innerHTML.trim());
var bike2015 = parseInt(document.getElementById("2015bikes").innerHTML.trim());
var bike2016 = parseInt(document.getElementById("2016bikes").innerHTML.trim());
var bike2017 = parseInt(document.getElementById("2017bikes").innerHTML.trim());
var bike2018 = parseInt(document.getElementById("2018bikes").innerHTML.trim());

var data = {
  labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
  datasets: [
    {
      label: "Total muertes",
      fillColor: "rgba(220,220,220,0.5)",
      strokeColor: "rgba(220,220,220,0.8)",
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: [total2012, total2013, total2014, total2015, total2016, total2017, total2018]
    },
    {
      label: "Accidentes en bicicleta",
      fillColor: "rgba(151,187,205,0.5)",
      strokeColor: "rgba(151,187,205,0.8)",
      highlightFill: "rgba(151,187,205,0.75)",
      highlightStroke: "rgba(151,187,205,1)",
      data: [bike2012, bike2013, bike2014, bike2015, bike2016, bike2017, bike2018]
    }
  ]
};

var options = {
  multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>"
};

var chart = new Chart(ctx).Bar(data, options);
