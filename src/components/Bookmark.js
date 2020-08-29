import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { BookmarkContext } from '../context/BookmarkProvider';
import CardComponent from './CardComponent';
export default function BookmarkComponent() {
  const { bookmarks } = useContext(BookmarkContext);
  return (
    <>
      {bookmarks.length && (
        <Container fluid={true}>
          <hr />
          <h2 style={{ color: 'white' }}>Bookmarked Articles</h2>
          <Grid container spacing={3}>
            {bookmarks.map((bookmark) => (
              <Grid item xs sm md={4}>
                <CardComponent id={bookmark._id} post={bookmark} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
}
