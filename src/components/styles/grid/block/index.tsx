import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import { N, INDEX } from 'typings';
import { IReducer, select } from 'reducers';

import { Container } from './styles';

interface IProps {
  colIndex: INDEX;
  rowIndex: INDEX;
}

interface IState {
  isActive: boolean;
  value: N;
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(({ grid, selectedBlock }) => ({
    isActive: selectedBlock
      ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
      : false,
    value: grid ? grid[rowIndex][colIndex] : 0,
  }));

  const dispatch = useDispatch<Dispatch<AnyAction>>();

  function handleClick() {
    dispatch(select([rowIndex, colIndex]));
  }

  return (
    <Container
      active={state.isActive}
      data-cy={`Block-${rowIndex}-${colIndex}`}
      onClick={handleClick}
    >
      {state.value === 0 ? '' : state.value}
    </Container>
  );
};

export default Block;
