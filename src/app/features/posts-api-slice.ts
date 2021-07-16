import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints(builder) {
    return {
      //   Getting All posts
      fetchPosts: builder.query<Posts[], number | void>({
        query() {
          return `/`;
        },
      }),

      //   Get single post with defalut id = 1
      fetchPost: builder.query<Posts, number | void>({
        query(id = 1) {
          return `/${id}`;
        },
      }),
    };
  },
});

export const { useFetchPostsQuery, useFetchPostQuery } = apiSlice;
