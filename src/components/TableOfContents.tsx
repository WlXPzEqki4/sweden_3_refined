
import React, { useState, useEffect } from "react";
import { relationsSections } from "../data/relationData";
import { ChevronRight } from "lucide-react";

export const TableOfContents: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Add event listener to close sidebar on smaller screens when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("toc-sidebar");
      const button = document.getElementById("toc-toggle");
      
      if (
        sidebar && 
        button && 
        !sidebar.contains(event.target as Node) && 
        !button.contains(event.target as Node) &&
        isOpen &&
        window.innerWidth < 768
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Tab button - smaller and taller */}
      <button
        id="toc-toggle"
        onClick={toggleSidebar}
        className={`fixed top-24 left-0 z-50 flex items-center p-3 h-12 rounded-r-lg transition-all duration-300 bg-sand-light/95 border border-l-0 border-gray-200 shadow-sm ${
          isOpen ? "translate-x-[280px]" : "translate-x-0"
        }`}
        aria-label={isOpen ? "Close table of contents" : "Open table of contents"}
      >
        <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`} />
      </button>

      {/* Sidebar content - with auto height and rounded corners */}
      <div
        id="toc-sidebar"
        className={`fixed top-24 left-0 max-h-[80vh] w-[280px] bg-sand-light/95 border-r border-gray-200 shadow-md transition-transform duration-300 rounded-br-lg ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ height: 'auto' }}
      >
        <div className="px-4 py-6">
          <h3 className="text-lg font-display font-semibold mb-4 text-navy-dark">
            Table of Contents
          </h3>
          <ul className="space-y-2">
            {relationsSections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => {
                    scrollToSection(section.id);
                    if (window.innerWidth < 768) {
                      setIsOpen(false);
                    }
                  }}
                  className="w-full text-left py-2 px-3 rounded-md hover:bg-sand-dark/20 transition-colors text-sm"
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
