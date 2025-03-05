
import React from "react";
import { NetworkGraph } from "./NetworkGraph";

interface GraphVisualizationProps {
  graphData: any;
  isActive: boolean;
}

export const GraphVisualization: React.FC<GraphVisualizationProps> = ({ 
  graphData, 
  isActive 
}) => {
  if (!graphData) return null;
  
  return (
    <div 
      className="transition-all duration-700 ease-in-out delay-300"
      style={{
        opacity: isActive ? 1 : 0.05,
        transform: isActive ? 'scale(1)' : 'scale(0.95)'
      }}
    >
      <div className="sticky-top pt-8">
        <NetworkGraph data={graphData} isActive={isActive} />
      </div>
    </div>
  );
};
