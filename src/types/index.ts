
// Network graph types
export interface NetworkNode {
  id: string;
  label: string;
  group: "uae" | "sweden" | "neutral";
  size: number;
}

export interface NetworkLink {
  source: string;
  target: string;
  value: number;
  dashed?: boolean;
}

// Timeline event type
export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "positive" | "negative" | "neutral";
}

// Relationship dimension type
export interface RelationshipDimension {
  name: string;
  value: number;
  description: string;
}

// Tab content type
export interface TabData {
  id: string;
  label: string;
  content: any[];
  keyContacts?: KeyContact[];   // <— Add this line
}

// Key contact type
export interface KeyContact {
  name: string;
  title: string;
  description: string;
  influence: "high" | "medium" | "low";
  imageUrl?: string;
  pdfLink?: string; // <-- add this optional field
  highlightedNote?: string; // <-- add this new optional field
}

// Intersection Observer types
export interface IntersectionOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

// Section reference for scrolling
export interface SectionRef {
  id: string;
  element: HTMLElement;
}
