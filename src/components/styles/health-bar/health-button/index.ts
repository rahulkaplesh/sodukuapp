import styled, { css } from 'styled-components';

export const HealthButton = styled.div`
  ${({ theme }) => css`
    padding: 0;
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: green;
    margin-top: 6px;
    margin-left: 2px;
  `}
`;
