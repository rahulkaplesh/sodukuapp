import { NUMBERS, SQUARE } from 'typings';

interface IInput {
  square: SQUARE;
  value: NUMBERS;
}

/**
 * Function returns whether a value is in square
 * @param param0 sudoku 3 x 3 square , number value
 */
function isInSquare({ square, value }: IInput): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value);
}

export default isInSquare;
