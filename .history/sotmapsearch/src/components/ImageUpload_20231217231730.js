import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle the image selection
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // Function to handle pasted images
  const handlePaste = (event) => {
    const items = event.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.indexOf('image') !== -1) {
        const blob = item.getAsFile();
        const imageUrl = URL.createObjectURL(blob);
        setSelectedImage(imageUrl);
        break;
      }
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h5" align="center" gutterBottom>
        Image Uploader
      </Typography>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageSelect}
        style={{ display: 'none' }}
        id="image-upload-input"
      />
      <label htmlFor="image-upload-input">
        <Button
          variant="contained"
          component="span"
          startIcon={<CloudUploadIcon />}
        >
          Upload Image
        </Button>
      </label>
      <br />
      <div
        onPaste={handlePaste}
        style={{
          border: '2px dashed #ccc',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
        }}
      >
        <Typography variant="body1">
          You can also paste an image from your clipboard here.
        </Typography>
      </div>
      {selectedImage && (
        <div>
          <Typography variant="h6" align="center" gutterBottom>
            Selected Image:
          </Typography>
          <img src={selectedImage} alt="Selected" width="100%" />
        </div>
      )}
    </Container>
  );
}

export default ImageUploader;
