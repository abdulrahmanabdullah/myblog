import { useState, useContext } from 'react';

// في البداية تاكد هل تم حفظها في الذاكرة ، اذا نعم خلي القيمة صواب اذا لا خليها خطأ
function checkIsSaved(id) {
  const post = localStorage.getItem(id); // this will return true or false .
  if (post !== null) {
    console.log(post);
    return true;
  }
  return false;
}

function saveContent(id) {
  // this func will invoke after check is saved or not
  localStorage.setItem(id, JSON.stringify(id, null, 2));
}
const useBookmark = (id) => {
  const [isSave, setIsSave] = useState(false);
  // checkIsSaved(id);
  // if (checkIsSaved(id) === true) {
  //   setIsSave(true);
  // }
  const handleSaveBookmark = (id) => {
    console.log('❤️ is clicked ');
    // if (checkIsSaved(id) === true) {
    //   setIsSave(true);
    // } else {
    //   saveContent(id);
    //   setIsSave(false);
    // }
  };

  return { isSave, handleSaveBookmark };
};

export default useBookmark;
