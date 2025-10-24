import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  author?: string;
  keywords?: string;
  ogImage?: string;
}

export function SEOHead({
  title = "Sarah Mitchell - Business Analyst Portfolio",
  description = "Experienced Business Analyst specializing in data-driven insights, requirements gathering, and process optimization. Transforming business challenges into strategic solutions.",
  author = "Sarah Mitchell",
  keywords = "Business Analyst, Data Analysis, Requirements Engineering, Process Optimization, Business Intelligence, Agile, JIRA, Power BI, SQL, Tableau",
  ogImage = "https://images.unsplash.com/photo-1692133226337-55e513450a32?w=1200&h=630&fit=crop",
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string, useProperty = false) => {
      const attribute = useProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Standard meta tags
    setMetaTag("description", description);
    setMetaTag("author", author);
    setMetaTag("keywords", keywords);
    setMetaTag("viewport", "width=device-width, initial-scale=1.0");

    // Open Graph tags
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:type", "website", true);
    setMetaTag("og:image", ogImage, true);
    setMetaTag("og:url", window.location.href, true);

    // Twitter Card tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", ogImage);

    // Additional SEO tags
    setMetaTag("robots", "index, follow");
    setMetaTag("language", "English");
    setMetaTag("revisit-after", "7 days");
  }, [title, description, author, keywords, ogImage]);

  return null;
}
