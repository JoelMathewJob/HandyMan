import React, { useState } from 'react';
import QRCode from 'react-qr-code';

function QrGenerator() {
  const [link, setLink] = useState('https://joelmathewjob.github.io/portfolio/');

 
  return (
    <div className='m-7 border border-gray-300 p-7 rounded-lg shadow-md min-h-screen flex flex-col'>
      <div>
        <h1 className='font-bold text-4xl'>QR Code Generator</h1>
        <p className='text-lg m-2 text-gray-500'>Generate QR Code for your URL, Texts and share it with your friends and family.</p>
      </div>

      {/* logic */}

      <div className='flex flex-col justify-center  p-5 w-full '>
        <form className='lg:w-1/3 self-center w-3/4 text-center m-5' >
          <label htmlFor='UserEmail' className='block font-medium text-gray-700 text-lg'>
            Enter Text or URL
          </label>
          <input
            type='text'
            id='UserEmail'
            placeholder='Text/URL'
            className='mt-1 w-full rounded-md border-gray-300 border p-2 shadow-sm sm:text-sm'
            onChange={(e) => setLink(e.target.value)}
          />
          
        </form>

        <div className='bg-white self-center p-2 m-5'>
          <QRCode value={link} size={250} />
        </div>
      </div>
    </div>
  );
}

export default QrGenerator;
