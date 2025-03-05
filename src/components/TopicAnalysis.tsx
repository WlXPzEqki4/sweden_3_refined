import React, { useState } from 'react';

const UAESwedenAnalysis = () => {
  const [activeView, setActiveView] = useState('overview');
  
  // Topic data
  const topicData = {
    "Diplomacy": {
      count: 32,
      description: "Diplomatic relations between UAE and Sweden, including ambassadorial appointments, official statements, and formal agreements.",
      subtopics: [
        { name: "Extradition & Legal Cooperation" },
        { name: "Ambassadorial Relations" },
        { name: "Official Statements" }
      ]
    },
    "Defense": {
      count: 28,
      description: "Military and defense cooperation, including joint systems development and security partnerships.",
      subtopics: [
        { name: "Defense Systems" },
        { name: "Military Technology" }
      ]
    },
    "Security": {
      count: 24,
      description: "Security incidents, responses, and cooperation on security matters including infrastructure protection.",
      subtopics: [
        { name: "School Shooting" },
        { name: "Infrastructure Security" },
        { name: "Other Security Incidents" }
      ]
    },
    "Health": {
      count: 18,
      description: "Health-related issues affecting both countries, particularly infectious disease concerns and travel implications.",
      subtopics: [
        { name: "Mpox Outbreak" },
        { name: "Travel Health" }
      ]
    },
    "Tourism": {
      count: 15,
      description: "Tourism initiatives, travel between the countries, and promotional activities.",
      subtopics: [
        { name: "Ajman Tourism" },
        { name: "Travel Advisories" }
      ]
    },
    "Technology": {
      count: 12,
      description: "Technology cooperation and innovation between UAE and Sweden, particularly in transportation and defense.",
      subtopics: [
        { name: "Transportation Tech" },
        { name: "Defense Technology" }
      ]
    },
    "Business": {
      count: 10,
      description: "Business partnerships, investments, and economic cooperation between UAE and Sweden.",
      subtopics: [
        { name: "Corporate Partnerships" },
        { name: "Talent Recruitment" }
      ]
    }
  };
  
  // Timeline events
  const timelineEvents = [
    {
      date: "November 28, 2024",
      title: "UAE and Sweden Sign Extradition Agreements",
      description: "The UAE and Sweden signed two agreements to foster cooperation in the extradition of criminals and mutual legal assistance. The agreements were signed by UAE Minister of Justice Abdullah Sultan bin Awad Al Nuaimi and Swedish Minister for Justice Gunnar Strömmer in Abu Dhabi.",
      source: "Dubai Eye 103.8",
      category: "Diplomacy",
      alignment: "left",
      color: "bg-blue-100 border-blue-400"
    },
    {
      date: "December 2, 2024",
      title: "Ajman Tourism Targets Scandinavia",
      description: "The Ajman Tourism Development Department embarked on a strategic promotional tour across Scandinavian nations, including Sweden. The initiative, running until December 7, 2025, aims to position Ajman as a premier travel destination by highlighting its unique offerings and fostering partnerships.",
      source: "Travel And Tour World",
      category: "Tourism",
      alignment: "right",
      color: "bg-purple-100 border-purple-400"
    },
    {
      date: "January 29, 2025",
      title: "UAE Ambassador to Sweden Sworn In",
      description: "Ghasaq Yousif Abdullah Shaheen, the newly appointed UAE Ambassador to Sweden, was sworn in before UAE President Mohamed bin Zayed Al Nahyan at Qasr Al Bahr in Abu Dhabi. The President encouraged her to work diligently to strengthen UAE-Sweden relations at all levels.",
      source: "The Tribune",
      category: "Diplomacy",
      alignment: "left",
      color: "bg-blue-100 border-blue-400"
    },
    {
      date: "February 3, 2025",
      title: "Sweden Rules Out Sabotage in Baltic Sea Cable Damage",
      description: "Swedish prosecutors ruled out sabotage in the case of a damaged undersea cable and released a Bulgarian ship seized in connection with the incident, determining the damage was accidental. The incident was one of several involving damage to cables and other infrastructure in the Baltic Sea.",
      source: "The Moscow Times",
      category: "Security",
      alignment: "right",
      color: "bg-gray-100 border-gray-400"
    },
    {
      date: "February 4, 2025",
      title: "School Shooting in Sweden",
      description: "Around 10 people were killed in a shooting at an adult education center in Orebro, Sweden. The suspected assailant was also killed. This became Sweden's deadliest mass shooting incident.",
      source: "Khaleej Times",
      category: "Incident",
      alignment: "left",
      color: "bg-orange-100 border-orange-400"
    },
    {
      date: "February 7, 2025",
      title: "UAE Condemns School Shooting in Sweden",
      description: "The UAE strongly condemned the shooting at an adult education center in Sweden that killed 11 people, expressing solidarity with the victims' families. In a statement, the Emirati Ministry of Foreign Affairs said it permanently rejects 'all forms of violence that aim to destabilize security and stability.'",
      source: "Dubai Eye 103.8",
      category: "Diplomacy",
      alignment: "right",
      color: "bg-blue-100 border-blue-400"
    },
    {
      date: "February 19, 2025",
      title: "Mpox Cases Detected in UAE, Sweden, and Other Countries",
      description: "The UAE confirmed its first case of clade Ib mpox, a highly contagious strain. Similar cases were reported in other countries including Belgium, Canada, France, Germany, Sweden, and the USA. Health authorities urged travelers to the UAE to take extra precautions.",
      source: "Travel And Tour World",
      category: "Health",
      alignment: "left",
      color: "bg-red-100 border-red-400"
    },
    {
      date: "February 21, 2025",
      title: "Sweden and UAE Increase Defence Cooperation",
      description: "Sweden and the UAE increased defense cooperation with jointly produced systems. The partnership focuses on countering drone and missile attacks as high-intensity warfare returns to global theaters. Swedish defense company Saab also unveiled the DeployNet 5G communications system.",
      source: "The National",
      category: "Defense",
      alignment: "right",
      color: "bg-green-100 border-green-400"
    }
  ];
  
  // Color based on topic
  const getTopicColor = (topic) => {
    const colors = {
      "Diplomacy": "bg-blue-100 border-l-4 border-blue-500",
      "Defense": "bg-green-100 border-l-4 border-green-500",
      "Security": "bg-orange-100 border-l-4 border-orange-500",
      "Health": "bg-red-100 border-l-4 border-red-500",
      "Tourism": "bg-purple-100 border-l-4 border-purple-500",
      "Technology": "bg-teal-100 border-l-4 border-teal-500",
      "Business": "bg-pink-100 border-l-4 border-pink-500"
    };
    return colors[topic] || "bg-gray-100 border-gray-500";
  };
  
  // Render overview
  const renderOverview = () => (
    <div className="space-y-4">
      {Object.keys(topicData).map(topic => (
        <div 
          key={topic}
          className={`p-4 rounded-lg shadow ${getTopicColor(topic)}`}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg text-gray-800">{topic}</h3>
            <span className="bg-white px-3 py-1 rounded-full text-lg font-bold text-blue-600 shadow-sm">
              {topicData[topic].count}
            </span>
          </div>
          <p className="text-gray-700 my-2">{topicData[topic].description}</p>
          <div>
            <p className="font-medium text-gray-700">Top Subtopics:</p>
            <ul className="list-disc ml-5 mt-1">
              {topicData[topic].subtopics.slice(0, 2).map((subtopic, idx) => (
                <li key={idx} className="text-gray-700">{subtopic.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
  
  // Render timeline
  const renderTimeline = () => (
    <div className="relative">
      {/* Timeline center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>
      
      {timelineEvents.map((event, index) => (
        <div key={index} className={`flex items-center mb-16 ${event.alignment === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
          {/* Timeline content */}
          <div className={`w-5/12 ${event.alignment === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
            <div className={`p-4 rounded-lg border-l-4 shadow-md ${event.color}`}>
              <h3 className="font-bold text-lg">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{event.date}</p>
              <p className="mb-2">{event.description}</p>
              <p className="text-xs text-gray-500">Source: {event.source}</p>
              <span className="inline-block mt-2 px-2 py-1 bg-white rounded-full text-xs border border-gray-200">
                {event.category}
              </span>
            </div>
          </div>
          
          {/* Center circle */}
          <div className="w-2/12 flex justify-center">
            <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow"></div>
          </div>
          
          {/* Empty space for alternating layout */}
          <div className="w-5/12"></div>
        </div>
      ))}
    </div>
  );

  return (
    // <div className="max-w-4xl mx-auto p-4" >
    <div className="flex flex-col items-center p-8">
      {/* <h1 className="text-3xl font-bold mb-2 text-center">UAE-Sweden Relations Topic Analysis</h1> */}
      <h2 className="text-2xl font-bold mb-4 font-display text-navy-dark">UAE-Sweden Relations Topic Analysis</h2>
      <p className="text-center text-gray-600 mb-6">Interactive analysis of topics from news articles about UAE-Sweden relations</p>
      
      <div className="mb-8 flex justify-center gap-4">
        <button 
          onClick={() => setActiveView('overview')} 
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeView === 'overview' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Topic Overview
        </button>
        <button 
          onClick={() => setActiveView('timeline')} 
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeView === 'timeline' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
        >
          Timeline
        </button>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {activeView === 'overview' && renderOverview()}
        {activeView === 'timeline' && renderTimeline()}
      </div>
    </div>
  );
};

export default UAESwedenAnalysis;

