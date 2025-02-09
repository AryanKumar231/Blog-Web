import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authenticationApi = createApi({
  reducerPath: 'authenticationApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://blog-web-4ryv.onrender.com' }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (form) => ({
        url:"/register",
        method:"POST",
        body:form
      })
    }),
    login:builder.mutation({
        query:(form)=>({
            url:'/login',
            method:"POST",
            body:form
        })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useSignupMutation,useLoginMutation } = authenticationApi