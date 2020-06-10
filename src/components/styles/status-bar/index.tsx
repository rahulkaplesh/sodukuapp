import React, { FC } from 'react';

import { HealthBar } from 'components';

import { Container, Left, Right } from './styles';
import { Label } from '../health-bar/styles';

const StatusBar: FC = () => {
  return (
    <Container>
      <Left>
        <HealthBar />
      </Left>
      <Right>
        <Label>Level 1</Label>
      </Right>
    </Container>
  );
};

export default StatusBar;
