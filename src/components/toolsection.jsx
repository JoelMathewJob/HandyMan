import React from 'react';
import { Link } from 'react-router-dom';
import tools from '../routesConfig'
import Card from './card'

function ToolSection() {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

        {tools.map((tool) => {
          return(
          <li key={tool.name}>
            <Card path={tool.path} name={tool.name} desc={tool.desc} icon={tool.icon}/>
          </li>)
        })}
      </ul>
    </div>
  );
}

export default ToolSection;

