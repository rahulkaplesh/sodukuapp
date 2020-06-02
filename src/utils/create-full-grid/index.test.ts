import createFullGrid from './';

import { GRID } from 'typings';

describe('createFullGrid', () => {
  it('returns 9 x 9 grid with values ranging from 1 to 9', () => {
    const grid: GRID = createFullGrid();
    for (let row in grid)
      for (let col in grid[row]) {
        expect(grid[row][col]).toBeGreaterThanOrEqual(1);
        expect(grid[row][col]).toBeGreaterThanOrEqual(1);
      }
  });
});
