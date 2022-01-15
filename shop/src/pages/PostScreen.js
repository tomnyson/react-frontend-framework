import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import ListPost from '../components/post-new/ListPost'
import CreatePost from '../components/post-new/CreatePost'
import UpdatePost from '../components/post-new/UpdatePost'
import styled from 'styled-components'

function PostScreen() {
  //useState khai báo đây là state( state có nghỉa là một biến có thể thay đổi trong quá trình chạy)
  // trạng thái của component
  /**
   * b1: tên biến , vd: name  => setName
   *  định nghĩa một hàm để setSate default: LE HONG SOn
   *  nếu muốn xài mặc định thì bỏ dữ liệu vào useSate()
   * để dùng đơn giản chỉ cần gọi tên liệu
   * cần cập nhật gọi hàm set ở trên
   * variable : nhập bất kỳ thứ gì: kiểu dữ liệu cơ bản string, number, boolean
   *  kiểu nâng cao: object
   */
  const [name, setName] = useState('Le Hong Son')
  const [mssv, setMssv] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [isFetchData, setIsFetchData] = useState(false)
  const [isCreate, setIsCreate] = useState(false)

  const [selectedPost, setSelectedPost] = useState(undefined)

   useEffect(()=> {
    fetchAPI()
  },[isFetchData])

  const fetchAPI= async () => {
    const response = await axios.get('https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article');
    // check dữ dữ liệu trước khi lấy
    if(response && response.status === 200) {
      setData(response.data)
    }
  }
  const onCreate = async (post) => {  
    if(post&&post.id) {
      // case update
      const response = await axios.put(`https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article/${post.id}`,
      post
    ) 
    console.log('response',response)
    if(response && response.status === 200) {
      alert('cập nhật thành công')
    }
    } else {
      const response = await axios.post(`https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article`,
      post
   ) 
   if(response && response.status === 201) {
     alert('tạo thành công')
   }
    }
    setIsCreate(false)
    setIsFetchData(!isFetchData)
  }
  const onRemove = async (id) => {
    const response = await axios.delete(`https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article/${id}`,
    )
    if(response && response.status === 200) {
      alert('xoá thành công')
    }
    setIsFetchData(!isFetchData)
  }
  const onEdit = async(post) => {
    setSelectedPost(post)
  }
  
  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onSubmit = async (data) => {
    // POST
    const response = await axios.post('https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article', data)
    if(response && response.status === 201) {
      alert('create thành công')
      fetchAPI()
    }
  }

  const onSubmitEdit = async (data) => {
    const response = await axios.put(`https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article/${data.id}`, data)
    if(response && response.status === 200) {
      alert('cập nhật thành công')
      setSelectedPost(undefined)
      fetchAPI()
    }
  }

  return (
          <>
              <CreatePost onSubmit={onSubmit}/>
              {selectedPost && <UpdatePost item={selectedPost} onSubmit={onSubmitEdit}/>}
              <ListPost onEdit={onEdit} posts={data}/>
            </>
        );
}
const SButton = styled.button`
  background: green;
  color: #ffff;
  padding: 10px;
  width: 150px;
`
const SSearchInput = styled.input`
  padding: 10px;
  width: 300px;
  margin-bottom: 20px;
`
const Scontainer = styled.div `
  max-width: 1240px;
  margin: 0 auto;
`
export default PostScreen;
