
import React from "react";
import { TimelineEvent, TimelineEventProps } from "./TimelineEvent";

interface DiplomaticTimelineProps {
  events: TimelineEventProps[];
  isActive: boolean;
}

export const DiplomaticTimeline: React.FC<DiplomaticTimelineProps> = ({ events, isActive }) => {
  return (
    <div 
      className="diplomatic-timeline my-8 transition-all duration-700 ease-in-out"
      style={{
        opacity: isActive ? 1 : 0.1,
        transform: isActive ? 'translateY(0)' : 'translateY(20px)'
      }}
    >
      <h3 className="text-xl font-display font-medium mb-6 text-navy">Key Diplomatic Events</h3>
      <div className="timeline-events">
        {events.map((event, index) => (
          <TimelineEvent 
            key={`timeline-event-${index}`} 
            year={event.year} 
            title={event.title} 
            description={event.description} 
            type={event.type} 
          />
        ))}
      </div>
    </div>
  );
};
