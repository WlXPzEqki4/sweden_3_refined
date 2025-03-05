// import React, { useState } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ContentBlock } from "./ContentBlock";
// import { ContentBlock as ContentBlockType } from "../data/relationData";
// import { KeyContact } from "../types";

// // 1) Import the KeyContactCard component you already have:
// import { KeyContactCard } from "./KeyContactCard"; 

// export interface TabData {
//   id: string;
//   label: string;
//   content: ContentBlockType[];
//   keyContacts?: KeyContact[]; // if a tab has them
// }

// interface TabContentProps {
//   tabs: TabData[];
//   isActive: boolean;
// }

// export const TabContent: React.FC<TabContentProps> = ({ tabs, isActive }) => {
//   const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");
  
//   return (
//     <div 
//       className="tab-content my-8 transition-all duration-700 ease-in-out"
//       style={{
//         opacity: isActive ? 1 : 0.1,
//         transform: isActive ? 'translateY(0)' : 'translateY(20px)'
//       }}
//     >
//       <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//         <TabsList className="w-full justify-start overflow-x-auto">
//           {tabs.map(tab => (
//             <TabsTrigger 
//               key={tab.id} 
//               value={tab.id}
//               className="font-display text-sm"
//             >
//               {tab.label}
//             </TabsTrigger>
//           ))}
//         </TabsList>
        
//         {tabs.map(tab => (
//           <TabsContent key={tab.id} value={tab.id} className="mt-6">
//             {/* Render the paragraph/list/etc. blocks for this tab */}
//             <div className="prose-content">
//               {tab.content.map((block, index) => (
//                 <ContentBlock key={`${tab.id}-block-${index}`} block={block} />
//               ))}
//             </div>

//             {/* 2) Render the KeyContact cards, if any, via your KeyContactCard component */}
//             {tab.keyContacts && tab.keyContacts.length > 0 && (
//               <div className="mt-6 space-y-4">
//                 {tab.keyContacts.map(contact => (
//                   <KeyContactCard key={contact.name} contact={contact} />
//                 ))}
//               </div>
//             )}
//           </TabsContent>
//         ))}
//       </Tabs>
//     </div>
//   );
// };







import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContentBlock } from "./ContentBlock";
import { ContentBlock as ContentBlockType } from "../data/relationData";
import { KeyContact } from "../types";

// Import your existing KeyContactsSection:
import { KeyContactsSection } from "./KeyContactsSection";

export interface TabData {
  id: string;
  label: string;
  content: ContentBlockType[];
  keyContacts?: KeyContact[];
}

interface TabContentProps {
  tabs: TabData[];
  isActive: boolean;
}

export const TabContent: React.FC<TabContentProps> = ({ tabs, isActive }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  return (
    <div
      className="tab-content my-8 transition-all duration-700 ease-in-out"
      style={{
        opacity: isActive ? 1 : 0.1,
        transform: isActive ? "translateY(0)" : "translateY(20px)"
      }}
    >
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full justify-start overflow-x-auto">
          {tabs.map(tab => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="font-display text-sm"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map(tab => (
          <TabsContent key={tab.id} value={tab.id} className="mt-6">
            {/* 1) Render paragraphs/headings/lists */}
            <div className="prose-content">
              {tab.content.map((block, index) => (
                <ContentBlock key={`${tab.id}-block-${index}`} block={block} />
              ))}
            </div>

            {/* 2) Instead of mapping contacts directly, call your KeyContactsSection */}
            {tab.keyContacts && tab.keyContacts.length > 0 && (
              <KeyContactsSection
                contacts={tab.keyContacts}
                sectionId="key-contacts"
                activeTabId={tab.id}
                isActive={isActive}
              />
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};





























// import React, { useState } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ContentBlock } from "./ContentBlock";
// import { ContentBlock as ContentBlockType } from "../data/relationData";
// import { KeyContact } from "../types";

// /**
//  * Our per-tab data structure, including optional keyContacts.
//  */
// export interface TabData {
//   id: string;
//   label: string;
//   content: ContentBlockType[];
//   keyContacts?: KeyContact[];
// }

// /**
//  * Props for the TabContent component, which receives an
//  * array of tab data plus a boolean indicating if it's active.
//  */
// interface TabContentProps {
//   tabs: TabData[];
//   isActive: boolean;
// }

// /**
//  * Render each contact's info inline, using the fields
//  * from KeyContact: name, title, description, imageUrl, influence, etc.
//  */
// function InlineContactCard(contact: KeyContact) {
//   return (
//     <div className="mb-4 p-4 border border-gray-300 rounded">
//       {/* Name (e.g. "Hanna Stjärne") */}
//       <h4 className="text-lg font-semibold">{contact.name}</h4>

//       {/* Title (e.g. "CEO of Sveriges Television (SVT)") */}
//       <p className="text-sm italic">{contact.title}</p>

//       {/* Influence (e.g. "high" / "medium" / "low") */}
//       <p className="text-xs text-gray-600 mt-1">Influence: {contact.influence}</p>

//       {/* Description */}
//       {contact.description && (
//         <p className="mt-2 text-sm leading-relaxed">{contact.description}</p>
//       )}

//       {/* Optional image */}
//       {contact.imageUrl && (
//         <img
//           src={contact.imageUrl}
//           alt={contact.name}
//           className="mt-3 max-w-sm border border-gray-200 rounded"
//         />
//       )}
//     </div>
//   );
// }

// /**
//  * TabContent renders a set of tabs, each potentially containing:
//  * - An array of content blocks (paragraphs, headings, etc.)
//  * - An optional array of keyContacts to display inline
//  */
// export const TabContent: React.FC<TabContentProps> = ({ tabs, isActive }) => {
//   // The active tab ID starts as the first tab’s ID (if any)
//   const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

//   return (
//     <div
//       className="tab-content my-8 transition-all duration-700 ease-in-out"
//       style={{
//         opacity: isActive ? 1 : 0.1,
//         transform: isActive ? "translateY(0)" : "translateY(20px)"
//       }}
//     >
//       <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//         {/* Render the list of tab triggers (labels) */}
//         <TabsList className="w-full justify-start overflow-x-auto">
//           {tabs.map(tab => (
//             <TabsTrigger
//               key={tab.id}
//               value={tab.id}
//               className="font-display text-sm"
//             >
//               {tab.label}
//             </TabsTrigger>
//           ))}
//         </TabsList>

//         {/* Render the content for each tab */}
//         {tabs.map(tab => (
//           <TabsContent key={tab.id} value={tab.id} className="mt-6">
//             {/* 1) First, show the tab’s paragraphs/lists/etc. */}
//             <div className="prose-content">
//               {tab.content.map((block, index) => (
//                 <ContentBlock key={`${tab.id}-block-${index}`} block={block} />
//               ))}
//             </div>

//             {/* 2) If this tab has keyContacts, display them below */}
//             {tab.keyContacts && tab.keyContacts.length > 0 && (
//               <div className="mt-6">
//                 {tab.keyContacts.map((contact, i) => (
//                   <InlineContactCard key={`${contact.name}-${i}`} {...contact} />
//                 ))}
//               </div>
//             )}
//           </TabsContent>
//         ))}
//       </Tabs>
//     </div>
//   );
// };























// import React, { useState } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ContentBlock } from "./ContentBlock";
// import { ContentBlock as ContentBlockType } from "../data/relationData";
// import { KeyContact } from "../types";

// /** 
//  * Our per-tab data structure, including optional keyContacts.
//  */
// export interface TabData {
//   id: string;
//   label: string;
//   content: ContentBlockType[];
//   keyContacts?: KeyContact[];
// }

// /** 
//  * Main props for the TabContent component.
//  */
// interface TabContentProps {
//   tabs: TabData[];
//   isActive: boolean;
// }

// /**
//  * ContactCard: a smaller, clickable card that toggles expanded content.
//  */
// function ContactCard({ contact }: { contact: KeyContact }) {
//   const [expanded, setExpanded] = useState(false);

//   // A simple onClick toggle
//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div 
//       className="border border-gray-300 rounded-md p-4 mb-4 transition-colors cursor-pointer hover:bg-gray-50"
//       onClick={handleToggle}
//     >
//       {/* Always visible (collapsed or expanded) */}
//       <h4 className="font-semibold text-base mb-1">{contact.name}</h4>
//       <p className="text-sm italic mb-1">{contact.title}</p>
//       <p className="text-xs text-gray-600 mb-1">Influence: {contact.influence}</p>

//       {!expanded && (
//         <p className="text-xs text-blue-500">Click to expand</p>
//       )}

//       {/* Shown only when expanded */}
//       {expanded && (
//         <div className="mt-3">
//           {contact.description && (
//             <p className="text-sm mb-2">{contact.description}</p>
//           )}
//           {contact.imageUrl && (
//             <img 
//               src={contact.imageUrl} 
//               alt={contact.name} 
//               className="max-w-[200px] rounded border border-gray-200"
//             />
//           )}
//           <p className="text-xs text-blue-500 mt-2">Click to collapse</p>
//         </div>
//       )}
//     </div>
//   );
// }

// /**
//  * TabContent component:
//  * Renders each tab’s content blocks and an optional list of keyContacts
//  * in a smaller, clickable card style (ContactCard).
//  */
// export const TabContent: React.FC<TabContentProps> = ({ tabs, isActive }) => {
//   const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

//   return (
//     <div
//       className="tab-content my-8 transition-all duration-700 ease-in-out"
//       style={{
//         opacity: isActive ? 1 : 0.1,
//         transform: isActive ? "translateY(0)" : "translateY(20px)"
//       }}
//     >
//       <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//         {/* Tab labels */}
//         <TabsList className="w-full justify-start overflow-x-auto">
//           {tabs.map(tab => (
//             <TabsTrigger 
//               key={tab.id} 
//               value={tab.id}
//               className="font-display text-sm"
//             >
//               {tab.label}
//             </TabsTrigger>
//           ))}
//         </TabsList>

//         {/* Tab bodies */}
//         {tabs.map(tab => (
//           <TabsContent key={tab.id} value={tab.id} className="mt-6">
//             {/* 1) Render paragraphs/headings/lists (tab.content) */}
//             <div className="prose-content">
//               {tab.content.map((block, index) => (
//                 <ContentBlock key={`${tab.id}-block-${index}`} block={block} />
//               ))}
//             </div>

//             {/* 2) If there are tab-level keyContacts, render them with smaller “card” styling */}
//             {tab.keyContacts && tab.keyContacts.length > 0 && (
//               <div className="mt-6">
//                 {tab.keyContacts.map(contact => (
//                   <ContactCard key={contact.name} contact={contact} />
//                 ))}
//               </div>
//             )}
//           </TabsContent>
//         ))}
//       </Tabs>
//     </div>
//   );
// };
