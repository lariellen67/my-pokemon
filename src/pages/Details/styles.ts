import styled from 'styled-components';

import background from '../../assets/wallpaper.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 20px 70px;
  background: linear-gradient(rgba(31, 33, 36, 0.95), rgba(31, 33, 36, 0.95)),
    url(${background}) no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 4px;
  height: 100%;
  width: 40%;
  background-color: ${({ theme }) => theme.palette.GENERAL.PRIMARY};
  box-shadow: 4px 6px 6px rgba(0, 0, 0, 0.2);
`;
