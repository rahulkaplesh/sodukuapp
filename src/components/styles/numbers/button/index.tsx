import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { BLOCK_COORD, N, NUMBERS } from 'typings';
import { fillBlock, IReducer } from 'reducers';
import { Button } from 'components';

interface IProps {
  value: NUMBERS;
}

interface IState {
  selectedBlock?: BLOCK_COORD;
  selectedValue?: N;
  challengeValue?: N;
}

const NumberButton: FC<IProps> = ({ value }) => {
  const state = useSelector<IReducer, IState>(
    ({ selectedBlock, workingGrid, challengeGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
      challengeValue:
        challengeGrid && selectedBlock
          ? challengeGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
    })
  );

  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const fill = useCallback(() => {
    if (state.selectedBlock && state.challengeValue === 0)
      dispatch(fillBlock(value, state.selectedBlock));
  }, [dispatch, state.selectedBlock, state.challengeValue, value]);

  return <Button onClick={fill}>{value}</Button>;
};

export default NumberButton;
