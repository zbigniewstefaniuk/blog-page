import React from 'react';
import { useFetchPostsQuery } from '../../features/posts-api-slice';
import User from './User';

import styles from '../../styles/home/post.styles.module.css';
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';

const PostsList = () => {
  const { data = [], isFetching } = useFetchPostsQuery();

  const renderPosts = ({
    userId,
    id,
    title,
    body,
  }: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }): JSX.Element => {
    return (
      <Link
        key={id}
        to={{
          pathname: ROUTES.post,
          state: {
            postIdx: id,
          },
        }}
      >
        <div className={styles.postContainer}>
          <div className={styles.postContainerHeader}>
            <User userId={userId} />
            <h1 className={styles.postContainerTitle}>{title}</h1>
          </div>
          <p className={styles.postDescription}>{body}</p>
        </div>
      </Link>
    );
  };

  const isData = isFetching ? 'Loading...' : data.map(renderPosts);
  return <div>{isData}</div>;
};

export default PostsList;
