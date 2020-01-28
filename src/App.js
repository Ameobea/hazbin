import React, { useState } from 'react';

import RandomImage, { getRandomImage } from './RandomImage';
import './App.css';

const App = () => {
  const [imageURL, setImageURL] = useState(getRandomImage());

  return (
    <div className="app">
      <RandomImage imageURL={imageURL} />
      <button onClick={() => setImageURL(getRandomImage())}>New Image</button>
    </div>
  );
};

export default App;
