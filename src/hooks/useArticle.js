import { useState, useEffect } from 'react';
import { getArticle } from '../api';

// hook to get article from db, id = useParams route which is blogId as a parameter in main route.
const useArticle = (id) => {
  const [article, setArticle] = useState({});
  useEffect(() => {
    (async () => {
      const _article = await getArticle(id);
      setArticle(_article);
    })();
  }, []);
  return {
    article,
  };
};
export default useArticle;
