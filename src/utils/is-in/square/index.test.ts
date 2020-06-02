import { SQUARE } from 'typings';

import isInSquare from './';

describe('isInSquare', () => {
  it('returns true if value is in square', () => {
    const square: SQUARE = [
      [1, 3, 4],
      [2, 5, 6],
      [9, 8, 7],
    ];

    expect(isInSquare({ square, value: 5 })).toBeTruthy();
  });
});
