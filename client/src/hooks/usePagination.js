// React
import { useMemo } from 'react';

// Custom Hooks
import useQueryParams from './useQueryParams';

const usePagination = ({ data, perPage, pageQueryParam = 'page' }) => {
  const queryParams = useQueryParams();
  const page = parseInt(queryParams.get(pageQueryParam), 10) || 1;

  const memoizedPaginationData = useMemo(() => {
    const sliceStart = (page - 1) * perPage;
    const sliceEnd = page * perPage;

    const displayableItems = data.slice(sliceStart, sliceEnd);
    const pagesCount = Math.ceil(data.length / perPage);

    return { page, displayableItems, pagesCount };
  }, [data, perPage, page]);

  return memoizedPaginationData;
};

export default usePagination;
