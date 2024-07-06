import React, { useState } from 'react';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [characterTypes, setCharacterTypes] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  const toggleCharacterType = (type) => {
    // Prevent deselecting all character types
    if (
      Object.keys(characterTypes).filter((key) => characterTypes[key]).length === 1 &&
      characterTypes[type]
    ) {
      return;
    }

    setCharacterTypes({
      ...characterTypes,
      [type]: !characterTypes[type],
    });
  };

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()-_=+[{]};:\'",<.>/?';

    let validChars = '';
    if (characterTypes.uppercase) validChars += uppercaseChars;
    if (characterTypes.lowercase) validChars += lowercaseChars;
    if (characterTypes.numbers) validChars += numberChars;
    if (characterTypes.symbols) validChars += symbolChars;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  const getPasswordStrength = () => {
    const passwordLength = password.length;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*()\[\]{};:'",<.>/?]/.test(password);

    if (passwordLength >= 16 && hasUppercase && hasLowercase && hasNumber && hasSymbol) {
      return 'Very Strong';
    } else if (passwordLength >= 12 && hasUppercase && hasLowercase && (hasNumber || hasSymbol)) {
      return 'Strong';
    } else if (passwordLength >= 8 && (hasUppercase || hasLowercase) && (hasNumber || hasSymbol)) {
      return 'Medium';
    } else {
      return 'Weak';
    }
  };

  const getPasswordColor = () => {
    const strength = getPasswordStrength();
    switch (strength) {
      case 'Very Strong':
        return 'text-green-600';
      case 'Strong':
        return 'text-blue-600';
      case 'Medium':
        return 'text-yellow-600';
      case 'Weak':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className='flex flex-col min-h-screen border border-gray-300 rounded-lg shadow-md m-7 p-7'>
      <div>
        <h1 className='text-4xl font-bold'>Password Generator</h1>
        <p className='m-2 text-lg text-gray-500'>Creates strong and complex passwords for you.</p>
      </div>

      <div className='flex flex-col justify-center w-full p-5'>
        <div className="container p-4 mx-auto">

          <div className="mb-4 lg:w-1/3">
            <label className="block mb-1">Password Length:</label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <div
              className={`px-3 py-1 ${characterTypes.uppercase ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-xl cursor-pointer`}
              onClick={() => toggleCharacterType('uppercase')}
            >
              Uppercase
            </div>
            <div
              className={`px-3 py-1 ${characterTypes.lowercase ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-xl cursor-pointer`}
              onClick={() => toggleCharacterType('lowercase')}
            >
              Lowercase
            </div>
            <div
              className={`px-3 py-1 ${characterTypes.numbers ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-xl cursor-pointer`}
              onClick={() => toggleCharacterType('numbers')}
            >
              Numbers
            </div>
            <div
              className={`px-3 py-1 ${characterTypes.symbols ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-xl cursor-pointer`}
              onClick={() => toggleCharacterType('symbols')}
            >
              Symbols
            </div>
          </div>

          <button onClick={generatePassword} className="px-4 py-2 mb-4 text-white bg-gray-500 rounded">
            Generate Password
          </button>

          {password && (
            <div className="mb-4">
              <label className="block mb-1">Generated Password:</label>
              <div className="flex items-center">
                <input
                  type="text"
                  value={password}
                  readOnly
                  className="w-full p-2 bg-gray-100 border rounded lg:w-1/3"
                />
                <button onClick={copyToClipboard} className="px-4 py-2 ml-2 bg-gray-200 rounded">Copy</button>
              </div>
              <p className={`text-sm mt-1 ${getPasswordColor()}`}>{getPasswordStrength()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
