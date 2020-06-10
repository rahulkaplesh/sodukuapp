import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row;
  `}
`;

export const Left = styled.div`
  ${({ theme }) => css`
    text-align: left;
    display: flex;
    flex-flow: row;
    flex: 1;
  `}
`;

export const Right = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row;
  `}
`;
