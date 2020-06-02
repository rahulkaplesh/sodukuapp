import React, { FC, Children } from 'react';

import { GRID } from 'typings';
import { createFullGrid } from 'utils';

import { Container, Row } from './styles';
import Block from './block';

const Grid: FC = () => {
  const grid: GRID = createFullGrid();
  console.log(grid);

  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, blockIndex) => (
                <Block colIndex={blockIndex} rowIndex={rowIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;
