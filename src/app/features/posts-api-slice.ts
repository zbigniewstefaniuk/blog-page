import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://jsonplaceholder.typicode.com/';

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
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
          return `posts/`;
        },
      }),

      //   Getting All posts
      fetchSinglePost: builder.query<Posts, number | void>({
        query(id = 1) {
          return `posts/${id}`;
        },
      }),

      //   Get single post with comments - defalut id = 1
      fetchPostComments: builder.query<PostComments, number | void>({
        query(id = 1) {
          return `posts/${id}/comments`;
        },
      }),

      fetchUser: builder.query<User, number | void>({
        query(id = 1) {
          return `users/${id}`;
        },
      }),
    };
  },
});

export const { useFetchPostsQuery, useFetchUserQuery, useFetchPostCommentsQuery, useFetchSinglePostQuery } = apiSlice;
