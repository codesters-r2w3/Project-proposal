'use client'
// pages/QrCodeUploader.jsx

import { useState } from 'react';
import jsQR from 'jsqr';

const IndexPage = () => {
  const [qrCodeContent, setQrCodeContent] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const imageData = new Image();
      imageData.src = e.target.result;

      imageData.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        context.drawImage(imageData, 0, 0);

        const imageDataArray = context.getImageData(0, 0, canvas.width, canvas.height).data;
        const code = jsQR(imageDataArray, canvas.width, canvas.height);

        if (code) {
          setQrCodeContent(code.data);
        } else {
          setQrCodeContent(null);
          alert('QR code not found in the image');
        }
      };
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-300 to-blue-800">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-4">QR Code Reader</h1>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="mb-4 p-2 border rounded w-full"
        />
        {qrCodeContent && (
          <div className="bg-green-100 p-4 rounded mt-4">
            <h2 className="text-lg font-semibold mb-2">QR Code Content:</h2>
            <p>{qrCodeContent}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndexPage;