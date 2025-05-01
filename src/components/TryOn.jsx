import React, { useState } from 'react';
import './TryOn.css';
import modelImg from '../components/Image/output-onlinepngtools (2).png';
import simoneLogo from './Image/WhatsApp_Image_2025-04-30_at_9.23.04_AM-removebg-preview.png'; // Your logo

export default function TryOn({ mode, goBack }) {
  const [shirtUrl, setShirtUrl] = useState(null);
  const [pantUrl, setPantUrl] = useState(null);

  const handleUpload = (e, part) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      part === 'shirt' ? setShirtUrl(url) : setPantUrl(url);
    }
  };

  return (
    <div className="tryon-container">
      {/* LOGO */}
      <div className="logo-container">
        <img src={simoneLogo} alt="SIMONE Logo" className="brand-logo" />
      </div>

      <button onClick={goBack}>← Back</button>

      <div className="upload-section">
        {(mode === 'shirt' || mode === 'full') && (
          <div>
            <label>Upload Shirt Fabric:</label>
            <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'shirt')} />
          </div>
        )}
        {(mode === 'pant' || mode === 'full') && (
          <div>
            <label>Upload Pant Fabric:</label>
            <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'pant')} />
          </div>
        )}
      </div>

      <div className="model-container">
        <div
          className="shirt-area"
          style={{ backgroundImage: shirtUrl ? `url(${shirtUrl})` : 'none' }}
        />
        <div
          className="pant-area"
          style={{ backgroundImage: pantUrl ? `url(${pantUrl})` : 'none' }}
        />
        <img src={modelImg} alt="Model" className="model-img" />
      </div>
    </div>
  );
}
