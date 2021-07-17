import React from 'react';
import { useFetchSinglePostQuery } from '../../features/posts-api-slice';

const SinglePost = ({ postIdx }: { postIdx: number }) => {
  const { data: postData = {}, isFetching: isPostFetching, isError } = useFetchSinglePostQuery(postIdx);
  const {
    userId,
    title,
    body,
  }: {
    userId: number;
    title: string;
    body: string;
  } = postData;
  const renderPost = (
    <div>
      <h1>Post Title: {title}</h1>
      <hr />
      <span>{body}</span>
    </div>
  );

  const isPost = isPostFetching
    ? 'Loadding  post...'
    : isError
    ? 'Something went wrong we could now load post'
    : renderPost;

  return <div>{isPost}</div>;
};

export default SinglePost;
