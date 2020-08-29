import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useArticle from '../../hooks/useArticle';
import useStyles from './PostStyle';

// View for Article page.
const PostPage = () => {
  const styles = useStyles();
  const articleId = useParams();
  const { article } = useArticle(articleId.postId);
  // Convert date to day, month, year
  const convertDate = new Date(article.createdAt).toDateString();
  return (
    <div className={styles.cArticle}>
      {/* header cover image and home button and date & est time */}
      <div
        className={styles.imageCover}
        style={{
          backgroundImage: `url(https://i.imgur.com/v0ae8WM.png)`,
        }}
      >
        {/* Home link and top decorator container */}
        <div className={styles.navigateBlock}>
          <Link to='/' className={styles.cHomeLink}>
            <span style={{ borderTop: '5px solid rgba(97, 111, 57, 1)' }}>
              H
            </span>
            ome
          </Link>
          {/* End home link */}
        </div>
        {/*  estimate read and date block  */}
        <div className={styles.estDateBlock}>
          <p className={styles.estDateStyle}>
            {convertDate}
            <span className={styles.est}>
              {article.estimate_reading} minutes read
            </span>
          </p>
        </div>
        {/* End estimate read and date block  */}
      </div>
      {/* title and author */}
      <div className={styles.titleContainer}>
        <div className={styles.titleBlock}>
          <h3 className={styles.title}>{article.title} </h3>
          <h6 className={styles.author}>By Abdulrahman </h6>
        </div>
        {/* End title and author tag */}
      </div>
      {/* Content */}
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
        {/* End content tag */}
      </div>
      {/* Share box  */}
      <div className={styles.shareBox}>{/* End share box */}</div>
    </div>
  );
};

export default PostPage;
