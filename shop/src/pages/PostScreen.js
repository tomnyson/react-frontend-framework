import React,{useState, useEffect } from 'react'
import { getAPI, putAPI, deleteAPI } from '../utils/api'
import { API } from '../utils/const'
import ListPost from '../components/post-new/ListPost'

const PostScreen = () => {
  const [data, setData] = useState([])

  useEffect(()=> {
    fetchAPI()
  },[])

  const fetchAPI= async () => {
    const result = await getAPI(API);
    // check dữ dữ liệu trước khi lấy
    if(result) {
      setData(result)
    }
  }

  const onSubmitEdit = async (data) => {
    const response = await putAPI(`${API}/${data.id}`, data)
    if(response && response.status === 200) {
      alert('cập nhật thành công')
      // setSelectedPost(undefined)
      fetchAPI()
    }
  }

  const onRemove = async (id) => {
   const response = await deleteAPI(`${API}/${id}`)
    if(response && response.status === 200) {
      alert('xoá thành công')
      // load lại list
      fetchAPI()
    }
  }

  return (
    <ListPost posts={data} onEdit={onSubmitEdit}
             onRemovePost={onRemove}/>
  )
}

export default PostScreen