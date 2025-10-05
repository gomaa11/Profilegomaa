import React, { useState } from 'react';

const ProjectDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div
        className={`description ${isExpanded ? 'expanded' : ''}`}
        onClick={toggleText}
      >
        {description.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <button onClick={toggleText} className='py-2 text-secondary-700 text-lg'>
        {isExpanded ? 'Show Less...' : 'Show More...'}
      </button>
    </div>
  );
};

export default ProjectDescription;
