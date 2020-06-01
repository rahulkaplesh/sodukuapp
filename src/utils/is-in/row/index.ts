import { GRID, NUMBERS } from 'typings';

interface IInput {
  grid: GRID;
  row: number;
  value: NUMBERS;
}
/**
 * It returns whether value is in the grid row or not
 * @param param0 9x9 Sudoku Grid , row, value
 */
function isInRow({ grid, row, value }: IInput): boolean {
  return grid[row].includes(value);
}

export default isInRow;
