import axios from "axios";

type MethodType = 'post' | 'get' | 'put' | 'delete';

const callAPI = (method: MethodType) => (apiUrl: string, params?: any) => {
  const url = new URL(apiUrl);
  if (method === 'get' && params && Object.keys(params).length) {
    Object.keys(params).forEach(key => {
      if (params[key] != null) {
        url.searchParams.append(key, encodeURIComponent(params[key]));
      }
    });
  }
  console.log('params', params)
  return axios({
    method,
    url: url.toString(),
    data: params,
    headers: {
      'Content-Type': 'application/json',
      // Authorization: getUserToken() ? `Bearer ${getUserToken()}` : '',
    },
  })
    .then(async response => ({
      status: response.status,
      body: response,
    }))
    .catch(e => {
      if (e?.response?.status) return e.response;
      throw e;
    });
}
export const getAPI = callAPI('get')
export const postAPI = callAPI('post')