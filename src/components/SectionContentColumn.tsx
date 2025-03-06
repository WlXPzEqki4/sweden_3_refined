
import React from "react";
import { ContentBlock as ContentBlockType } from "../data/relationData";
import { ContentBlock } from "./ContentBlock";
import { DiplomaticTimeline } from "./DiplomaticTimeline";
import { RelationshipMeter } from "./RelationshipMeter";
import { TabContent } from "./TabContent";
import { SectionData } from "../data/relationData";
import { KeyContactsSection } from "./KeyContactsSection";
import { KeyContact, RelationshipDimension } from "../types";
import NetworkDiagram from "./NetworkDiagram";
import TopicAnalysis from "./TopicAnalysis";
import ThematicNetworkDiagram from "./ThematicNetworkDiagram";
import MapConnection from "./MapConnection";
import PortsConnection from "./PortsConnection";
import InvestmentVisualization from "./InvestmentVisualization";



interface SectionContentColumnProps {
  id: string;
  data: SectionData;
  title: string;
  content: ContentBlockType[];
  timeline?: any[];
  relationshipDimensions?: RelationshipDimension[];
  tabs?: any[];
  keyContacts?: KeyContact[];
  isActive: boolean;
}

export const SectionContentColumn: React.FC<SectionContentColumnProps> = ({
  id,
  title,
  data,
  content,
  timeline,
  relationshipDimensions,
  tabs,
  keyContacts,
  isActive
}) => {
  // Find the active tab if tabs exist
  const activeTabId = tabs?.find(tab => tab.active)?.id;

  return (
    <div 
      className="space-y-6 transition-all duration-700 ease-in-out"
      style={{
        opacity: isActive ? 1 : 0.05,
        transform: isActive ? 'translateY(0)' : 'translateY(8px)'
      }}
    >
      <h2 className="text-3xl md:text-4xl font-display font-semibold text-navy-dark mb-6">
        {title}
      </h2>
      
      <div className="prose-content">
        {content.map((block, index) => (
          <ContentBlock key={`${id}-block-${index}`} block={block} />
        ))}
      </div>

      {/* Display timeline if available */}
      {timeline && (
        <DiplomaticTimeline events={timeline} isActive={isActive} />
      )}

      {/* Display relationship meter if available */}
      {relationshipDimensions && (
        <RelationshipMeter dimensions={relationshipDimensions} isActive={isActive} />
      )}

      {/* Display tabbed content if available */}
      {tabs && (
        <TabContent tabs={tabs} isActive={isActive} />
      )}

      {/* Display key contacts if available */}
      {keyContacts && keyContacts.length > 0 && (
        <KeyContactsSection 
          contacts={keyContacts} 
          sectionId={id} 
          activeTabId={activeTabId}
          isActive={isActive} 
        />
      )}

      {/* Interactive Visualisations - Only show in dedicated section */}
      {data.id === "interactive-visualisations" && (
          <div className="mt-6" >
            {/* <h3 className="text-xl font-display font-medium mb-4 text-navy">{data.title}</h3> */}
            <NetworkDiagram />
            <TopicAnalysis />
            <ThematicNetworkDiagram />
            <MapConnection />
            <PortsConnection />
            <InvestmentVisualization />


            

            



          </div>






        )}

    </div>
  );
};

















