import { apiSlice } from '../../app/api/apiSlice';
import { LoginAttributes, LoginResponse } from '../../types';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginAttributes>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useLogoutMutation, useLoginMutation } = authApiSlice;
