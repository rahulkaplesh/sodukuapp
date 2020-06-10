import React, { FC, Children, useEffect, useCallback } from 'react';
import useMousetrap from 'react-hook-mousetrap';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { IReducer, select, fillBlock, createGame } from 'reducers';

import { Container, Row } from './styles';
import Block from './block';
import { INDEX, NUMBERS, BLOCK_COORD, N, GRID } from 'typings';

interface IState {
  selectedBlock?: BLOCK_COORD;
  selectedValue: N;
  challengeValue: N;
  solvedGrid?: GRID;
  challengeGrid?: GRID;
}

const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(
    ({ selectedBlock, workingGrid, solvedGrid, challengeGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
      challengeValue:
        challengeGrid && selectedBlock
          ? challengeGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
      solvedGrid,
      challengeGrid,
    })
  );

  const dispatch = useDispatch<Dispatch<AnyAction>>();

  const create = useCallback(() => dispatch(createGame()), [dispatch]);

  useEffect(() => {
    if (!state.solvedGrid) create();
  }, [create, state.solvedGrid]);

  const fill = useCallback(
    (n: NUMBERS) => {
      if (state.selectedBlock && state.challengeValue === 0) {
        // && state.selectedValue === 0 This removed to allow user to change the values
        dispatch(fillBlock(n, state.selectedBlock));
      }
    },
    [dispatch, state.selectedBlock, state.challengeValue]
  );

  function moveDown() {
    if (state.selectedBlock && state.selectedBlock[0] < 8) {
      dispatch(
        select([(state.selectedBlock[0] + 1) as INDEX, state.selectedBlock[1]])
      );
    }
  }

  function moveLeft() {
    if (state.selectedBlock && state.selectedBlock[1] > 0) {
      dispatch(
        select([state.selectedBlock[0], (state.selectedBlock[1] - 1) as INDEX])
      );
    }
  }

  function moveRight() {
    if (state.selectedBlock && state.selectedBlock[1] < 8) {
      dispatch(
        select([state.selectedBlock[0], (state.selectedBlock[1] + 1) as INDEX])
      );
    }
  }

  function moveUp() {
    if (state.selectedBlock && state.selectedBlock[0] > 0) {
      dispatch(
        select([(state.selectedBlock[0] - 1) as INDEX, state.selectedBlock[1]])
      );
    }
  }

  useMousetrap('1', () => fill(1));
  useMousetrap('2', () => fill(2));
  useMousetrap('3', () => fill(3));
  useMousetrap('4', () => fill(4));
  useMousetrap('5', () => fill(5));
  useMousetrap('6', () => fill(6));
  useMousetrap('7', () => fill(7));
  useMousetrap('8', () => fill(8));
  useMousetrap('9', () => fill(9));
  useMousetrap('down', moveDown);
  useMousetrap('left', moveLeft);
  useMousetrap('right', moveRight);
  useMousetrap('up', moveUp);

  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block
                  colIndex={colIndex as INDEX}
                  rowIndex={rowIndex as INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
