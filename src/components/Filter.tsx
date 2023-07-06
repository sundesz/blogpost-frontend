import { useRef } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PageType } from '../types';
import { useAppSelector } from '../hooks/reduxToolkit';
import { selectCurrentUser } from '../feature/auth/authSlice';

interface FilterProps {
  pageType: PageType;
  filterText: string;
  filterColumn: string;
  orderBy: string;
  orderDir: string;
  orderOptions: { [key: string]: string };
  filterOptions: { [key: string]: string };
  setPage: (value: React.SetStateAction<number>) => void;
}

const Filter = ({
  pageType,
  filterText,
  filterColumn,
  orderBy,
  orderDir,
  orderOptions,
  filterOptions,
  setPage,
}: FilterProps) => {
  const navigate = useNavigate();
  const user = useAppSelector(selectCurrentUser);

  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const orderSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const orderValue = e.target.value;
    const lastIndex = orderValue.lastIndexOf('_');

    const orderBy = orderValue.substring(0, lastIndex);
    const orderDir = orderValue.substring(lastIndex + 1);

    setPage(() => 1);
    navigate({
      pathname: `/${pageType}`,
      search: `?orderBy=${orderBy}&orderDir=${orderDir}`,
    });
  };

  const orderValue =
    orderBy && orderDir ? `${orderBy}_${orderDir}` : 'updated_at_desc';

  const renderOrderOption = () => {
    const result = [];
    for (const key in orderOptions) {
      result.push(
        <option value={key} key={key}>
          {orderOptions[key]}
        </option>
      );
    }

    return result;
  };

  const renderFilterOption = () => {
    const result = [];
    for (const key in filterOptions) {
      result.push(
        <option value={key} key={key}>
          {filterOptions[key]}
        </option>
      );
    }

    return result;
  };

  const filterSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!inputRef.current || !selectRef.current) {
      return false;
    }
    const searchValue = inputRef.current.value;
    const searchColumn = selectRef.current?.value;

    if (filterText.trim()) {
      setPage(() => 1);
      navigate({
        pathname: `/${pageType}`,
        search: `?columnName=${searchColumn}&columnValue=${searchValue}`,
      });
    }
  };

  const filterInputKeyDownHandler = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (!inputRef.current || !selectRef.current) {
      return false;
    }
    const searchValue = inputRef.current?.value;
    const searchColumn = selectRef.current?.value;
    if (e.key === 'Enter') {
      setPage(() => 1);

      navigate({
        pathname: `/${pageType}`,
        search: `?columnName=${searchColumn}&columnValue=${searchValue}`,
      });
    }
  };

  return (
    <Stack
      className="border rounded p-3 search-filter"
      direction="horizontal"
      gap={3}
    >
      {user.role === 'author' && (
        <Button
          id="createNew"
          variant="primary"
          onClick={() => navigate(`/${pageType}/new`)}
        >
          Create new
        </Button>
      )}

      <div className="input-group">
        <span className="input-group-text">🔍</span>

        <select
          className="form-select"
          id="filterName"
          defaultValue={filterColumn}
          ref={selectRef}
          onChange={filterSelectHandler}
        >
          {renderFilterOption()}
        </select>

        <input
          id="filterValue"
          type="text"
          className="form-control flex-2"
          placeholder="search ..."
          defaultValue={filterText}
          ref={inputRef}
          onKeyDown={filterInputKeyDownHandler}
        />
      </div>

      <select
        className="form-select"
        id="order"
        value={orderValue}
        onChange={orderSelectHandler}
      >
        {renderOrderOption()}
      </select>
    </Stack>
  );
};

export default Filter;
