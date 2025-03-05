
import React from "react";
import { SectionData } from "../data/relationData";

interface SectionIndicatorProps {
  sections: SectionData[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export const SectionIndicator: React.FC<SectionIndicatorProps> = ({
  sections,
  activeSection,
  onSectionClick,
}) => {
  return (
    <div className="section-indicator fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-40">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`indicator-dot ${
            activeSection === section.id ? "active" : ""
          }`}
          onClick={() => onSectionClick(section.id)}
          title={section.title}
        />
      ))}
    </div>
  );
};
