import React from 'react';
import Card from './card';

function ToolSection({ tools }) {

  const sortedTools = [...tools].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div>
      <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {sortedTools.map((tool) => (
          <li key={tool.name}>
            <Card path={tool.path} name={tool.name} desc={tool.desc} icon={tool.icon} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToolSection;
