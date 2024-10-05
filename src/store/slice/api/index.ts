import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const userSliceApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://booking-driver-production.up.railway.app/api', prepareHeaders: (headers: Headers) => {
    const token = localStorage.getItem('token');
    if (token) headers.set("authorization", `Bearer ${token}`);
    return headers
  } }),
  endpoints: (builder) => ({
    getAllUser: builder.query<any, string>({
        query: (page) => `/admin/get-all-user?pageNo=${page}&pageSize=10`,
      }),  
    sendSignIn: builder.mutation<any, any>({
        query: (body: any) => ({
            url: '/auth/login',
            method: 'POST',
            body: body
        }),
        transformResponse: (response: { data: any }) => response.data,
        transformErrorResponse: (
            response: { status: string | number },
            meta,
            arg
          ) => response.status,
    }),
    //api/admin/26/upgrade-mechanic-to-customer
acceptMechanic: builder.mutation<any, any>({
    query: (id: string) => ({
        url: `/admin/${id}/upgrade-mechanic-to-customer`,
        method: 'POST',
    }),
    transformResponse: (response: { data: any }) => response.data,
    transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => response.status,
})
  }),

})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSendSignInMutation, useGetAllUserQuery, useAcceptMechanicMutation } = userSliceApi