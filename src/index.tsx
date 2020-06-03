import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { Content, Title, Card, Grid } from './components';
import { unregister, configStore } from './core';
import { GlobalStyles, theme } from './styles';

const store = configStore();

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <Content data-cy="content">
          <Title data-cy="title">Sudoku</Title>
          <Card data-cy="card">
            <Grid />
          </Card>
        </Content>
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);

unregister();
