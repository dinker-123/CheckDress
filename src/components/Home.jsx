import React from 'react';
import '../index.css';
import Image from "./Image/WhatsApp_Image_2025-04-30_at_9.23.04_AM-removebg-preview.png"
import { FaTshirt } from 'react-icons/fa';
import { GiTrousers } from 'react-icons/gi';
import { GiClothes } from 'react-icons/gi';

export default function Home({ onSelect }) {
  return (
    <div className="home-container">
      <img src={Image} alt="SIMONE Logo" className="logo-img" />
      <h1 className="app-title">Banswara Syntex Limited</h1>
      <div className="button-group">
        <button className="home-btn" onClick={() => onSelect('shirt')}>
          <FaTshirt className="btn-icon" />
          Try Shirt
        </button>
        <button className="home-btn" onClick={() => onSelect('pant')}>
          <GiTrousers className="btn-icon" />
          Try Pant
        </button>
        <button className="home-btn" onClick={() => onSelect('full')}>
          <GiClothes className="btn-icon" />
          Try Full Look
        </button>
      </div>
    </div>
  );
}
