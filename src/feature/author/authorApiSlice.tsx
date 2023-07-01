import { apiSlice } from '../../app/api/apiSlice';
import { Author } from '../../types';

export const authorApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAuthor: builder.query<Author, string>({
      query: (authorId) => `/authors/${authorId}`,
      providesTags: ['Author'],
    }),

    getAllAuthor: builder.query<Author[], void>({
      query: () => '/authors',
      providesTags: ['Authors'],
    }),
  }),
});

export const { useGetAuthorQuery, useGetAllAuthorQuery } = authorApiSlice;
