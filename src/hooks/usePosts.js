import { useState, useEffect } from 'react';
import { getArticles } from '../api';

// hook for get posts from db .
const usePost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch articles from DB
    (async () => {
      const _posts = await getArticles();
      setPosts(_posts);
    })();
  }, []);
  return {
    posts,
  };
};

export default usePost;
