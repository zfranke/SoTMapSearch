import React, { useState, useEffect } from 'react';

const imageFolder = 'src/maps'; // Change this to your image folder path

function ImageSlider() {
  const [currentImage, setCurrentImage] = useState('Logo.jpg'); // Default image
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    // Fetch the list of images in the folder
    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context(imageFolder, false, /\.(jpg|jpeg|png|gif)$/));
    setImageList(images);
  }, []);

  const getNextImage = () => {
    const currentIndex = imageList.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % imageList.length;
    setCurrentImage(imageList[nextIndex]);
  };

  const getPrevImage = () => {
    const currentIndex = imageList.indexOf(currentImage);
    const prevIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    setCurrentImage(imageList[prevIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      getPrevImage();
    } else if (e.key === 'ArrowRight') {
      getNextImage();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentImage]);

  return (
    <div>
      <img src={currentImage} alt="Slider" width="300" height="200" />
      <button onClick={getPrevImage}>Previous</button>
      <button onClick={getNextImage}>Next</button>
    </div>
  );
}

export default ImageSlider;
