import useD3 from "../hooks/useD3";
import React from "react";
import * as d3 from "d3";


// export function createAxis(data) { // creating the axis
//     const xscale = d3.scaleLinear().range([0, width]); // setting up the scales
//     const yscale = d3.scaleBand().rangeRound([0, height]).paddingInner(0.15);

//     const xaxis = d3.axisTop().scale(xscale); // setting up axis
//     const g_xaxis = g.append('g').attr('class', 'x axis');
//     const yaxis = d3.axisLeft().scale(yscale);
//     const g_yaxis = g.append('g').attr('class', 'y axis');

//     xscale.domain([0, d3.max(data, (d) => d.rating.average)]); // adjusting the scales to the data ! xscale could also be 0 - 10 for consistency
//     yscale.domain(data.map((d) => d.name));

//     g_xaxis.transition().call(xaxis); // show values on the axis
//     g_yaxis.transition().call(yaxis);

//     return { g_xaxis, g_yaxis, xscale, yscale }; // return the values needed to create the chart
// };

// export function createBars(data, xscale, yscale) { // creating the rects and assigning the data to them
//     const color = d3.scaleOrdinal()
//         .domain(data.length.toString()) // domain of given data
//         .range(["#ffffcc", "#a1dab4", "#41b6c4", "#2c7fb8", "#253494"]); // range of available colors
//     const rect = g.selectAll('rect') // select the rectangles
//         .data(data).join( //assign the data to the rectangles and join it
//             (enter) => {
//                 const rect_enter = enter
//                     .append('rect')
//                     .attr('x', 0) // start at 0 on the x axis
//                     .attr('fill', (d) => { return (color(d)) }); // fill the rect
//                 return rect_enter;
//             },

//             (update) => update, // updating the data (not used)

//             (exit) => exit.remove() // removing the data thats not assigned (not used)
//         );

//     rect
//         .attr('height', yscale.bandwidth())
//         .attr('y', (d) => yscale(d.name))
//         .transition() // create transition on the rendering of the width of the bar
//         .duration(600)
//         .ease(d3.easeBackOut.overshoot(1.7)) // easing with an effect
//         .attr('width', d => xscale(d.rating.average))
// };

const D3BarChart = ({data}) => {
    const ref = useD3(
		svg => {
            const margin = { top: 40, bottom: 10, left: 120, right: 120 }
	        const width = 800 - margin.left - margin.right
	        const height = 800 - margin.top - margin.bottom

            const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

            const xscale = d3.scaleLinear().range([0, width]); // setting up the scales
            const yscale = d3.scaleBand().rangeRound([0, height]).paddingInner(0.15);

            const xaxis = d3.axisTop().scale(xscale); // setting up axis
            const g_xaxis = g.append('g').attr('class', 'x axis');
            const yaxis = d3.axisLeft().scale(yscale);
            const g_yaxis = g.append('g').attr('class', 'y axis');

            xscale.domain([0, d3.max(data, (d) => d.rating.average)]); // adjusting the scales to the data ! xscale could also be 0 - 10 for consistency
            yscale.domain(data.map((d) => d.name));

            g_xaxis.transition().call(xaxis); // show values on the axis
            g_yaxis.transition().call(yaxis);

            const color = d3.scaleOrdinal()
            .domain(data.length.toString()) // domain of given data
            .range(["#ffffcc", "#a1dab4", "#41b6c4", "#2c7fb8", "#253494"]); // range of available colors
             const rect = g.selectAll('rect') // select the rectangles
            .data(data).join( //assign the data to the rectangles and join it
                (enter) => {
                    const rect_enter = enter
                        .append('rect')
                        .attr('x', 0) // start at 0 on the x axis
                        .attr('fill', (d) => { return (color(d)) }); // fill the rect
                    return rect_enter;
                },

                (update) => update, // updating the data (not used)

                (exit) => exit.remove() // removing the data thats not assigned (not used)
            );

            rect
                .attr('height', yscale.bandwidth())
                .attr('y', (d) => yscale(d.name))
                .transition() // create transition on the rendering of the width of the bar
                .duration(600)
        
            .ease(d3.easeBackOut.overshoot(1.7)) // easing with an effect
                .attr('width', d => xscale(d.rating.average))

            })

    return (
        <svg
        ref={ref}
        style={{
          height: 800,
          width: "100%",
          marginRight: "20%",
          marginLeft: "20%"
        }}
      >
        <g className="plot-area" />
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    )
}
 export default D3BarChart;
