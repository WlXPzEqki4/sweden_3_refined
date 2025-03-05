
import React from "react";
import { KeyContact } from "../types";
import { KeyContactCard } from "./KeyContactCard";
import { getContactsByCategory } from "../utils/contactUtils";

interface KeyContactsSectionProps {
  contacts: KeyContact[];
  sectionId: string;
  activeTabId?: string;
  isActive: boolean;
}

export const KeyContactsSection: React.FC<KeyContactsSectionProps> = ({ 
  contacts, 
  sectionId, 
  activeTabId,
  isActive 
}) => {
  if (!contacts || contacts.length === 0) {
    return null;
  }

  // If we're on the media tab, only show media contacts
  if (sectionId === "key-contacts" && activeTabId === "media") {
    return (
      <div className="mt-8">
        <h3 className="text-xl font-display font-medium mb-4 text-navy">Key Contacts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contacts
            .filter(contact => ["Hanna Stjärne", "Peter Wolodarski", "Jan Helin", "Cecilia Uddén"].includes(contact.name))
            .map((contact, index) => (
              <KeyContactCard key={`contact-${index}`} contact={contact} />
            ))}
        </div>
      </div>
    );
  }

  // If we're on the individuals tab, show contacts by category
  if (sectionId === "key-contacts" && activeTabId === "individuals") {
    const groupedContacts = getContactsByCategory(contacts);
    
    return (
      <div className="mt-8">
        <h3 className="text-xl font-display font-medium mb-4 text-navy">Key Contacts</h3>
        <div className="space-y-8">
          {Object.entries(groupedContacts).map(([category, categoryContacts]) => {
            // Skip media contacts on the individuals tab
            if (category === "Media") return null;
            
            return (
              <div key={category} className="mt-6">
                <h4 className="text-lg font-display font-medium mb-4 text-navy-dark border-b pb-2">{category}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categoryContacts.map((contact, index) => (
                    <KeyContactCard key={`${category}-contact-${index}`} contact={contact} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // For other sections, show grouped contacts by category
  const groupedContacts = getContactsByCategory(contacts);
  
  return (
    <div className="mt-8">
      <h3 className="text-xl font-display font-medium mb-4 text-navy">Key Contacts</h3>
      <div className="space-y-8">
        {Object.entries(groupedContacts).map(([category, categoryContacts]) => (
          <div key={category} className="mt-6">
            <h4 className="text-lg font-display font-medium mb-4 text-navy-dark border-b pb-2">{category}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categoryContacts.map((contact, index) => (
                <KeyContactCard key={`${category}-contact-${index}`} contact={contact} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
