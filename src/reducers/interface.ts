import { GRID, BLOCK_COORD } from 'typings';

export interface IReducer {
  challengeGrid?: GRID;
  solvedGrid?: GRID;
  workingGrid?: GRID;
  selectedBlock?: BLOCK_COORD;
}
