import axios from 'axios';

export const getAPI = async (url) => {
  const response = await axios.get(url).catch((err) => console.error(err));
  if (response && response.status === 200) {
    return response.data;
  }
  return undefined;
};
