function datavisulization(dic_result_data){
    $( '#my_data_visualization' ).empty();
    let data_x_y = []
    var dic_result_data = dic_result_data;
        console.log(dic_result_data)
        for(let key in dic_result_data){
            let data_all = {group:key, frequency:dic_result_data[key][0].toString()};
            data_x_y.push(data_all);
        }
        console.log(data_x_y)

var margin = {top: 10, right: 30, bottom: 90, left: 40},
    width = 1500 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_data_visualization")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// X axis
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(data_x_y.map(function(d) { return d.group; }))
  .padding(0.5);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear()
  .domain([0, 0.3])
  .range([ height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

// Bars
svg.selectAll("mybar")
  .data(data_x_y)
  .enter()
  .append("rect")
    .attr("x", function(d) { return x(d.group); })
    .attr("width", x.bandwidth())
    .attr("fill", "#69b3a2")
    // no bar at the beginning thus:
    .attr("height", function(d) { return height - y(0); }) // always equal to 0
    .attr("y", function(d) { return y(0); })

// Animation
var u = svg.selectAll("rect")
    .data(data_x_y)

  u
    .enter()
    .append("rect")
    .merge(u)
    .transition()
    .duration(1000)
      .attr("x", function(d) { return x(d.group); })
      .attr("y", function(d) { return y(d.frequency); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.frequency); })
      .attr("fill", "#69b3a2")
}