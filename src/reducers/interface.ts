import { GRID, BLOCK_COORD } from 'typings';

export interface IReducer {
  grid?: GRID;
  selectedBlock?: BLOCK_COORD;
}
