import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import {
  Content,
  Title,
  Card,
  Grid,
  Numbers,
  NewButton,
  StatusBar,
} from './components';
import { register, configStore } from './core';
import { GlobalStyles, theme } from './styles';

const { persistor, store } = configStore();

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Content data-cy="content">
            <Title data-cy="title">Sudoku</Title>
            <Card data-cy="card">
              <NewButton />
              <StatusBar />
              <Grid />
              <Numbers />
            </Card>
          </Content>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);

register();
