import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 20px;
  background-color: ${({ theme }) => theme.palette.BACKGROUND.DEFAULT};
`;
