
import React, { useState, useEffect } from "react";
import ScrollyContainer from "../components/ScrollyContainer";
import { Header } from "../components/Header";
import { IntroSection } from "../components/IntroSection";
import { TableOfContents } from "../components/TableOfContents";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Listen for changes in the sidebar's state
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const sidebar = document.getElementById('toc-sidebar');
          if (sidebar) {
            const isOpen = !sidebar.classList.contains('-translate-x-full');
            setSidebarOpen(isOpen);
          }
        }
      });
    });

    const sidebar = document.getElementById('toc-sidebar');
    if (sidebar) {
      observer.observe(sidebar, { attributes: true });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full">
      <Header />
      <TableOfContents />
      <main className={`w-full transition-all duration-300 ${sidebarOpen ? 'md:pl-[280px]' : 'pl-0'}`}>
        <IntroSection />
        <ScrollyContainer />
      </main>
      <footer className={`bg-navy-dark text-white py-12 mt-20 w-full transition-all duration-300 ${sidebarOpen ? 'md:pl-[280px]' : 'pl-0'}`}>
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">UAE-Sweden Relations</h3>
              <p className="text-sm text-gray-300">
                An interactive analysis of diplomatic, economic, and strategic ties between 
                the United Arab Emirates and Sweden from 2019 to 2024.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Sections</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#political-diplomatic" className="hover:text-white transition-colors">Political & Diplomatic Ties</a></li>
                <li><a href="#economic-trade" className="hover:text-white transition-colors">Economic Relations</a></li>
                <li><a href="#cooperation" className="hover:text-white transition-colors">Areas of Cooperation</a></li>
                <li><a href="#tensions" className="hover:text-white transition-colors">Points of Tension</a></li>
                <li><a href="#sweden-mb" className="hover:text-white transition-colors">Sweden's Key Positions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-sm text-gray-300">
                This interactive analysis provides a comprehensive overview of the 
                multifaceted relationship between the UAE and Sweden, including key 
                stakeholders, points of alignment, and areas for future cooperation.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 UAE-Sweden Relations Analysis</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
