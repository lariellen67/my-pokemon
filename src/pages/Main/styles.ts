import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 20px 70px;
  background-color: ${({ theme }) => theme.palette.BACKGROUND.DEFAULT};
  overflow: hidden;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.palette.BACKGROUND.LOADING};
  opacity: 0.2;
`;
