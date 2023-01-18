import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.BACKGROUND.DEFAULT};
  overflow: auto;
`;
