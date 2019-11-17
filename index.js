const d3 = require("d3");
const data = require("./data");

let width = 650;
let height = 450;

const barChartData = () => {
  const extent = d3.extent(data, d => d.date);
  const xScale = d3
    .scaleTime()
    .domain(extent)
    .range([0, width]);

  console.log(xScale(new Date("1/1/2017")));
  const yExtent = d3.extent(data, d => d.high);

  return [];
};

barChartData();
