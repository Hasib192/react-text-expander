import { useState } from "react";

const TextExpander = ({ displayText, collapseNumeberWords }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClickChange = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>{isExpanded ? displayText : displayText.split(" ").slice(0, collapseNumeberWords).join(" ") + " ..."}</p>
      <button type="button" className="btn" onClick={handleClickChange}>
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default TextExpander;
