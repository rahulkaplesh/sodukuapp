import styled, { css } from 'styled-components';

export const Label = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    height: auto;
    color: ${theme.colors.black};
    margin-top: 6px;
    margin-left: 2px;
  `}
`;
