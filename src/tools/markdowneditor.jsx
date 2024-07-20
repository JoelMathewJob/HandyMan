

import React, {useState} from "react";
import MDEditor from '@uiw/react-md-editor';

export default function App() {
  const [value, setValue] = useState("**Hello world!!!**");
  return (
<div className='flex flex-col min-h-screen border border-gray-300 rounded-lg shadow-md m-7 p-7'>
      <div>
        <h1 className='text-4xl font-bold'>Markdown Editor</h1>
        <p className='m-2 text-lg text-gray-500'>Create, Edit , Modify your markdown file</p>
      </div>

      {/* logic */}

      <div className='flex flex-col justify-center w-full p-5 '>
      <div className="container">
      <MDEditor
        value={value}
        onChange={setValue}
      />
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
    </div>
      </div>
    </div>

    
    
  );
}