import React, { useState } from 'react';
import QRCode from 'react-qr-code';

function QrGenerator() {
  const [link, setLink] = useState('https://joelmathewjob.github.io/portfolio/');

 
  return (
    <div className='flex flex-col min-h-screen border border-gray-300 rounded-lg shadow-md m-7 p-7'>
      <div>
        <h1 className='text-4xl font-bold'>QR Code Generator</h1>
        <p className='m-2 text-lg text-gray-500'>Generate QR Code for your URL, Texts and share it with your friends and family.</p>
      </div>

      {/* logic */}

      <div className='flex flex-col justify-center w-full p-5 '>
        <form className='self-center w-3/4 m-5 text-center lg:w-1/3' >
          <label htmlFor='UserEmail' className='block text-lg font-medium text-gray-700'>
            Enter Text or URL
          </label>
          <input
            type='text'
            id='UserEmail'
            placeholder='Text/URL'
            className='w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm sm:text-sm'
            onChange={(e) => setLink(e.target.value)}
          />
          
        </form>

        <div className='self-center p-2 m-5 bg-white'>
          <QRCode value={link} size={250} />
        </div>
      </div>
    </div>
  );
}

export default QrGenerator;
