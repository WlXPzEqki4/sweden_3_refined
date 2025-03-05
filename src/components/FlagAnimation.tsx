
import React, { useEffect, useState } from "react";

const FlagAnimation: React.FC = () => {
  const [animationState, setAnimationState] = useState<"initial" | "circular">("initial");

  useEffect(() => {
    // Start with full flags, then animate to circular form after a delay
    const timer = setTimeout(() => {
      setAnimationState("circular");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center space-x-3">
      {/* UAE Flag */}
      <div 
        className={`flag-container transition-all duration-1000 ease-in-out overflow-hidden ${
          animationState === "initial" 
            ? "w-12 h-8 rounded-none" 
            : "w-8 h-8 rounded-full"
        }`}
      >
        <div className="uae-flag h-full w-full">
          <div className="flex h-full flex-col">
            <div className="bg-[#CE1126] h-1/3 w-full"></div>
            <div className="bg-white h-1/3 w-full"></div>
            <div className="bg-black h-1/3 w-full"></div>
          </div>
          <div className="absolute top-0 left-0 h-full w-1/4 bg-[#009739]"></div>
        </div>
      </div>

      {/* Sweden Flag */}
      <div 
        className={`flag-container transition-all duration-1000 ease-in-out overflow-hidden ${
          animationState === "initial" 
            ? "w-12 h-8 rounded-none" 
            : "w-8 h-8 rounded-full"
        }`}
      >
        <div className="h-full w-full bg-[#006AA7] relative">
          <div className="absolute top-0 bottom-0 left-[30%] w-[15%] bg-[#FECC00]"></div>
          <div className="absolute left-0 right-0 top-[40%] h-[20%] bg-[#FECC00]"></div>
        </div>
      </div>
    </div>
  );
};

export default FlagAnimation;
