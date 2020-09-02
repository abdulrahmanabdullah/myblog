import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

import usePost from '../hooks/usePosts';
import CardComponent from '../components/CardComponent';
import BookmarkProvider from '../context/BookmarkProvider';
import Bookmark from '../components/Bookmark';

// Home page to display 📄
const Home = () => {
  // Hooks 🎣 to fetch articles from DB 📦
  const { posts } = usePost();
  return (
    <>
      <BookmarkProvider>
        <Container maxWidth='lg'>
          {/* To display bookmarks articles 🥰👏🏻 */}
          <Bookmark />
          <Grid container spacing={8}>
            {/* check posts not equal 0 or null */}
            {posts.length > 0
              ? posts.map((post) => (
                  <Grid item xs={12} sm={6} md={4} key={post._id}>
                    <CardComponent id={post._id} post={post} />
                  </Grid>
                ))
              : null}
          </Grid>
        </Container>
      </BookmarkProvider>
    </>
  );
};
export default Home;
