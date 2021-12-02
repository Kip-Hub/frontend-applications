import useD3 from "../hooks/useD3";
import React from "react";
import * as d3 from "d3";

const D3BarChart = ({ data }) => {
    const margin = { top: 40, bottom: 10, left: 120, right: 120 };
    const width = 800 - margin.left - margin.right;
    let height = 800 - margin.top - margin.bottom;
  
    const ref = useD3((svg) => {
    
    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const xscale = d3.scaleLinear().range([0, width]); // setting up the scales
    const yscale = d3.scaleBand().rangeRound([0, height]).paddingInner(0.15);

    const xaxis = d3.axisTop().scale(xscale); // setting up axis
    const g_xaxis = g.append("g").attr("class", "x axis");
    const yaxis = d3.axisLeft().scale(yscale);
    const g_yaxis = g.append("g").attr("class", "y axis");

    update(data);

    function update(data) {

      xscale.domain([0, 10]);
      yscale.domain(data.map((d) => d.name));

      g_xaxis.transition().call(xaxis);
      g_yaxis.transition().call(yaxis);

      const color = d3.scaleSequential(d3.interpolateRgb("#85d6d6", "#2335cf"));
      color.domain([
        d3.min(data, (d) => d.rating.average),
        d3.max(data, (d) => d.rating.average),
      ]);

      const rect = g
        .selectAll("rect") // select the rectangles
        .data(data)
        .join(
          //assign the data to the rectangles and join it
          (enter) => {
            const rect_enter = enter
              .append("rect")
              .attr("x", 0) // start at 0 on the x axis
              .attr("fill", (d) => color(d.rating.average)); // fill the rect

            return rect_enter;
          },

          (update) => update, // updating the data (not used)

          (exit) => exit.remove() // removing the data thats not assigned (not used)
        );

      rect
        .attr("height", yscale.bandwidth())
        .attr("y", (d) => yscale(d.name))
        .on("mouseover", mouseOver)
        .on("mousemove", mouseMove) // mouse events that call functions
        .on("mouseleave", mouseOut)
        .on("click", episodeDetails)
        .transition() // create transition on the rendering of the width of the bar
        .duration(600)
        .ease(d3.easeBackOut.overshoot(1.7)) // easing with an effect
        .attr("width", (d) => xscale(d.rating.average));
    }

    d3.select("body")
      .append("p")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "#282c34")
      .style("color", "white")
      .style("padding", "0.2em")
      .style("position", "absolute")

    d3.select("body")
      .append("section")
      .attr("id", "episodeContainer")
      .attr("class", "hidden")
      .style("background-color", "#282c34")
      .style("color", "white")
      .style("position", "absolute")
      
    d3.select("#episodeContainer")
      .append("img")
      .attr("class", "episodeImage")
      .on("click", removeContainer)

    d3.select("#episodeContainer")
      .append("p")
      .attr("class", "episodeTitle")

    d3.select("#episodeContainer")
      .append("p")
      .attr("class", "episodeAirdate")

    d3.select("#episodeContainer")
      .append("p")
      .attr("class", "episodeSummary")

    

    d3.selectAll("#filter").on("change", (e) => {
      const selectedValue = e.target.value;
      if (selectedValue == "alldata") {
        update(data);
        console.log(selectedValue);
      } else {
        height = 400 - margin.top - margin.bottom;
        const seasonValue = +selectedValue.split("_")[1];
        const filtered_data = data.filter((d) => d.season === seasonValue);
        update(filtered_data);
        console.log(selectedValue);
      }
    });
  });

  const mouseOver = () => {
    d3.select(".tooltip").style("opacity", 1);
  };

  const mouseMove = (d, data) => {
    const x = d.clientX;
    const y = d.clientY;

    d3.select(".tooltip") // select tooltip element
      .text(data.rating.average) // show the requested data in the element
      .style("left", x + "px") // assign the position of the  tooltip element to the cursor
      .style("top", y + "px");
  };

  const mouseOut = () => {
    d3.select(".tooltip").style("opacity", 0);
  };

  const episodeDetails = (d, data) => {
    const x = d.clientX;
    const y = d.clientY;

    d3.select("#episodeContainer") 
      .classed('hidden', false)
      .style("left", x + "px") 
      .style("top", y + "px");
    d3.select(".episodeImage")
      .attr('src', data.image.medium)
    d3.select(".episodeTitle")
      .text("S" + data.season + "E" + data.number + ": " + data.name)
    d3.select(".episodeAirdate")
      .text(data.airdate)
    d3.select(".episodeSummary")
      .text(removeTags(data.summary))
  }

  const removeTags = (item) => {
    let result = item.replaceAll('<p>', '').replaceAll('</p>', '').replace('<br>', '')
    return result
  }

  const removeContainer = () => {
    d3.select("#episodeContainer") // select tooltip element
    .attr("class", "hidden")
  }

  return (
    <svg
      ref={ref}
      style={{
        height: 800,
        width: 800,
        marginRight: "20%",
        marginLeft: "20%",
      }}
    ></svg>
  );
};
export default D3BarChart;
