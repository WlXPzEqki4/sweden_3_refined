
import React from "react";
import { Progress } from "@/components/ui/progress";

export interface RelationshipDimension {
  name: string;
  value: number;
  description: string;
}

interface RelationshipMeterProps {
  dimensions: RelationshipDimension[];
  isActive: boolean;
}

export const RelationshipMeter: React.FC<RelationshipMeterProps> = ({ dimensions, isActive }) => {
  return (
    <div 
      className="relationship-meter my-8 p-6 bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-700 ease-in-out"
      style={{
        opacity: isActive ? 1 : 0.1,
        transform: isActive ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <h3 className="text-xl font-display font-medium mb-4 text-navy">Relationship Strength</h3>
      <div className="space-y-5">
        {dimensions.map((dimension, index) => (
          <div key={`dimension-${index}`} className="dimension">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{dimension.name}</span>
              <span className="text-sm text-gray-500">{dimension.value}%</span>
            </div>
            <Progress 
              value={dimension.value} 
              className="h-2" 
              indicatorClassName={dimension.value > 70 ? "bg-green-500" : dimension.value > 40 ? "bg-amber-500" : "bg-red-500"} 
            />
            <p className="text-xs text-gray-600 mt-1">{dimension.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
