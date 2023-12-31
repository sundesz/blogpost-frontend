import { useSearchParams } from 'react-router-dom';
import { GetAllRequestQuery } from '../types';

export const useSearchQuery = ({
  page = 1,
  filterName = '',
  filterValue = '',
  orderBy = '',
  orderDir = '',
}: GetAllRequestQuery) => {
  const [searchParams] = useSearchParams();
  const pageNumber = searchParams.get('page') ?? page;
  const name = searchParams.get('columnName') ?? filterName; // table column name
  const value = searchParams.get('columnValue') ?? filterValue; // table column value
  const ordBy = searchParams.get('orderBy') ?? orderBy;
  const ordDir = searchParams.get('orderDir') ?? orderDir;

  return {
    pageNumber,
    filterName: name,
    filterValue: value,
    orderBy: ordBy,
    orderDir: ordDir,
  };
};
