import React from 'react';

function GradientInput({ colors, onColorChange, onAlphaChange, addColor, removeColor }) {
  return (
    <div className="my-4">
      <h2 className="mb-2 text-xl font-semibold">Colors</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3">
        {colors.map((color, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-4 bg-white border rounded shadow-md">
            <input
              type="color"
              value={color.color}
              onChange={e => onColorChange(index, e.target.value)}
              className="w-full h-20 p-2 border rounded"
            />
            
            <input
              type="text"
              value={color.color}
              onChange={e => onColorChange(index, e.target.value)}
              className="w-full p-2 mt-2 border rounded"
            />
            <div className="mt-4">
              <label className="block">Opacity:
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={color.alpha}
                  onChange={e => onAlphaChange(index, parseFloat(e.target.value))}
                  className="w-full"
                />
              </label>
              <span>{Math.round(color.alpha * 100)}%</span>
            </div>
            {colors.length > 2 && (
              <button
                onClick={() => removeColor(index)}
                className="px-4 py-2 mt-4 text-white bg-red-500 rounded "
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
      <button onClick={addColor} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
        Add Color
      </button>
    </div>
  );
}

export default GradientInput;
