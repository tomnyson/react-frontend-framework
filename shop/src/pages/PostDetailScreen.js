import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAPI, putAPI, deleteAPI } from "../utils/api"
import { API } from "../utils/const"
import Post from "../components/post-new/Post"

const PostDetailScreen = () => {
  const [post, setPost] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchAPI()
  }, [id])

  const fetchAPI = async () => {
    const result = await getAPI(API + `/${id}`)
    // check dữ dữ liệu trước khi lấy
    console.log("result", result)
    if (result) {
      setPost(result)
    }
  }
  return <Post {...post} />
}

export default PostDetailScreen
