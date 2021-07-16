import React from 'react';
import { useFetchPostQuery } from '../features/posts-api-slice';

const Home = () => {
  // @ts-ignore
  const { data = [], isFetching } = useFetchPostQuery(4);

  console.log('hello', data);
  return <div>Home Page with posts</div>;
};

export default Home;
