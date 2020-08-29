import axios from 'axios';

const baseURL = 'http://localhost:1234';
export const getArticles = async () => {
  try {
    const response = await axios.get(`${baseURL}/blogs`);
    const { data } = response;
    return data;
  } catch (error) {
    console.log('Some error ocurred with getArticles func', error);
  }
};

export const getArticle = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/blogs/${id}`);
    const { data } = response;
    return data;
  } catch (error) {}
};
