import React, { useRef } from 'react';
import { toPng } from 'html-to-image';

function GradientImageDownload({ colors, direction }) {
  const previewRef = useRef();

  const handleDownload = () => {
    if (previewRef.current) {
      toPng(previewRef.current)
        .then(dataUrl => {
          const link = document.createElement('a');
          link.download = 'gradient.png';
          link.href = dataUrl;
          link.click();
        })
        .catch(err => {
          console.error('Oops, something went wrong!', err);
        });
    }
  };

  const gradientColors = colors.map(c => `${c.color}${Math.round(c.alpha * 255).toString(16).padStart(2, '0')}`);
  const gradient = `linear-gradient(${direction}, ${gradientColors.join(', ')})`;

  return (
    <div className="my-4">
      <h2 className="mb-2 text-xl font-semibold">Download as Image</h2>
      <div ref={previewRef} className="w-full h-48 mb-4 border rounded" style={{ background: gradient }}></div>
      <button onClick={handleDownload} className="px-4 py-2 text-white bg-green-500 rounded">
        Download
      </button>
    </div>
  );
}

export default GradientImageDownload;
