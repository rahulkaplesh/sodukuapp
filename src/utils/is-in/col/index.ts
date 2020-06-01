import { GRID, NUMBERS } from 'typings';

interface IInput {
  grid: GRID;
  col: number;
  value: NUMBERS;
}

function isInCol({ grid, col, value }: IInput): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) return true;
  }
  return false;
}

export default isInCol;
