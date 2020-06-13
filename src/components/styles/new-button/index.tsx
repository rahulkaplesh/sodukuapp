import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Action, Dispatch } from 'redux';

import { Button } from 'components';
import { createGrid } from 'reducers';

const NewButton: FC = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const createNewGrid = useCallback(() => {
    if (
      window.confirm(
        'Are you sure you want to reset the game at the current Level ?'
      )
    )
      dispatch(createGrid());
  }, [dispatch]);

  return <Button onClick={createNewGrid}>RESET LEVEL</Button>;
};

export default NewButton;
