import { apiSlice } from '../../app/api/apiSlice';
import {
  Author,
  AuthorNames,
  GetAllRequestQuery,
  PaginationResponse,
} from '../../types';

export const authorApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * Get author
     */
    getAuthor: builder.query<Author, string>({
      query: (authorId) => `/authors/${authorId}`,
      providesTags: ['Author'],
    }),

    /**
     * Get all author names
     */
    getAuthorNames: builder.query<AuthorNames[], void>({
      query: () => `/authors/names`,
      providesTags: ['Author'],
    }),

    /**
     * Get all author
     */
    getAllAuthor: builder.query<PaginationResponse<Author>, GetAllRequestQuery>(
      {
        query: ({ page, orderBy, orderDir, filterName, filterValue }) => ({
          url: `authors?page=${page}&orderBy=${orderBy}&orderDir=${orderDir}&name=${filterName}&value=${filterValue}`,
        }),
        providesTags: ['Authors'],
      }
    ),
  }),
});

export const {
  useGetAuthorQuery,
  useGetAllAuthorQuery,
  useGetAuthorNamesQuery,
} = authorApiSlice;
