import React, { FC } from 'react';
import { HealthButton } from './health-button';

import { Label } from './styles';

const HealthBar: FC = () => {
  const numberOfBars: number = 3;
  const componentsToDisplay: any[] = [];
  for (let i: number = 0; i < numberOfBars; i++) {
    componentsToDisplay.push(<HealthButton />);
  }
  return (
    <>
      <Label>LIFE</Label>
      {componentsToDisplay}
    </>
  );
};

export default HealthBar;
