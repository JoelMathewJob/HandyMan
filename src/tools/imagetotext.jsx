import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

const ImageToText = () => {
    const [image, setImage] = useState(null);
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(URL.createObjectURL(file));
    };

    const extractText = () => {
        if (image) {
            setIsLoading(true);
            Tesseract.recognize(
                image,
                'eng',
                {
                    logger: (m) => console.log(m),
                }
            ).then(({ data: { text } }) => {
                setText(text);
                setIsLoading(false);
            });
        }
    };

    return (
        <div className='flex flex-col min-h-screen border border-gray-300 rounded-lg shadow-md m-7 p-7'>
            <div>
                <h1 className='text-4xl font-bold'>Image to Text</h1>
                <p className='m-2 text-lg text-gray-500'>Scans Text from Images.</p>
            </div>
            <div className="flex flex-col items-center p-4">
                <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />
                {image && <img src={image} alt="Selected" className="w-1/2 mb-4" />}
                <button
                    onClick={extractText}
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                    Extract Text
                </button>
                {isLoading ? (
                    <p className="mt-4">Processing...</p>
                ) : (
                    <textarea
                        value={text}
                        readOnly
                        className="w-full h-64 p-2 mt-4 border border-gray-300 rounded lg:w-2/3"
                    />
                )}
            </div>
        </div>
    );
};

export default ImageToText;
