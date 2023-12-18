import React from 'react';
import ImageUploader from './components/ImageUpload';
import ImageSlider from './components/ImageSlider';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <ImageUploader />
      <ImageSlider />
    </>
    
  );
}

export default App;
