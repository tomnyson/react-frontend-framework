import React, {useState, useEffect}  from 'react';
import './App.css';
import { Context } from './context/context';
// import componet trước khi sử dụng
import Profile from './components/Profile';
import TestContextA from './components/TestContextA';
import TestContextB from './components/TestContextB';
import List from './pages/class';
import axios from 'axios';
import ListPost from './components/post/ListPost'
function App() {
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

   useEffect(()=> {
    fetchAPI()
  },[])
  /**
   *  # arrow funtion fetchAPI
   *  # kiểu bất đồng bộ : 
   * 
   */
  /**
   * rest full (GET|POST|PUT|DELETE)
   * GET: lấy dữ liệu
   * ví dụ: path: api/products -> get danh sách sản phẩm
   * api/products/id -> get 1 sản phẩm theo Id
   * POST: ghi dữ liệu, thêm mới
   * api/product =>POST thêm một sản phẩm. post data
   * PUT: api/product/1 : cập nhật lại dữ liệu đã có body {
   * name: update ten
   * }
   * DELETE: xoá một dòng dữ liệu
   */
  const fetchAPI= async () => {
    const response = await axios.get('https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article');
    // check dữ dữ liệu trước khi lấy
    if(response && response.status === 200) {
      setData(response.data)
    }
  }

  const onChangeName = (event) => {
    setName(event.target.value)
  }
  return (
    <div className="App">
        <input onChange={onChangeName}  type="text" name="name" placeholder="nhập tên"/>
        <ListPost posts={data}/>
    </div>
  );
}

export default App;
