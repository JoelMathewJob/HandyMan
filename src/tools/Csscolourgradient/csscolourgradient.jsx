import React, { useState } from 'react';
import GradientInput from './gradientinput';
import GradientCode from './gradientcode';
import GradientImageDownload from './gradientimagedownload';



function Colourgradient() {

  const [colors, setColors] = useState([{ color: '#ff0000', alpha: 1 }, { color: '#00ff00', alpha: 1 }, { color: '#0000ff', alpha: 1 }]);
  const [direction, setDirection] = useState('to right');

  const handleColorChange = (index, newColor) => {
    const newColors = [...colors];
    newColors[index].color = newColor;
    setColors(newColors);
  };

  const handleAlphaChange = (index, newAlpha) => {
    const newColors = [...colors];
    newColors[index].alpha = newAlpha;
    setColors(newColors);
  };

  const addColor = () => setColors([...colors, { color: '#ffffff', alpha: 1 }]);
  const removeColor = index => setColors(colors.filter((_, i) => i !== index));



  return (
    <div className='flex flex-col min-h-screen border border-gray-300 rounded-lg shadow-md m-7 p-7'>
      <div>
        <h1 className='text-4xl font-bold'>CSS Colour Gradient</h1>
        <p className='m-2 text-lg text-gray-500'>Creates Colour gradient from the choice of your colours.</p>
      </div>

      {/* logic */}

      <div className='flex flex-col justify-center w-full p-5 '>
        <div className="container p-4 mx-auto">
          <div className="lg:flex lg:space-x-8">
            <div className='w-full'>
              <GradientInput colors={colors} onColorChange={handleColorChange} onAlphaChange={handleAlphaChange} addColor={addColor} removeColor={removeColor} />
              <div className="my-4">
                <label className="block mb-2 text-left">Direction:
                  <select
                    value={direction}
                    onChange={e => setDirection(e.target.value)}
                    className="p-2 ml-2 border rounded"
                  >
                    <option value="to right">Right</option>
                    <option value="to left">Left</option>
                    <option value="to top">Up</option>
                    <option value="to bottom">Down</option>
                    <option value="to top right">Top Right</option>
                    <option value="to bottom right">Bottom Right</option>
                    <option value="to top left">Top Left</option>
                    <option value="to bottom left">Bottom Left</option>
                  </select>
                </label>
              </div>
            </div>
            
          </div>
          <GradientCode colors={colors} direction={direction} />
          <GradientImageDownload colors={colors} direction={direction} />
        </div>
      </div>
    </div>
  );
}

export default Colourgradient;
