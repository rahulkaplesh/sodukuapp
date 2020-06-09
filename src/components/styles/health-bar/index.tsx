import React, { FC } from 'react';
import { HealthButton } from './health-button';

import { Container } from './styles';

const HealthBar: FC = () => {
  const numberOfBars: number = 3;
  const componentsToDisplay: any[] = [];
  for (let i: number = 0; i < numberOfBars; i++) {
    componentsToDisplay.push(<HealthButton />);
  }
  return <Container>{componentsToDisplay}</Container>;
};

export default HealthBar;
