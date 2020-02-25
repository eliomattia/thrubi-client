import request from "request";
import {select} from "d3-selection";
import {scaleLinear,scaleLog} from "d3-scale";
import {min,max} from "d3-array";
import {axisLeft,axisBottom,axisRight,axisTop} from "d3-axis";

export const d3plot = () => async (dispatch,getState) => {
    const memberdata = this.chartpickerService.members;
    const svgchart = select("#svgchart");

    const render = data => {

        const title = "Wealth distribution";
        const xAxisLabel = "Money";
        const yAxisLabel = "Cumulative distribution";
        const circleRadius = 2;

        const svg = select("#svgchart");
        const width = +svg.attr("width");
        const height = +svg.attr("height");

        const margin = {top:15,right:25,bottom:45,left:65};
        const innerWidth = width-margin.left-margin.right;
        const innerHeight = height-margin.top-margin.bottom;

        const xValue = d => d.m;
        const minxValue = +min(data,xValue);
        const maxxValue = +max(data,xValue);
        const xScale = scaleLinear()
            .domain([minxValue,maxxValue])
            .rangeRound([margin.left,margin.left+innerWidth])
            .nice();

        const yValue = d => d.memberid;
        const minyValue = +min(data,yValue);
        const maxyValue = +max(data,yValue);
        const yScale = scaleLog()
            .domain([minyValue,maxyValue])
            .rangeRound([margin.top+innerHeight,margin.top])
            .nice();

        // main viewport
        const g = svg.append("g")
            .attr("width",innerWidth)
            .attr("height",innerHeight);

        // x axis
        const xAxis = axisBottom(xScale)
            .tickSize(innerHeight)
            .tickPadding(10);
        // x axis labels
        const xAxisG = g.append("g").call(xAxis)
            .attr("transform",`translate(0,${margin.top})`)
            .attr("stroke","#0F7365");
        xAxisG.select(".domain").remove();
        xAxisG.selectAll("line")
            .attr("stroke","#0F7365");
        xAxisG.append("text")
            .attr("class","axis-label")
            .attr("y",innerHeight+margin.top+15)
            .attr("x",margin.left+(innerWidth/2))
            .attr("stroke","#333")
            .text(xAxisLabel);

        // y axis
        const yAxis = axisLeft(yScale)
            .tickSize(innerWidth)
            .tickPadding(5);
        // y axis labels
        const yAxisG = g.append("g").call(yAxis)
            .attr("transform",`translate(${innerWidth+margin.left},0)`)
            .attr("class","tick")
            .attr("stroke","#0F7365");
        yAxisG.selectAll(".domain").remove();
        yAxisG.selectAll("line")
            .attr("stroke","#0F7365");
        yAxisG.append("text")
            .attr("class","axis-label")
            .attr("y",-(innerWidth+margin.left-15))
            .attr("x",-innerHeight/2)
            .attr("text-anchor","middle")
            .attr("transform",`rotate(-90)`)
            .attr("stroke","#333")
            .text(yAxisLabel);

        // scatter data
        g.selectAll("circle").data(data)
            .enter().append("circle")
            .attr("cy",d => yScale(yValue(d)))
            .attr("cx",d => xScale(xValue(d)))
            .attr("r",circleRadius)
            .attr("stroke","#333");

        /*
        g.append("text")
          .attr("class", "title")
          .attr("x", 0)
          .attr("y", 0)
          .text(title);
        */
    };

    render(
        memberdata
    );
};
    