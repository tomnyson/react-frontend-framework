import React, { useState, useEffect, useContext } from "react"
import { getAPI, putAPI, deleteAPI } from "../utils/api"
import { API } from "../utils/const"
import ListPost from "../components/post-new/ListPost"
import { ThemeContext } from "../context/themContext"
import styled from "styled-components"

const PostScreen = () => {
  const [data, setData] = useState([])
  const { value, setValue } = useContext(ThemeContext)
  console.log("value", value)
  useEffect(() => {
    fetchAPI()
  }, [])

  const fetchAPI = async () => {
    const result = await getAPI(API)
    // check dữ dữ liệu trước khi lấy
    if (result) {
      setData(result)
    }
  }

  const onSubmitEdit = async (data) => {
    const response = await putAPI(`${API}/${data.id}`, data)
    if (response && response.status === 200) {
      alert("cập nhật thành công")
      // setSelectedPost(undefined)
      fetchAPI()
    }
  }

  const onRemove = async (id) => {
    const response = await deleteAPI(`${API}/${id}`)
    if (response && response.status === 200) {
      alert("xoá thành công")
      // load lại list
      fetchAPI()
    }
  }
  const oneChangeTheme = () => {
    setValue({ ...value, darkMode: !value.darkMode })
  }

  const SWrapper = styled.div``

  return (
    <SWrapper>
      <button onClick={oneChangeTheme}>dark mode</button>
      <ListPost posts={data} onEdit={onSubmitEdit} onRemovePost={onRemove} />
    </SWrapper>
  )
}

export default PostScreen
