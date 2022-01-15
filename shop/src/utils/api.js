import axios from 'axios';

export const getAPI = async (url) => {
  const response = await axios.get(url).catch((err) => console.error(err));
  if (response && response.status === 200) {
    return response.data;
  }
  return undefined;
};

export const deleteAPI = async (url) => {
  const response = await axios.delete(url).catch((err) => console.error(err));
    return response
};

export const postAPI= async (url, payload) => {
  const response = await axios.post(url, payload).catch((err) => console.error(err));
  return response
};

export const putAPI = async (url, payload) => {
  const response = await axios.put(url, payload).catch((err) => console.error(err));
  return response
};
