import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.palette.GENERAL.SECONDARY};
  height: 100px;
  max-height: 100px;
  padding: 10px 70px;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const RightContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 12%;
  list-style: none;
  text-decoration: none;
  margin-right: 30px;
`;

export const Item = styled.li`
  text-decoration: none;
  list-style: none;

  a {
    text-decoration: none;
    span {
      font-size: 14px;
      font-family: 'Share Tech Mono', monospace;
      text-transform: uppercase;
      color: ${({ theme }) => theme.palette.TEXT.CONTRAST_TWO};
      &:hover {
        color: ${({ theme }) => theme.palette.GENERAL.PRIMARY};
        cursor: pointer;
      }
    }
  }
`;

export const Touchable = styled.a`
  padding: 0;
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`;
