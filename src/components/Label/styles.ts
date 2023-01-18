import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 75px;
  max-height: 75px;
  width: 210px;
  max-width: 210px;
  margin: 0 10px 10px 0;
  background-color: ${({ theme }) => theme.palette.BACKGROUND.LABEL};
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const Picture = styled.img`
  height: 75px;
  width: 75px;
  align-self: center;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.palette.BACKGROUND.WHITE};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const Logo = styled.img`
  height: 18px;
  width: 18px;
  margin-right: 5px;
`;

export const Number = styled.p`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
`;

export const Name = styled.p`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
`;
