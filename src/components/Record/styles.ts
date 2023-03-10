import { FaHeart, FaRegHeart } from 'react-icons/fa';
import styled from 'styled-components';

interface ITypeProps {
  color: any;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.BACKGROUND.LABEL};
  border-radius: 8px;
  box-shadow: 0px 4px 6px ${({ theme }) => theme.palette.SHADES_OF_GREY.SHADOW};
  padding: 10px 0 30px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding: 0;
  margin-right: 10px;
`;

export const Image = styled.img`
  height: 170px;
  width: 170px;
  align-self: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const Logo = styled.img`
  height: 28px;
  width: 28px;
  margin-right: 5px;
`;

export const Number = styled.p`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 16px;
`;

export const Name = styled.p`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 24px;
`;

export const Info = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-right: 12px;
  text-transform: uppercase;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 16px;
`;

export const Type = styled.p<ITypeProps>`
  padding: 1px 5px;
  margin-left: 4px;
  border-radius: 2px;
  text-transform: uppercase;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 12px;
  background-color: ${({ color, theme }) =>
    color || theme.palette.TYPES.NORMAL};
`;

export const DividerText = styled.p`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  font-weight: 600;
`;

export const Move = styled.p`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
`;

export const Touchable = styled.button`
  padding: 0;
  border: 0;
  height: 30px;
  width: 30px;
  outline: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.SHADES_OF_GREY.POLISHED};
  border-radius: 15px;
`;

export const Heart = styled(FaRegHeart).attrs((props) => ({
  ...props,
  size: 16,
  color: props.theme.palette.SHADES_OF_GREY.DEFAULT,
}))``;

export const HeartFilled = styled(FaHeart).attrs((props) => ({
  ...props,
  size: 16,
  color: props.theme.palette.BACKGROUND.FAVORITE,
}))``;
