
import React from "react";

export interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  type: "positive" | "negative" | "neutral";
}

export const TimelineEvent: React.FC<TimelineEventProps> = ({ 
  year, 
  title, 
  description,
  type
}) => {
  const getBgColor = () => {
    switch(type) {
      case "positive": return "bg-green-100 border-green-400";
      case "negative": return "bg-red-100 border-red-400";
      case "neutral": return "bg-blue-100 border-blue-400";
      default: return "bg-gray-100 border-gray-400";
    }
  };
  
  return (
    <div className="timeline-event relative pl-8 pb-8">
      <div className={`absolute left-0 top-0 h-full w-0.5 bg-gray-200`}></div>
      <div className={`absolute left-[-6px] top-0 h-4 w-4 rounded-full ${type === "positive" ? "bg-green-400" : type === "negative" ? "bg-red-400" : "bg-blue-400"}`}></div>
      <div className={`rounded-lg border p-4 ${getBgColor()} transition-all duration-300 hover:shadow-md`}>
        <div className="text-sm font-medium text-gray-500">{year}</div>
        <h3 className="font-display text-lg font-medium mb-2">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};
