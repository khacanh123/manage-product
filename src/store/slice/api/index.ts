import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export enum typeStore {
    mechanic = 'mechanic'
}
export const userSliceApi = createApi({
  reducerPath: 'userApi',
  tagTypes: [typeStore.mechanic],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://booking-driver-production.up.railway.app/api', prepareHeaders: (headers: Headers) => {
    const token = localStorage.getItem('token');
    if (token) headers.set("authorization", `Bearer ${token}`);
    return headers
  } }),
  endpoints: (builder) => ({
    getAllUser: builder.query<any, string>({
        query: (page) => `/admin/get-all-user?pageNo=${page}&pageSize=10`,
      }),  
      getListMechanic: builder.query<any, string>({
        query: (page) => `/admin/get-all-review-application?pageNo=${page}&pageSize=10`,
        providesTags: ()=> [{type: typeStore.mechanic, id: "LIST"}]
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
acceptMechanic: builder.mutation<any, string>({
    query: (id) => ({
        url: `/admin/${id}/upgrade-mechanic-to-customer`,
        method: 'POST',
    }),
    transformResponse: (response: { data: any }) => response.data,
    transformErrorResponse: (
        response: { status: string | number },
        meta,
        arg
      ) => response.status,
      invalidatesTags: ()=> [{type: typeStore.mechanic, id: 'LIST'}]
}),
  }),

})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSendSignInMutation, useGetAllUserQuery, useGetListMechanicQuery ,useAcceptMechanicMutation } = userSliceApi