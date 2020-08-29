import React, { createContext, useReducer } from 'react';
import BookmarkReducer, { sumArticles } from './bookmarkReducer';

export const BookmarkContext = createContext();

const articlesInLocalStorage = localStorage.getItem('articles')
  ? JSON.parse(localStorage.getItem('articles'))
  : [];

//Global state
const initialState = {
  bookmarks: articlesInLocalStorage,
  ...sumArticles(articlesInLocalStorage),
};

function BookmarkProvider({ children }) {
  const [state, dispatch] = useReducer(BookmarkReducer, initialState);

  const addToFavorite = (payload) => {
    dispatch({ type: 'ADD', payload });
  };

  const removeFromFavorite = (payload) => {
    dispatch({ type: 'REMOVE', payload });
  };
  const contextValue = {
    ...state,
    addToFavorite,
    removeFromFavorite,
  };
  return (
    <BookmarkContext.Provider value={contextValue}>
      {children}
    </BookmarkContext.Provider>
  );
}

export default BookmarkProvider;
