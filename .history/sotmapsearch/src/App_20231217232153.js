import React from 'react';
import ImageUploader from './components/ImageUpload';
import ImageSlider from './components/ImageSlider';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ImageUploader />
        <ImageSlider />
      </div>
    </>
    
  );
}

export default App;
