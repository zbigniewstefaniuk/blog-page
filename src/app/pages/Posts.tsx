import React from 'react';
import { useLocation } from 'react-router-dom';
import { useFetchPostWithCommentsQuery } from '../features/posts-api-slice';

const Posts = () => {
  const location = useLocation();

  // @ts-ignore
  const { postIdx = 1 }: { postId: number | undefined } = location?.state;
  const { data = [], isFetching } = useFetchPostWithCommentsQuery(postIdx);
  console.log(data);
  console.log(isFetching);

  const renderComments = ({
    id: commentID,
    name,
    email,
    body: comment,
  }: {
    id: number;
    name: string;
    email: string;
    body: string;
  }) => {
    return (
      <div key={commentID}>
        <span>{name}</span>
        <span>{email}</span>
        <p>{comment}</p>
      </div>
    );
  };

  const isThereComments = isFetching ? 'Laoding coomments...' : data?.map(renderComments);
  return <div>{isThereComments}</div>;
};

export default Posts;
