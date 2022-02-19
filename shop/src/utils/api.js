import axios from "axios"

export const getAPI = async (url, payload = {}) => {
  const qs = Object.keys(payload)
    .map((key) => `${key}=${payload[key]}`)
    .join("&")
  const response = await axios
    .get(`${url}?${qs}`, {
      headers: {
        Authorization: localStorage.getItem("TOKEN")
          ? `Bearer ${localStorage.getItem("TOKEN")}`
          : null,
      },
    })
    .catch((err) => console.error(err))
  if (response && response.status === 200) {
    return response.data
  }
  return undefined
}

export const deleteAPI = async (url) => {
  const response = await axios
    .delete(url, {
      headers: {
        Authorization: localStorage.getItem("TOKEN")
          ? `Bearer ${localStorage.getItem("TOKEN")}`
          : null,
      },
    })
    .catch((err) => console.error(err))
  return response
}

export const postAPI = async (url, payload) => {
  const response = await axios
    .post(url, payload, {
      headers: {
        Authorization: localStorage.getItem("TOKEN")
          ? `Bearer ${localStorage.getItem("TOKEN")}`
          : null,
      },
    })
    .catch((err) => {
      if (err.response) {
        return err.response
      }
      console.log(err)
    })
  return response
}

export const putAPI = async (url, payload) => {
  const response = await axios
    .put(url, payload, {
      headers: {
        Authorization: localStorage.getItem("TOKEN")
          ? `Bearer ${localStorage.getItem("TOKEN")}`
          : null,
      },
    })
    .catch((err) => console.error(err))
  return response
}
