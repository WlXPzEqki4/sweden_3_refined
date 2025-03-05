
import React from "react";
import { ContentBlock as ContentBlockType } from "../data/relationData";

interface ContentBlockProps {
  block: ContentBlockType;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({ block }) => {
  switch (block.type) {
    case "paragraph":
      return <p>{block.content}</p>;



      case "paragraph_html":
        return (
          <p
            dangerouslySetInnerHTML={{ __html: block.content }}
          />
        );
      

    case "heading":
      return <h2 className="text-2xl font-display font-semibold mt-6 mb-4">{block.content}</h2>;

    case "subheading":
      return <h3 className="text-xl font-display font-medium mt-5 mb-3 text-navy">{block.content}</h3>;

    case "list":
      return (
        <div className="my-4">
          <p className="font-medium">{block.content}</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            {block.items?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );

    case "image":
      return (
        <figure className="feature-image my-6">
          <img 
            src={block.imageUrl || "/placeholder.svg"} 
            alt={block.imageCaption || ""}
            className="w-full h-auto"
          />
          {block.imageCaption && (
            <figcaption className="text-sm text-gray-500 mt-2 italic">
              {block.imageCaption}
            </figcaption>
          )}
        </figure>
      );

    case "quote":
      return (
        <blockquote className="border-l-4 border-sweden pl-4 italic my-6">
          <p className="text-lg">{block.content}</p>
          {block.author && (
            <footer className="text-sm text-gray-600 mt-2">— {block.author}</footer>
          )}
        </blockquote>
      );

    default:
      return null;
  }
};
