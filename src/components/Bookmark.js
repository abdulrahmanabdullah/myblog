import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { BookmarkContext } from '../context/BookmarkProvider';

import CardComponent from './CardComponent';
export default function BookmarkComponent() {
  const { bookmarks, totalArticles } = useContext(BookmarkContext);
  return (
    <>
      {bookmarks.length && (
        <>
          <div style={{ padding: '10px' }} />
          <h2 style={{ color: 'white' }}>
            Bookmarked Articles {totalArticles}
          </h2>
          <Grid container spacing={8}>
            {bookmarks.map((bookmark) => (
              <Grid item xs={12} sm={6} md={4} key={bookmark._id}>
                <CardComponent id={bookmark._id} post={bookmark} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
}
