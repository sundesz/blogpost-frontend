import { Container } from 'react-bootstrap';
import ErrorPage from '../../components/ErrorPage';
import Loading from '../../components/Loading';
import { useGetAllBlogQuery } from './blogApiSlice';
import { useSearchQuery } from '../../hooks/useSearchQuery';
import { useState } from 'react';
import Filter from '../Filter';
import AppPagination from '../Pagination';
import BlogList from './BlogList';

const Blogs = () => {
  const { pageNumber, filterName, filterValue, orderBy, orderDir } =
    useSearchQuery({});

  const PAGE_TYPE = 'blogs';
  const [page, setPage] = useState<number>(Number(pageNumber));
  const [filterColumn, setFilterColumn] = useState<string>(filterName);
  const [filterText, setFilterText] = useState<string>(filterValue);

  const {
    data: blogData,
    isLoading,
    isError,
    error,
  } = useGetAllBlogQuery({
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
    return <ErrorPage error={error} />;
  }

  if (!blogData?.data) {
    return <div>No data </div>;
  }

  return (
    <Container className="py-5">
      <div className="page-header">Blogs</div>

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
        totalPage={blogData.totalPage}
        currentPage={blogData.currentPage}
        setPage={setPage}
      />

      <BlogList blogs={blogData.data} />

      <AppPagination
        pageType={PAGE_TYPE}
        totalPage={blogData.totalPage}
        currentPage={blogData.currentPage}
        setPage={setPage}
      />
    </Container>
  );
};

export default Blogs;
