import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { HealthButton } from './health-button';
import { IReducer } from 'reducers';

import { Label } from './styles';

interface IState {
  lives?: number;
  livesLeft?: number;
}

const HealthBar: FC = () => {
  const state = useSelector<IReducer, IState>(({ lives, livesLeft }) => ({
    lives,
    livesLeft,
  }));

  const numberOfBars: number = state.lives ? state.lives : 0;
  const livesLeft: number = state.livesLeft ? state.livesLeft : 0;

  const componentsToDisplay: any[] = [];

  for (let i: number = 0; i < numberOfBars; i++) {
    if (i < livesLeft) {
      componentsToDisplay.push(<HealthButton available={true} key={i} />);
    } else {
      componentsToDisplay.push(<HealthButton available={false} key={i} />);
    }
  }
  return (
    <>
      <Label>LIFE</Label>
      {componentsToDisplay}
    </>
  );
};

export default HealthBar;
