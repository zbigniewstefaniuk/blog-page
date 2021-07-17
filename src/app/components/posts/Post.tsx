import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetchPostWithCommentsQuery } from '../../features/posts-api-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addComment } from '../../features/add-comment/post-add-comment';
import Input from '../atoms/Input';

const Post = () => {
  const location = useLocation();
  const [input, setInput] = useState('');

  // @ts-ignore
  const { postIdx = 1 }: { postId: number | undefined } = location?.state;
  const { data = [], isFetching } = useFetchPostWithCommentsQuery(postIdx);

  const userComments = useAppSelector((state) => state.addComment);
  const dispatch = useAppDispatch();

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
  }): JSX.Element => (
    <div key={commentID}>
      <span>{name}</span>
      <br />
      <span>{email}</span>
      <br />
      <p>{comment}</p>
      <br /> <br />
    </div>
  );

  const isThereComments = isFetching ? 'Laoding coomments...' : data?.map(renderComments);

  const renderUserComments = ({ postId, body }: { postId: number; body: string }): JSX.Element => {
    return postId === postIdx ? <div key={Math.random()}>{body}</div> : (null as any);
  };

  const handleAddComment = () => {
    dispatch(addComment({ postId: postIdx, body: input }));
  };

  console.log(userComments);
  return (
    <section>
      {isThereComments}
      {userComments.map(renderUserComments)}
      <div>
        <Input inputText={input} setInputText={setInput} onSubmit={handleAddComment} label="Add your comment!" />
      </div>
    </section>
  );
};

export default Post;
