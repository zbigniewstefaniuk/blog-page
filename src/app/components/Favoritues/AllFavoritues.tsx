import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import ROUTES from '../../utils/routes';
import SinglePost from '../posts/SinglePost';
import styles from '../../styles/favoritues/favoritues.style.module.css';

const AllFavoritues = () => {
  const favoritues = useAppSelector((state) => state.addToFavorite);

  const renderFavoritues = ({ postId }: { postId: number }) => {
    return (
      <Link
        key={Math.random() * favoritues.length}
        to={{
          pathname: ROUTES.post,
          state: {
            postIdx: postId,
          },
        }}
        className={styles.favPostContainer}
      >
        <div className={styles.favPost}>
          <SinglePost postIdx={postId} />
        </div>
      </Link>
    );
  };
  console.log(favoritues);
  return (
    <div className={styles.favorituesMain}>
      <h1>Click on post to see details</h1>
      {favoritues.map(renderFavoritues)}
    </div>
  );
};

export default AllFavoritues;
