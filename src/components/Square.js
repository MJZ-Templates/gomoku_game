// src/components/Square.js
import React from 'react';
import '../styles/Square.css';

function Square({ value, onClick, highlight }) {
  return (
    <button className={`square ${highlight ? 'highlight' : ''}`} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
