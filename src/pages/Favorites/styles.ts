import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 20px 70px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.BACKGROUND.DEFAULT};
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  margin: 0;
  overflow: hidden;
  margin-top: 15px;
`;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 0;
  margin-top: 15px;
`;

export const NotFound = styled.img`
  height: 270px;
  width: 270px;
`;
