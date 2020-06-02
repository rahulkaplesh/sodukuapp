import { GRID } from 'typings';

/**
 * Just checks if a value in the grid is 0 or not
 * @param grid A 9x9 Sudoku Grid
 */
function checkGrid(grid: GRID): boolean {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] === 0) return false;
    }
  }
  return true;
}

export default checkGrid;
