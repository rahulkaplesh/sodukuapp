import { AnyAction } from 'redux';
import global from 'global';

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
      const lives = 3;
      const livesLeft = 3;
      const level = state.level ? state.level : 1;
      const solvedGrid = createFullGrid();
      const gridCopy = copyGrid(solvedGrid);
      const challengeGrid = removeNumbers(gridCopy, level);
      const workingGrid = copyGrid(challengeGrid);
      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
        livesLeft,
        level,
        lives,
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
        let livesLeft: number = state.livesLeft ? state.livesLeft : 0;
        if (isInRow({ grid, row, value })) {
          alert('Made a Mistake Check the Rows !! Reducing a life !!');
          livesLeft = livesLeft !== 0 ? livesLeft - 1 : 0;
          return { ...state, livesLeft };
        }
        if (isInCol({ grid, col, value })) {
          alert('Made a Mistake Check the Columns!! Reducing a life !!');
          livesLeft = livesLeft !== 0 ? livesLeft - 1 : 0;
          return { ...state, livesLeft };
        }
        const square = identifySquare({ col, grid, row });
        if (isInSquare({ square, value })) {
          alert('Made a Mistake Check the Square!! Reducing a life !!');
          livesLeft = livesLeft !== 0 ? livesLeft - 1 : 0;
          return { ...state, livesLeft };
        }
        state.workingGrid[action.coord[0]][action.coord[1]] = action.value;
        if (compareArrays(state.workingGrid, state.solvedGrid)) {
          const solvedGrid = createFullGrid();
          const gridCopy = copyGrid(solvedGrid);
          let level = state.level ? state.level : 1;
          if (state.livesLeft !== 0) {
            alert('You Advance to the next level!');
            level = state.level ? state.level + 1 : 1;
          } else if (state.livesLeft === 0) {
            alert(
              'Sorry you did not complete the level in the given lives you cannot advance!'
            );
          } else if (state.level === global.maxLevel) {
            alert(
              'Yay ! You have finished the game resetting progress to Level 1!!'
            );
          }
          const challengeGrid = removeNumbers(gridCopy, level);
          const workingGrid = copyGrid(challengeGrid);
          const livesLeft = state.lives;
          return {
            ...state,
            challengeGrid,
            solvedGrid,
            workingGrid,
            livesLeft,
            level,
          };
        }
        return { ...state, workingGrid: [...state.workingGrid] as GRID };
      }
      return state;
    }
    case types.CREATE_GAME: {
      const level = 1;
      const lives = 3;
      const livesLeft = 3;
      const solvedGrid = createFullGrid();
      const gridCopy = copyGrid(solvedGrid);
      const challengeGrid = removeNumbers(gridCopy, level);
      const workingGrid = copyGrid(challengeGrid);
      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
        level,
        lives,
        livesLeft,
      };
    }
    default:
      return state;
  }
}

export default reducer;
