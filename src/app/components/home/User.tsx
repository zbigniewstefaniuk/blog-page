import React from 'react';
import { useFetchUserQuery } from '../../features/posts-api-slice';

const User = ({ userId }: { userId: number }) => {
  const { data = {}, isFetching } = useFetchUserQuery(userId);
  const { name }: { name: string } = data;
  return <div>{name ?? ''}</div>;
};

export default User;
