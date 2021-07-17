import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetchPostCommentsQuery } from '../../features/posts-api-slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addComment } from '../../features/add-comment/post-add-comment';
import { addToFavorite } from '../../features/favourites/favourites';
import Input from '../atoms/Input';
import styles from '../../styles/posts/post.style.module.css';
import SinglePost from './SinglePost';

const Post = () => {
  const location = useLocation();
  const [input, setInput] = useState<string>('');
  const [postAddedToFav, setPostAddedToFav] = useState<boolean>(false);

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

  const handleAddToFavorites = () => {
    setPostAddedToFav(!postAddedToFav);
    dispatch(addToFavorite({ postId: postIdx }));
  };

  const isPostAddedMessage = postAddedToFav && 'Post has been added  to favoritues';
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
        <button onClick={handleAddToFavorites}>Add This Post To Favotite</button>
        <p>{isPostAddedMessage}</p>
      </div>
    </section>
  );
};

export default Post;
