import React, { useState, useRef, useEffect } from 'react';
import WordCloud from 'wordcloud';

function WordCloudGenerator() {
  const [text, setText] = useState('');
  const canvasRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const wordArray = text.split(' ').map(word => [word, Math.random() * 100]);
    WordCloud(canvasRef.current, { list: wordArray });
  };

  // Initialize the canvas size and handle resize
  useEffect(() => {
    const initializeCanvas = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const rect = canvas.parentElement.getBoundingClientRect();
        let width = rect.width * 0.8; // Adjust width as needed

        // Ensure the canvas width is at least 600px for larger screens
        if (width < 600) {
          width = Math.min(rect.width, 600); // Limit to screen width or 600px
        }

        const height = Math.min(400, width * 0.6); // Limit height to 400 or adjust as needed
        canvas.width = width;
        canvas.height = height;
      }
    };

    initializeCanvas();

    // Resize listener
    window.addEventListener('resize', initializeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener('resize', initializeCanvas);
    };
  }, []);

  return (
    <div className='m-7 border border-gray-300 p-7 rounded-lg shadow-md min-h-screen flex flex-col'>
      <div>
        <h1 className='font-bold text-4xl'>Word Cloud Generator</h1>
        <p className='text-lg m-2 text-gray-500'>Generate Word Cloud for your Texts and use it for presentations.</p>
      </div>

      <div className='flex flex-col justify-center p-5 w-full'>
        <form className='lg:w-1/2 self-center w-3/4 text-center' onSubmit={handleSubmit}>
          <label htmlFor="UserText" className="block font-medium text-gray-700 text-lg"> Enter Text </label>
          <textarea
            id="UserText"
            placeholder="Enter your text here"
            className="mt-1 w-full rounded-md border-gray-300 border p-2 shadow-sm sm:text-sm"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button type='submit' className='m-5 bg-blue-400 w-30 p-2 rounded-lg self-center text-white hover:bg-blue-600'>Generate Word Cloud</button>
        </form>
        
        <div className='bg-white self-center p-2 border border-gray-400 rounded-lg overflow-hidden lg:w-2/3'>
          <canvas ref={canvasRef}></canvas>
        </div>
      </div>
    </div>
  );
}

export default WordCloudGenerator;
