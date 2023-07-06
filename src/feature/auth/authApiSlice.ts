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

      transformResponse: (responseData: LoginResponse) => {
        const profilePic = responseData.profilePic
          ? `${process.env.VITE_BACKEND_URL}/images/profile_pictures/${responseData.profilePic}.png`
          : null;

        return { ...responseData, profilePic };
      },
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
