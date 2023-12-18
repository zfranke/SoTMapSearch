import React from 'react';
import ImageUploader from './components/ImageUpload';
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ImageUploader />
      <ImageSlider />
    </div>
  );
}

export default App;
