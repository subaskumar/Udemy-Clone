import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import REACT_APP_BASE_URL from "../../.env"

export const authApis = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  // tagTypes: ['userProfile'],
  endpoints: (builder) => ({
    userRegistration: builder.mutation({
      query: (body) => ({
        url: 'account/api/client/v1/user-create/',
        method: 'POST',
        body
      }),
    }),

    logInUserProfile: builder.query({
      query: () => ({
        url: 'account/api/client/v1/login-user-profile/',
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      }),
      // providesTags: ['userProfile']

    }),

    userLogIn: builder.mutation({
      query: (body) => ({
        url: 'account/api/client/v1/user-login/',
        method: 'POST',
        body
      }),
      // invalidatesTags: ['userProfile']
    }),

    faceBookSignIn: builder.mutation({
      query: (body) => ({
        url: 'auth/convert-token/',
        method: 'POST',
        body
      }),
      // invalidatesTags: ['userProfile']
    }),

  }),
});


export const { 
  useUserLogInMutation,
  useFaceBookSignInMutation,
  useUserRegistrationMutation,
  useLogInUserProfileQuery 
} = authApis