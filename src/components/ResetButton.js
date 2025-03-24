// src/components/ResetButton.js
import React from 'react';
import '../styles/ResetButton.css';

const ResetButton = ({ onClick }) => {
  return (
    <button className="reset-button" onClick={onClick}>Restart Game</button>
  );
};

export default ResetButton;
