import styled from 'styled-components';

export const Fragment = styled.div`
  .flip-card {
    background-color: ${({ theme }) => theme.palette.BACKGROUND.DEFAULT};
    width: 290px;
    height: 400px;
    perspective: 1000px;
    border-radius: 10px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0
      ${({ theme }) => theme.palette.SHADES_OF_GREY.SHADOW};
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 10px;
  }

  .flip-card-front {
    background-color: ${({ theme }) => theme.palette.BACKGROUND.DEFAULT};
    color: black;
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }
`;

export const FrontImage = styled.img`
  width: 290px;
  height: 400px;
  margin-right: 2px;
  transform: rotate(-1deg);
`;

export const BackImage = styled.img`
  width: 290px;
  height: 400px;
  margin-right: 2px;
`;

export const WinCardMessage = styled.span`
  display: flex;
  background-color: transparent;
  height: 50px;
  margin-bottom: 20px;
`;
