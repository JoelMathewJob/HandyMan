import React, { useRef } from 'react';

function GradientCode({ colors, direction }) {
  const gradientColors = colors.map(c => `${c.color}${Math.round(c.alpha * 255).toString(16).padStart(2, '0')}`);
  const gradientCSS = `background: linear-gradient(${direction}, ${gradientColors.join(', ')});`;
  const tailwindCSS = `bg-gradient-to-r from-${colors[0].color.replace('#', '')} to-${colors[colors.length - 1].color.replace('#', '')}`;

  const cssRef = useRef();
  const tailwindRef = useRef();

  const handleCopy = (ref) => {
    navigator.clipboard.writeText(ref.current.innerText);
    alert('Code copied to clipboard');
  };

  return (
    <div className="my-4">
      <h2 className="mb-2 text-xl font-semibold">Generated Code</h2>
      <h3 className="text-lg font-semibold">CSS</h3>
      <div className="relative overflow-x-auto">
        <pre ref={cssRef} className="p-4 whitespace-pre-wrap bg-gray-100 border rounded">{gradientCSS}</pre>
        <button
          onClick={() => handleCopy(cssRef)}
          className="absolute top-0 right-0 px-2 py-1 mt-2 mr-2 text-white bg-blue-500 rounded"
        >
          Copy
        </button>
      </div>
      {/* <h3 className="mt-4 text-lg font-semibold">Tailwind CSS</h3>
      <div className="relative overflow-x-auto">
        <pre ref={tailwindRef} className="p-4 whitespace-pre-wrap bg-gray-100 border rounded">{tailwindCSS}</pre>
        <button
          onClick={() => handleCopy(tailwindRef)}
          className="absolute top-0 right-0 px-2 py-1 mt-2 mr-2 text-white bg-blue-500 rounded"
        >
          Copy
        </button>
      </div> */}
    </div>
  );
}

export default GradientCode;
