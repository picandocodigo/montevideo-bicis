var ctx = $("#chart").get(0).getContext("2d");
var total2012 = parseInt($("#2012total").text().trim());
var total2013 = parseInt($("#2013total").text().trim());
var total2014 = parseInt($("#2014total").text().trim());
var bike2012 = parseInt($("#2012bikes").text().trim());
var bike2013 = parseInt($("#2013bikes").text().trim());
var bike2014 = parseInt($("#2014bikes").text().trim());

var data = {
  labels: ["2012", "2013", "2014"],
  datasets: [
    {
      label: "Total muertes",
      fillColor: "rgba(220,220,220,0.5)",
      strokeColor: "rgba(220,220,220,0.8)",
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: [total2012, total2013, total2014]
    },
    {
      label: "Accidentes en bicicleta",
      fillColor: "rgba(151,187,205,0.5)",
      strokeColor: "rgba(151,187,205,0.8)",
      highlightFill: "rgba(151,187,205,0.75)",
      highlightStroke: "rgba(151,187,205,1)",
      data: [bike2012, bike2013, bike2014]
    }
  ]
};

var options = {
  multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>"
};

var chart = new Chart(ctx).Bar(data, options);