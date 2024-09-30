import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-800/60 h-screen flex flex-col  items-center justify-center">
      <h1 className='text-2xl py-4 font-sans shadow-md '>CHANTS SPECIAL</h1>
      <div className="bg-gray-200 p-10 rounded-lg shadow-lg text-center space-y-5">
        <h1 className="text-5xl font-bold text-blue-900">{count}</h1>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => setCount(count + 1)} 
            className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300"
          >
            +
          </button>
          <button 
            onClick={() => setCount(count - 1)} 
            className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition duration-300"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
