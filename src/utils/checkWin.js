// src/utils/checkWin.js
const checkWin = (board, row, col, player) => {
    const directions = [
      [{ x: -1, y: 0 }, { x: 1, y: 0 }],
      [{ x: 0, y: -1 }, { x: 0, y: 1 }],
      [{ x: -1, y: -1 }, { x: 1, y: 1 }],
      [{ x: -1, y: 1 }, { x: 1, y: -1 }]
    ];
  
    const countStones = (dir1, dir2) => {
      const positions = [[row, col]];
      for (const dir of [dir1, dir2]) {
        let i = row + dir.x;
        let j = col + dir.y;
        while (
          i >= 0 && i < board.length &&
          j >= 0 && j < board[0].length &&
          board[i][j] === player
        ) {
          positions.push([i, j]);
          i += dir.x;
          j += dir.y;
        }
      }
      return positions.length >= 5 ? positions : [];
    };
  
    for (const [dir1, dir2] of directions) {
      const positions = countStones(dir1, dir2);
      if (positions.length >= 5) return positions;
    }
    return null;
  };
  
  export default checkWin;
  