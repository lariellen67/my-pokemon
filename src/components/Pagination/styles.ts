import styled from 'styled-components';

interface IPaginationProps {
  disabled?: boolean;
  selected?: boolean;
}

export const Container = styled.ul`
  display: flex;
  list-style-type: none;
  width: 100%;
  justify-content: center;
  margin-top: 10px;
`;

export const PaginationItem = styled.li<IPaginationProps>`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: ${({ theme }) => theme.palette.TEXT.PRIMARY};
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 13px;
  min-width: 32px;
  background-color: ${({ selected, theme }) =>
    selected ? theme.palette.BACKGROUND.LABEL : theme.palette.BACKGROUND.WHITE};
  cursor: ${({ disabled }) => (disabled ? 'none' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
`;

export const Dots = styled.li`
  &:hover {
    background-color: transparent;
    cursor: pointer;
  }
`;

export const ArrowLeft = styled.div`
  transform: rotate(-135deg) translate(-50%);
  &::before {
    position: relative;
    content: '';
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid ${({ theme }) => theme.palette.TEXT.PRIMARY};
    border-top: 0.12em solid ${({ theme }) => theme.palette.TEXT.PRIMARY};
  }
`;

export const ArrowRight = styled.div`
  transform: rotate(45deg);
  &::before {
    position: relative;
    content: '';
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid ${({ theme }) => theme.palette.TEXT.PRIMARY};
    border-top: 0.12em solid ${({ theme }) => theme.palette.TEXT.PRIMARY};
  }
`;
