// src/components/Status.js
import React from 'react';
import '../styles/Status.css';

const Status = ({ isNext, winner }) => {
  return (
    <div className="status">
      {winner ? `Winner: ${winner}` : `Next player: ${isNext ? 'X' : 'O'}`}
    </div>
  );
};

export default Status;
