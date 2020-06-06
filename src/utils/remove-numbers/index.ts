import { GRID } from 'typings';
import global from 'global';

import { getRandomIndex, copyGrid, solveGrid } from 'utils';
/**
 * Removes numbers from the grid to create a sudoku puzzle
 * @param grid A 9x9 Sudoku Grid
 * @param attempts Number of attaempts to solve( Higher means more difficult default is 5 )
 */
function removeNumber(grid: GRID, attempts = 5): GRID {
  while (attempts > 0) {
    let row = getRandomIndex();
    let col = getRandomIndex();

    while (grid[row][col] === 0) {
      row = getRandomIndex();
      col = getRandomIndex();
    }

    const backup = grid[row][col];
    grid[row][col] = 0;

    const gridCopy = copyGrid(grid);
    global.counter = 0;

    solveGrid(gridCopy);

    if (global.counter !== 1) {
      grid[row][col] = backup;
      attempts--;
    }
  }
  return grid;
}

export default removeNumber;
