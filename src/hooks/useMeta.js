import { useEffect } from "react";

const useMeta = ({ title, description, keywords }) => {
  useEffect(() => {
    // Update page title
    document.title = `${title} | SkillSwap - Student Skill Exchange Platform`;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const newMetaDescription = document.createElement("meta");
      newMetaDescription.setAttribute("name", "description");
      newMetaDescription.setAttribute("content", description);
      document.head.appendChild(newMetaDescription);
    }

    // Update meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      } else {
        const newMetaKeywords = document.createElement("meta");
        newMetaKeywords.setAttribute("name", "keywords");
        newMetaKeywords.setAttribute("content", keywords);
        document.head.appendChild(newMetaKeywords);
      }
    }

    // Cleanup function
    return () => {
      document.title = "SkillSwap - Student Skill Exchange Platform";
    };
  }, [title, description, keywords]);
};

export default useMeta;
