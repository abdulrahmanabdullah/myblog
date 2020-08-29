import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { BookmarkContext } from '../context/BookmarkProvider';
import CardComponent from './CardComponent';
export default function BookmarkComponent() {
  const { bookmarks } = useContext(BookmarkContext);
  return (
    <>
      {bookmarks.length && (
        <>
          <div style={{ padding: '10px' }} />
          <h2 style={{ color: 'white' }}>Bookmarked Articles</h2>
          <Grid container spacing={2}>
            {bookmarks.map((bookmark) => (
              <Grid item xs={12} sm={6} md={3} key={bookmark._id}>
                <CardComponent id={bookmark._id} post={bookmark} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
}
