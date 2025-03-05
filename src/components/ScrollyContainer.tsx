
import React, { useEffect, useRef, useState } from "react";
import { Section } from "./Section";
import { SectionIndicator } from "./SectionIndicator";
import { ProgressBar } from "./ProgressBar";
import { relationsSections } from "../data/relationData";
import { SectionRef } from "../types";

const ScrollyContainer: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const [progress, setProgress] = useState<number>(0);
  const sectionRefs = useRef<SectionRef[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (scrollTop / scrollHeight) * 100;
      setProgress(currentProgress);

      // Determine active section based on viewport position
      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.6; // Trigger at 60% of viewport height
      
      // Check each section's position relative to viewport
      let newActiveSection = activeSection;
      
      for (const section of sectionRefs.current) {
        const rect = section.element.getBoundingClientRect();
        
        // If the top of the section is within the trigger point of the viewport
        if (rect.top <= triggerPoint) {
          newActiveSection = section.id;
        } else {
          // Once we find a section below the trigger point, we can stop checking
          break;
        }
      }
      
      // Only update if the active section has changed
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger initial calculation
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Register section refs
  const registerSection = (id: string, element: HTMLElement) => {
    if (!sectionRefs.current.some(section => section.id === id)) {
      sectionRefs.current.push({ id, element });
      // Sort sections by their position in the DOM
      sectionRefs.current.sort((a, b) => {
        const aRect = a.element.getBoundingClientRect();
        const bRect = b.element.getBoundingClientRect();
        return aRect.top - bRect.top;
      });
    }
  };

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs.current.find(s => s.id === sectionId);
    if (section) {
      window.scrollTo({
        top: section.element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="scrolly-container" ref={containerRef}>
      {/* Progress bar at top of screen */}
      <ProgressBar progress={progress} />
      
      {/* Section indicator dots */}
      <SectionIndicator 
        sections={relationsSections} 
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />
      
      {/* Render all sections */}
      {relationsSections.map((section) => (
        <Section
          key={section.id}
          data={section}
          isActive={activeSection === section.id}
          registerSection={registerSection}
        />
      ))}
    </div>
  );
};

export default ScrollyContainer;
