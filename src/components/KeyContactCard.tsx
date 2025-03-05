
// import React, { useState } from "react";
// import { KeyContact } from "../types";

// interface KeyContactCardProps {
//   contact: KeyContact;
// }

// export const KeyContactCard: React.FC<KeyContactCardProps> = ({ contact }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const getInfluenceColor = () => {
//     switch(contact.influence) {
//       case "high": return "bg-purple-100 text-purple-800 border-purple-300";
//       case "medium": return "bg-blue-100 text-blue-800 border-blue-300";
//       case "low": return "bg-gray-100 text-gray-800 border-gray-300";
//     }
//   };

//   return (
//     <div 
//       className="key-contact-card p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
//       onClick={() => setIsExpanded(!isExpanded)}
//     >
//       <div className="flex items-start">
//         {/* Image container with hover effect - only show if imageUrl exists */}
//         {contact.imageUrl && (
//           <div className="mr-4 flex-shrink-0 relative group">
//             <div className="contact-image-container">
//               <img 
//                 src={contact.imageUrl} 
//                 alt={`Portrait of ${contact.name}`} 
//                 className="w-16 h-16 rounded-full object-cover transition-all duration-300 group-hover:rounded-lg group-hover:scale-125 group-hover:z-10 border-2 border-transparent group-hover:border-white group-hover:shadow-lg"
//               />
//             </div>
//           </div>
//         )}
        
//         <div className="flex-grow">
//           <div className="flex items-start justify-between">
//             <div>
//               <h4 className="font-display font-medium text-lg">{contact.name}</h4>
//               <p className="text-sm text-gray-600">{contact.title}</p>
//             </div>
//             <span className={`text-xs px-2 py-1 rounded-full ${getInfluenceColor()}`}>
//               {contact.influence === "high" ? "High Influence" : 
//               contact.influence === "medium" ? "Medium Influence" : "Notable"}
//             </span>
//           </div>
          
//           <div className={`mt-3 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
//             <p className="text-sm text-gray-700">{contact.description}</p>
//           </div>
          
//           <div className="text-xs text-gray-500 mt-2 text-right italic">
//             {isExpanded ? "Click to collapse" : "Click to expand"}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


















import React, { useState } from "react";
import { KeyContact } from "../types";

interface KeyContactCardProps {
  contact: KeyContact;
}

export const KeyContactCard: React.FC<KeyContactCardProps> = ({ contact }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getInfluenceColor = () => {
    switch(contact.influence) {
      case "high": return "bg-purple-100 text-purple-800 border-purple-300";
      case "medium": return "bg-blue-100 text-blue-800 border-blue-300";
      case "low": return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  return (
    <div 
      className="key-contact-card p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start">
        {/* Image container with hover effect - only show if imageUrl exists */}
        {contact.imageUrl && (
          <div className="mr-4 flex-shrink-0 relative group">
            <div className="contact-image-container">
              <img 
                src={contact.imageUrl} 
                alt={`Portrait of ${contact.name}`} 
                className="w-16 h-16 rounded-full object-cover transition-all duration-300 group-hover:rounded-lg group-hover:scale-125 group-hover:z-10 border-2 border-transparent group-hover:border-white group-hover:shadow-lg"
              />
            </div>
          </div>
        )}
        
        <div className="flex-grow">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-display font-medium text-lg">{contact.name}</h4>
              <p className="text-sm text-gray-600">{contact.title}</p>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full ${getInfluenceColor()}`}>
              {contact.influence === "high" ? "High Influence" : 
              contact.influence === "medium" ? "Medium Influence" : "Notable"}
            </span>
          </div>
          
          {/* Expandable content */}
          <div 
            className={`mt-3 overflow-hidden transition-all duration-300 ${
              isExpanded ? 'max-h-96' : 'max-h-0'
            }`}
          >
            {/* <p className="text-sm text-gray-700">
              {contact.description}
              </p> */}

            <p className="text-sm text-gray-700">
                {contact.description}
                {contact.highlightedNote && (
                  <>
                    <br />
                    <span className="font-bold text-red-800">{contact.highlightedNote}</span>
                  </>
                )}
              </p>






            {/* If a PDF link is present, show it in the expanded view */}
            {contact.pdfLink && (
              <a 
                href={contact.pdfLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-500 underline inline-block mt-2"
              >
                View PDF
              </a>
            )}
          </div>
          
          <div className="text-xs text-gray-500 mt-2 text-right italic">
            {isExpanded ? "Click to collapse" : "Click to expand"}
          </div>
        </div>
      </div>
    </div>
  );
};
