import { AnyAction } from 'redux';

import { IReducer } from './interface';
import {
  createFullGrid,
  removeNumbers,
  copyGrid,
  compareArrays,
  isInCol,
  isInRow,
  isInSquare,
  identifySquare,
} from 'utils';

import * as types from './types';

import { GRID, NUMBERS } from 'typings';

const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_GRID:
      const solvedGrid = createFullGrid();
      const gridCopy = copyGrid(solvedGrid);
      const challengeGrid = removeNumbers(gridCopy);
      const workingGrid = copyGrid(challengeGrid);
      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
      };
    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.coord,
      };
    case types.FILL_BLOCK: {
      if (state.workingGrid && state.solvedGrid) {
        /**if (
          state.solvedGrid[action.coord[0]][action.coord[1]] !== action.value
        ) {
          alert('Incorrect option!');
          return state;
        }*/ // This logic is commented to make trhe game a bit more challenging
        // Logic from here is added to provide hints to the user where he is going wrong
        let value: NUMBERS = action.value;
        let row: number = action.coord[0];
        let col: number = action.coord[1];
        let grid: GRID = state.workingGrid;
        if (isInRow({ grid, row, value })) {
          alert('Check the rows!!');
          return state;
        }
        if (isInCol({ grid, col, value })) {
          alert('Check the Columns!!');
          return state;
        }
        const square = identifySquare({ col, grid, row });
        if (isInSquare({ square, value })) {
          alert('Check the Square!!');
          return state;
        }
        state.workingGrid[action.coord[0]][action.coord[1]] = action.value;
        if (compareArrays(state.workingGrid, state.solvedGrid))
          alert('YAY !! You have completed correctly');
        return { ...state, workingGrid: [...state.workingGrid] as GRID };
      }
      return state;
    }
    default:
      return state;
  }
}

export default reducer;
