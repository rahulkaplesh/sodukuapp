import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { IReducer } from 'reducers';

import { HealthBar } from 'components';

import { Container, Left, Right } from './styles';
import { Label } from '../health-bar/styles';

interface IState {
  level: number;
}

const StatusBar: FC = () => {
  const state = useSelector<IReducer, IState>(({ level }) => ({
    level: level ? level : 0,
  }));

  return (
    <Container>
      <Left>
        <HealthBar />
      </Left>
      <Right>
        <Label>Level {state.level}</Label>
      </Right>
    </Container>
  );
};

export default StatusBar;
