import styled, { css } from 'styled-components';

interface IProps {
  available?: boolean;
}

export const HealthButton = styled.div<IProps>`
  ${({ theme, available = false }) => css`
    padding: 0;
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${available ? theme.colors.green : theme.colors.red};
    margin-top: 6px;
    margin-left: 5px;
    box-shadow: 0 0 2px 2px ${available ? theme.colors.green : theme.colors.red};
  `}
`;
