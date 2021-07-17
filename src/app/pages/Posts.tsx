import React from 'react';
import { useFetchPostWithCommentsQuery } from '../features/posts-api-slice';

const Posts = () => {
  const { data = [], isFetching } = useFetchPostWithCommentsQuery(2);

  return <div>Single post</div>;
};

export default Posts;
