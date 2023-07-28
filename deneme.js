import axios from 'axios';
export default function deneme() {

  const getData = async (userId) => {
    try {
      const getConfig = {
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/users/${userId}`,
      };

      const { data: userData } = await axios.request(getConfig);

      const postConfig = {
        method: 'get',
        url: `https://jsonplaceholder.typicode.com/posts?/userId=${userId}`,
      };

      const { data: userPost } = await axios.request(postConfig);

      const mergedData = { ...userData, posts: userPost };
      return mergedData;
    } catch (error) {
      return 'error';
    }
  }

  return { getData }
}