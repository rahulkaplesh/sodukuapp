import { AnyAction } from 'redux';

import { IReducer } from './interface';
import { createFullGrid } from 'utils';

import * as types from './types';

const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_GRID:
      return {
        ...state,
        grid: createFullGrid(),
      };
    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.coord,
      };
    default:
      return state;
  }
}

export default reducer;
