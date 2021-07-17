import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetchPostCommentsQuery, useFetchSinglePostQuery } from '../../features/posts-api-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addComment } from '../../features/add-comment/post-add-comment';
import Input from '../atoms/Input';
import styles from '../../styles/posts/post.style.module.css';

const Post = () => {
  const location = useLocation();
  const [input, setInput] = useState('');

  //   Controliing state
  const userComments = useAppSelector((state) => state.addComment);
  const dispatch = useAppDispatch();

  // @ts-ignore
  const { postIdx = 1 }: { postId: number | undefined } = location?.state;
  const { data = [], isFetching } = useFetchPostCommentsQuery(postIdx);

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
      <p className={styles.commentBody}>{comment}</p>
      <br /> <br />
    </div>
  );

  const isThereComments = isFetching ? 'Laoding coomments...' : data?.map(renderComments);

  const renderUserComments = ({ postId, body }: { postId: number; body: string }): JSX.Element => {
    return postId === postIdx ? (
      <div key={Math.random()} className={styles.commentBody}>
        {body}
      </div>
    ) : (
      (null as any)
    );
  };

  const handleAddComment = () => {
    dispatch(addComment({ postId: postIdx, body: input }));
  };

  return (
    <section>
      <div className={styles.post}>
        <SinglePost postIdx={postIdx} />
        <div className={styles.commentsContainer}>
          <h3 className={styles.commentsTitle}>User Comments</h3>
          <hr />
          {isThereComments}
          {userComments.map(renderUserComments)}

          <div>
            <Input inputText={input} setInputText={setInput} onSubmit={handleAddComment} label="Add your comment!" />
          </div>
        </div>
      </div>
    </section>
  );
};

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

export default Post;
