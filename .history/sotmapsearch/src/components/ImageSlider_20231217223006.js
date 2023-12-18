import React, { useState, useEffect } from 'react';

function ImageSlider() {
  const imageFolder = 'maps'; // Folder where your images are located
  const imageExtension = '.jpg'; // Extension of your image files
  const totalImages = 5; // Total number of images in the folder (including Logo.jpg)

  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    } else if (direction === 'prev') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      navigate('next');
    } else if (e.key === 'ArrowLeft') {
      navigate('prev');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <button onClick={() => navigate('prev')}>&#8592; Previous</button>
      <img
        src={`${process.env.PUBLIC_URL}/${imageFolder}/${currentIndex}${imageExtension}`}
        alt={`Image ${currentIndex}`}
        style={{ maxWidth: '100%' }}
      />
      <button onClick={() => navigate('next')}>Next &#8594;</button>
    </div>
  );
}

export default ImageSlider;
