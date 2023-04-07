import React, { useState } from 'react';
import Resizer from 'react-image-file-resizer';

function ImageUploader() {
  const [originalImage, setOriginalImage] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    Resizer.imageFileResizer(
      file,
      300,
      300,
      'JPEG',
      100,
      0,
      (uri) => {
        setOriginalImage(URL.createObjectURL(file));
        setResizedImage(uri);
      },
      'base64'
    );
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} /> <br/>
      {originalImage && <img src={originalImage} alt="Original" />}
      {resizedImage && <img src={resizedImage} alt="Resized" />}
    </div>
  );
}

export default ImageUploader;
