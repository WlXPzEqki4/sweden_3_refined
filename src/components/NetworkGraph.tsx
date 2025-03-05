import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { NetworkNode, NetworkLink } from "../types";

interface NetworkGraphProps {
  data: {
    nodes: NetworkNode[];
    links: NetworkLink[];
  };
  isActive: boolean;
}

export const NetworkGraph: React.FC<NetworkGraphProps> = ({ data, isActive }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!data || !data.nodes || !data.links || !svgRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = 500;

    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Create the simulation
    const simulation = d3.forceSimulation(data.nodes as d3.SimulationNodeDatum[])
      .force("link", d3.forceLink(data.links).id((d: any) => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-120))
      .force("center", d3.forceCenter(width / 2, height / 2));

    // Create the SVG elements
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height]);

    // Define arrow markers for directed links
    svg.append("defs").selectAll("marker")
      .data(["end"])
      .join("marker")
      .attr("id", d => `arrow-${d}`)
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 15)
      .attr("refY", 0)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      .attr("fill", "#999")
      .attr("d", "M0,-5L10,0L0,5");

    // Add links
    const link = svg.append("g")
      .selectAll("line")
      .data(data.links)
      .join("line")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", d => d.value)
      .attr("stroke-dasharray", d => d.dashed ? "5,5" : "none");

    // Add nodes
    const node = svg.append("g")
      .selectAll("circle")
      .data(data.nodes)
      .join("circle")
      .attr("r", d => d.size || 5)
      .attr("fill", d => {
        switch (d.group) {
          case "uae":
            return "#8A1538";
          case "sweden":
            return "#006AA7";
          default:
            return "#888888";
        }
      })
      .call(drag(simulation) as any);

    // Add node labels
    const labels = svg.append("g")
      .selectAll("text")
      .data(data.nodes)
      .join("text")
      .attr("dx", 12)
      .attr("dy", ".35em")
      .text(d => d.label)
      .style("font-size", "10px")
      .style("fill", "#333");

    // Update positions on tick
    simulation.on("tick", () => {
      link
        .attr("x1", d => (d.source as any).x)
        .attr("y1", d => (d.source as any).y)
        .attr("x2", d => (d.target as any).x)
        .attr("y2", d => (d.target as any).y);

      node
        .attr("cx", d => Math.max(5, Math.min(width - 5, (d as any).x)))
        .attr("cy", d => Math.max(5, Math.min(height - 5, (d as any).y)));

      labels
        .attr("x", d => Math.max(5, Math.min(width - 5, (d as any).x)))
        .attr("y", d => Math.max(5, Math.min(height - 5, (d as any).y)));
    });

    // Reheat simulation if section is active
    if (isActive) {
      simulation.alpha(0.3).restart();
    }

    // Implementing drag behavior
    function drag(simulation: d3.Simulation<d3.SimulationNodeDatum, undefined>) {
      function dragstarted(event: any, d: any) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }
      
      function dragged(event: any, d: any) {
        d.fx = event.x;
        d.fy = event.y;
      }
      
      function dragended(event: any, d: any) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }
      
      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    // Cleanup on unmount
    return () => {
      simulation.stop();
    };
  }, [data, isActive]);

  if (!data || !data.nodes || !data.links) {
    return <div className="h-[500px] bg-gray-100 rounded flex items-center justify-center">No graph data available</div>;
  }

  return (
    <div ref={containerRef} className="network-graph-container h-[500px] border rounded shadow-sm overflow-hidden bg-white">
      <svg ref={svgRef} className="w-full h-full"></svg>
    </div>
  );
};
