import { Action, AnyAction } from 'redux';

import * as types from './types';
import { BLOCK_COORD, NUMBERS } from 'typings';

export const createGrid = (): Action => ({ type: types.CREATE_GRID });

export const select = (coord: BLOCK_COORD): AnyAction => ({
  coord,
  type: types.SELECT_BLOCK,
});

export const fillBlock = (value: NUMBERS, coord: BLOCK_COORD): AnyAction => ({
  value,
  coord,
  type: types.FILL_BLOCK,
});

export const createGame = (): AnyAction => ({ type: types.CREATE_GAME });
