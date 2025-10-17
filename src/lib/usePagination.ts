import { useState, useMemo } from 'react';

interface UsePaginationParams<T> {
  data: T[];
  itemsPerPage: number;
}

export const usePagination = <T>({ data, itemsPerPage }: UsePaginationParams<T>) => {
  const [page, setPage] = useState(1);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [data, page, itemsPerPage]);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  return {
    page,
    setPage,
    paginatedData,
    pageCount
  };
};
