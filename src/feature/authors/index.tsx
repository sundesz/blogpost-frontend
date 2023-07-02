import { useState } from 'react';
import AppPagination from '../Pagination';
import { useGetAllAuthorQuery } from './authorApiSlice';
import Loading from '../../components/Loading';
import ErrorPage from '../../components/ErrorPage';
import AuthorList from './AuthorList';
import { Container } from 'react-bootstrap';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import Filter from '../Filter';

const Authors = () => {
  const { pageNumber, filterName, filterValue, orderBy, orderDir } =
    useSearchQuery({});

  const PAGE_TYPE = 'authors';
  const [page, setPage] = useState<number>(Number(pageNumber));
  const [filterColumn, setFilterColumn] = useState<string>(filterName);
  const [filterText, setFilterText] = useState<string>(filterValue);

  const {
    data: authorData,
    isLoading,
    isError,
    error,
  } = useGetAllAuthorQuery({
    page,
    filterName: filterColumn,
    filterValue,
    orderBy,
    orderDir,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    <ErrorPage error={error} />;
  }

  if (!authorData?.data) {
    return <div>No data </div>;
  }

  return (
    <Container className="py-5">
      <div className="page-header">Authors</div>

      <Filter
        pageType={PAGE_TYPE}
        filterText={filterText}
        filterColumn={filterColumn}
        setFilterColumn={setFilterColumn}
        setFilterText={setFilterText}
        setPage={setPage}
      />

      <AppPagination
        pageType={PAGE_TYPE}
        totalPage={authorData.totalPage}
        currentPage={authorData.currentPage}
        setPage={setPage}
      />

      <AuthorList authors={authorData.data} />

      <AppPagination
        pageType={PAGE_TYPE}
        totalPage={authorData.totalPage}
        currentPage={authorData.currentPage}
        setPage={setPage}
      />
    </Container>
  );
};

export default Authors;
