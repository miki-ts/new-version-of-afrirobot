import React from 'react';
import { toolsList } from '../config/servicePricing';

const Tools = () => {
  // Duplicate tools for seamless infinite loop
  const allTools = [...toolsList, ...toolsList];

  const handleImageError = (e, toolName) => {
    e.target.src = `https://via.placeholder.com/100/b7ff00/080908?text=${toolName.split(' ')[0]}`;
  };

  return (
    <section className="tools" id="tools">
  <h2 className="heading">
    Our <span>Clients</span>
  </h2>

  <div className="tools-container">
    <div className="tools-track">

    {allTools.map((tool, index) => (
        <div
            key={`first-${tool.name}-${index}`}
            className="tool-item"
            data-tool={tool.name.toLowerCase()}
        >
            <img
                src={tool.logo}
                alt={tool.name}
                className="tool-logo"
                onError={(e) => handleImageError(e, tool.name)}
            />
        </div>
    ))}

    {allTools.map((tool, index) => (
        <div
            key={`second-${tool.name}-${index}`}
            className="tool-item"
            data-tool={tool.name.toLowerCase()}
            aria-hidden="true"
        >
            <img
                src={tool.logo}
                alt=""
                className="tool-logo"
                onError={(e) => handleImageError(e, tool.name)}
            />
        </div>
    ))}

</div>
  </div>
</section>
  );
};

export default Tools;

