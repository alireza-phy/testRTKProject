import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { User } from "./modules/user.model";
import { Post } from "./modules/post.model";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes:['Post'],
  endpoints: (builder) => ({
    // Users: builder.query<User[], void>({
    //   query: () => "/users",
    // }),
    // User: builder.query<User, number>({
    //   query: (id) => `/users/${id}`,
    // }),
    Posts: builder.query<Post[], void>({
      query: () => "/posts",
      providesTags: ['Post']
    }),
    Post: builder.query<Post, number>({
      query: (id) => `/posts/${id}`,
      providesTags: ['Post']
    }),
    addPost: builder.mutation<void, Post>({
      query: (user) => ({
        url: "/posts",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ['Post']
    }),
    updatePost: builder.mutation<void, Post>({
      query: ({ id, ...rest }) => ({
        url: `/posts/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ['Post']
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['Post']
    }),
  }),
});

export const {
  usePostsQuery,
  usePostQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;
