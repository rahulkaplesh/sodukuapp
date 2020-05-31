import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { Content, Title, Card } from './components';
import { unregister } from './core';
import { GlobalStyles, theme } from './styles';

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content data-cy="content">
        <Title data-cy="title">Sudoku</Title>
        <Card data-cy="card">This is WIP!!</Card>
      </Content>
    </ThemeProvider>
  </>,
  document.getElementById('root')
);

unregister();
