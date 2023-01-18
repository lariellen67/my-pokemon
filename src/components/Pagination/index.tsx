import cuid from 'cuid';

import { usePagination, DOTS } from '../../utils/usePagination';
import {
  Container,
  PaginationItem,
  Dots,
  ArrowLeft,
  ArrowRight,
} from './styles';

interface IProps {
  pageSize: number;
  onPageChange?: any;
  siblingCount?: number;
  currentPage: number;
  totalCount: number;
}

function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: IProps) {
  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const length: any = paginationRange?.length;
  const lastPage = paginationRange[length - 1];

  if (currentPage === 0 || length < 2) {
    return null;
  }
  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <Container>
      <PaginationItem disabled={currentPage === 1} onClick={onPrevious}>
        <ArrowLeft />
      </PaginationItem>
      {paginationRange?.map((pageNumber: number | string) => {
        if (pageNumber === DOTS) {
          return <Dots key={cuid()}>&#8230;</Dots>;
        }
        return (
          <PaginationItem
            key={cuid()}
            selected={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationItem disabled={currentPage === lastPage} onClick={onNext}>
        <ArrowRight />
      </PaginationItem>
    </Container>
  );
}

export { Pagination };
