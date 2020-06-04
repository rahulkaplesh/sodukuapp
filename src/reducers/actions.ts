import { Action, AnyAction } from 'redux';

import * as types from './types';
import { BLOCK_COORD } from 'typings';

export const createGrid = (): Action => ({ type: types.CREATE_GRID });

export const select = (coord: BLOCK_COORD): AnyAction => ({
  coord,
  type: types.SELECT_BLOCK,
});
