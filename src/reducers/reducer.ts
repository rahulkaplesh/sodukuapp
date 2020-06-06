import { AnyAction } from 'redux';

import { IReducer } from './interface';
import { createFullGrid, removeNumbers, copyGrid, compareArrays } from 'utils';

import * as types from './types';

import { GRID } from 'typings';

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
        if (
          state.solvedGrid[action.coord[0]][action.coord[1]] !== action.value
        ) {
          alert('Incorrect option!');
          return state;
        }
        state.workingGrid[action.coord[0]][action.coord[1]] = action.value;
        if (compareArrays(state.workingGrid, state.solvedGrid))
          alert('Completed');
        return { ...state, workingGrid: [...state.workingGrid] as GRID };
      }
      return state;
    }
    default:
      return state;
  }
}

export default reducer;
