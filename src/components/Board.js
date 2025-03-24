// src/components/Board.js
import React, { useState, useEffect } from 'react';
import Square from './Square';
import Status from './Status';
import checkWin from '../utils/checkWin';
import '../styles/Board.css';

const createBoard = (size) => {
  return Array.from({ length: size }, () => Array(size).fill(null));
};

const Board = ({ size, onWin }) => {
  const [squares, setSquares] = useState(createBoard(size));
  const [isNext, setIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);

  useEffect(() => {
    if (winner) {
      onWin(winner);
    }
  }, [winner, onWin]);

  const handleClick = (row, col) => {
    if (squares[row][col] || winner) return;
    const newArr = squares.slice();
    newArr[row][col] = isNext ? 'X' : 'O';

    const winCheck = checkWin(newArr, row, col, newArr[row][col]);
    if (winCheck) {
      setWinner(newArr[row][col]);
      setWinningLine(winCheck);
    }

    setSquares(newArr);
    setIsNext(!isNext);
  };

  const renderSquare = (row, col) => (
    <Square key={`${row}-${col}`} value={squares[row][col]} onClick={() => handleClick(row, col)} highlight={winningLine.some(pos => pos[0] === row && pos[1] === col)} />
  );

  const renderRow = (row) => {
    return (
      <div className="board-row" key={row}>
        {Array.from({ length: size }, (_, col) => renderSquare(row, col))}
      </div>
    );
  };

  return (
    <div className="game-board">
      <Status isNext={isNext} winner={winner} />
      {Array.from({ length: size }, (_, row) => renderRow(row))}
    </div>
  );
};

export default Board;
