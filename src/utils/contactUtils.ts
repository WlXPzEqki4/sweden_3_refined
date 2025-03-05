
import { KeyContact } from "../types";

// Function to group key contacts by category based on their names
export const getContactsByCategory = (contacts: KeyContact[]) => {
  const groupedContacts: Record<string, KeyContact[]> = {};
  
  // Group by known categories first
  

  // Government contacts
  const governmentContacts = contacts.filter(contact => 
    ["Ulf Kristersson", "Carl XVI Gustaf", "Maria Malmer Stenergard", "Benjamin Dousa"].includes(contact.name)
  );
  if (governmentContacts.length > 0) {
    groupedContacts["Government"] = governmentContacts;
  }  

  // Media contacts
  const mediaContacts = contacts.filter(contact => 
    ["Hanna Stjärne", "Peter Wolodarski", "Jan Helin", "Cecilia Uddén"].includes(contact.name)
  );
  
  if (mediaContacts.length > 0) {
    groupedContacts["Media"] = mediaContacts;
  }
  
  // Shared Humanity & Culture
  const humanityContacts = contacts.filter(contact => 
    ["Danica Kragić Jensfelt", "Antonia Ax:son Johnson"].includes(contact.name)
  );
  
  if (humanityContacts.length > 0) {
    groupedContacts["Shared Humanity & Culture"] = humanityContacts;
  }
  
  // Education & Special Projects
  const educationContacts = contacts.filter(contact => 
    ["Anders Kiessling", "Peter Värbrand"].includes(contact.name)
  );
  
  if (educationContacts.length > 0) {
    groupedContacts["Education & Special Projects"] = educationContacts;
  }
  
  // Science and Advanced Technologies
  const techContacts = contacts.filter(contact => 
    ["Fredrik Heintz", "Max Tegmark", "Sara Mazur"].includes(contact.name)
  );
  
  if (techContacts.length > 0) {
    groupedContacts["Science & Advanced Technologies"] = techContacts;
  }
  
  // Medical Affairs & Life Sciences
  const medicalContacts = contacts.filter(contact => 
    ["Laurent Leksell", "Björn Zoëga"].includes(contact.name)
  );
  
  if (medicalContacts.length > 0) {
    groupedContacts["Medical Affairs & Life Sciences"] = medicalContacts;
  }
  
  // Energy & Sustainability
  const energyContacts = contacts.filter(contact => 
    ["Anna Borg", "Anders Forslund", "Lena Sundquist", "Greta Thunberg"].includes(contact.name)
  );
  
  if (energyContacts.length > 0) {
    groupedContacts["Energy & Sustainability"] = energyContacts;
  }
  
  // Strategic Philanthropy
  const philanthropyContacts = contacts.filter(contact => 
    ["Carin Jämtin", "Niklas Zennström"].includes(contact.name)
  );
  
  if (philanthropyContacts.length > 0) {
    groupedContacts["Strategic Philanthropy"] = philanthropyContacts;
  }
  
  // Business
  const businessContacts = contacts.filter(contact => 
    ["Jacob Wallenberg", "Daniel Elk", "Sebastian Siemiatkowski", "Stefan Persson", 
     "Magnus Olsson", "Marcus Wallenberg", "Börje Ekholm"].includes(contact.name)
  );
  
  if (businessContacts.length > 0) {
    groupedContacts["Business"] = businessContacts;
  }
  
  // Handle any remaining unassigned contacts
  const assignedContactNames = [
    ...governmentContacts, ...mediaContacts, ...humanityContacts, ...educationContacts, 
    ...techContacts, ...medicalContacts, ...energyContacts, 
    ...philanthropyContacts, ...businessContacts
  ].map(c => c.name);
  
  const otherContacts = contacts.filter(
    contact => !assignedContactNames.includes(contact.name)
  );
  
  if (otherContacts.length > 0) {
    groupedContacts["Other"] = otherContacts;
  }
  
  return groupedContacts;
};








