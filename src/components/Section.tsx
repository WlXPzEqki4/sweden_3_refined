
import React, { useEffect, useRef } from "react";
import { SectionData } from "../data/relationData";
import { SectionContentColumn } from "./SectionContentColumn";
import { GraphVisualization } from "./GraphVisualization";

interface SectionProps {
  data: SectionData;
  isActive: boolean;
  registerSection: (id: string, element: HTMLElement) => void;
}

export const Section: React.FC<SectionProps> = ({ data, isActive, registerSection }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerSection(data.id, sectionRef.current);
    }
  }, [data.id, registerSection]);

  return (
    <section 
      id={data.id} 
      ref={sectionRef}
      className={`step ${isActive ? "active" : ""} py-16 w-full`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className={`grid grid-cols-1 ${data.graphData ? "lg:grid-cols-2" : ""} gap-12 pr-12 md:pr-16 lg:pr-20`}>
          {/* Content column */}
          <SectionContentColumn
            id={data.id}
            data={data}
            title={data.title}
            content={data.content}
            timeline={data.timeline}
            relationshipDimensions={data.relationshipDimensions}
            tabs={data.tabs}
            // keyContacts={data.keyContacts}
            isActive={isActive}
          />

          {/* Graph visualization column - only show if graphData exists */}
          {data.graphData && (
            <GraphVisualization 
              graphData={data.graphData} 
              isActive={isActive} 
            />
          )}
        </div>
      </div>
    </section>
  );
};
