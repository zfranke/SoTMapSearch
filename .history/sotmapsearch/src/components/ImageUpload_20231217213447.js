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
