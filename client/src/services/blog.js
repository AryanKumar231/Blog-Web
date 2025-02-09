import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/api/v1/blogs',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token")
            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        writeBlog: builder.mutation({
            query: (form) => ({
                url: "/create-post",
                method: "POST",
                body: form
            })
        }),
        editBlog: builder.mutation({
            query: ({formData, id}) => ({
                url: `/edit-post/${id}`,
                method: "PUT",
                body: formData
            })
        }),
        getAllBlog: builder.query({
            query: () => '/all-post',
        }),
        getSingleBlog: builder.query({
            query: (id) => `/single-post/${id}`
        }),
        getUserBlog: builder.query({
            query: () => `/user-post`
        }),
        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/delete-post/${id}`,
                method: "DELETE"
            })
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useWriteBlogMutation, useEditBlogMutation, useGetAllBlogQuery, useGetSingleBlogQuery, useGetUserBlogQuery, useDeleteBlogMutation } = blogApi