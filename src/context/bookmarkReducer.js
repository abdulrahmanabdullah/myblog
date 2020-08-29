//TODO::
// Save content in local storage here
function saveItLocal(articles) {
  localStorage.setItem(
    'articles', // key name on local storage
    JSON.stringify(articles.length > 0 ? articles : []) // if object already saved return it
  );
}
// create sum items methods to calculate how many articles marked as bookmark.
export function sumArticles(articles) {
  saveItLocal(articles);
  let totalArticles = articles.length;
  return { totalArticles };
}
function BookmarkReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      // To avoiding duplicated same articles in local storage.
      if (!state.bookmarks.find((item) => item._id === action.payload._id)) {
        state.bookmarks.push({
          ...action.payload,
        });
      }
      return {
        ...state,
        bookmarks: [...state.bookmarks],
        ...sumArticles(state.bookmarks),
      };
    }
    case 'REMOVE': {
      return {
        ...state,
        // copy old array state then return new array without specific post.
        bookmarks: [
          ...state.bookmarks.filter((item) => item._id !== action.payload._id),
        ],
        // Pass new array to calculate total favorite articles in local storage.
        ...sumArticles(
          state.bookmarks.filter((item) => item._id !== action.payload._id)
        ),
      };
    }
    default:
      return state;
  }
}

export default BookmarkReducer;
