// src/components/Celebration.js
import React from 'react';
import '../styles/Celebration.css';

const Celebration = ({ isWinner, winner }) => {
  if (!isWinner) return null;
  
  return (
    <div className="celebration">
      <p>Congratulations {winner}!</p>
    </div>
  );
};

export default Celebration;
