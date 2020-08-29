import React, { useContext } from 'react';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import ShareTwoToneIcon from '@material-ui/icons/ShareTwoTone';
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import Toast from './Toast';
import { Link } from 'react-router-dom';
import useToast from '../hooks/useToast';
import useBookmark from '../hooks/useBookmark';
import { useStyles } from './cardComponentStyles';
import { BookmarkContext } from '../context/BookmarkProvider';

// Card component
const CardComponent = ({ post, id }) => {
  //Override styles
  const styles = useStyles();

  const { bookmarks, addToFavorite, removeFromFavorite } = useContext(
    BookmarkContext
  );

  const isInLocalStorage = (postId) => {
    if (bookmarks.find((item) => item._id === postId)) return true;
    return false;
  };
  // return open state, message and serveity toast component.
  const toast = useToast();
  // bookmark state
  // const bookmark = useBookmark(id);
  const [isSaved, setIsSaved] = React.useState(false);
  // const _post = localStorage.getItem(post.title);
  // if (_post) {
  //   console.log(_post);
  // }
  // set article as a saved and unsaved articles .
  const handleBookmarks = (e) => {
    addToFavorite(post);
    setIsSaved(!isSaved);
  };
  // Convert date to day, month, year
  const convertDate = new Date(post.createdAt).toDateString();
  return (
    <>
      <Container className={styles.container}>
        <Grid container direction='row' className={styles.cCard} spacing={0}>
          <Grid item xs={2} ms={2} className={styles.cardDate}>
            {/* Date & estimate time */}
            <Grid
              container
              direction='row'
              alignContent='center'
              className={styles.cardDateContent}
            >
              <Grid item xs={4} ms={6} md={6}>
                <p className={styles.cardDateContentDate}>{convertDate}</p>
              </Grid>
              <Grid item xs={4} ms={6} md={6}>
                <p
                  variant='h5'
                  className={styles.cardDateContentEst}
                  style={{ color: '#a7d129' }}
                >
                  {post.estimate_reading} minutes read
                </p>
              </Grid>
            </Grid>
            {/* End date & est grid tag ↓ */}
          </Grid>
          {/* card content, title and author */}
          <Grid item xs={1} ms={1} md={1}>
            <div className={styles.cardBodyBorder}></div>
          </Grid>
          <Grid item xs={8} ms={8} md={8}>
            {/* Grid container for title and author */}
            <div className={styles.cardBody}>
              <Link to={`/blog/${id}`}>
                <p className={styles.cardBodyTitle}>{post.title}</p>
              </Link>
              <p className={styles.cardBodyAuthor}>by Abdulrahman</p>
            </div>
          </Grid>
        </Grid>
        {/* share icons box */}
        <div className={styles.cCardIcons}>
          {/* Share content  */}
          <ShareTwoToneIcon
            fontSize='large'
            onClick={() => toast.shareContent(id)}
          />
          {/* bookmark  */}
          {isInLocalStorage(id) === true ? (
            <FavoriteSharpIcon
              fontSize='large'
              onClick={() => removeFromFavorite(post)}
            />
          ) : (
            <FavoriteBorderSharpIcon
              fontSize='large'
              onClick={() => addToFavorite(post)}
            />
          )}
        </div>
        <Toast
          open={toast.toastState.open}
          handleClose={toast.handleClose}
          severity={toast.toastState.style}
          toastMessage={toast.toastState.message}
        />
      </Container>
    </>
  );
};
export default CardComponent;
