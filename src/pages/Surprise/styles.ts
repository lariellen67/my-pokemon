import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.palette.BACKGROUND.DEFAULT};
`;
