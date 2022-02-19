import React, { useState, useEffect, useContext } from "react"
import { getAPI, putAPI, deleteAPI } from "../utils/api"
import { API_PRODUCT } from "../utils/const"
import ListPost from "../components/post-new/ListPost"
import { ThemeContext } from "../context/themeContext"
import styled from "styled-components"
import { fetchingProductList } from "../reducer/action"
import { useGlobalContext } from "../context/globalContext"

const ProductScreen = () => {
  const [data, setData] = useState([])
  // const { value, setValue } = useContext(ThemeContext)
  const [state, dispatch] = useGlobalContext()
  console.log("state", state)
  useEffect(() => {
    fetchAPI()
  }, [])
  const fetchAPI = async () => {
    console.log("call here")
    dispatch(fetchingProductList())
    const result = await getAPI(API_PRODUCT)
    // check dữ dữ liệu trước khi lấy
    if (result) {
      setData(result)
    }
  }

  const onSubmitEdit = async (data) => {
    const response = await putAPI(`${API_PRODUCT}/${data.id}`, data)
    if (response && response.status === 200) {
      alert("cập nhật thành công")
      // setSelectedPost(undefined)
      fetchAPI()
    }
  }

  const onRemove = async (id) => {
    const response = await deleteAPI(`${API_PRODUCT}/${id}`)
    if (response && response.status === 200) {
      alert("xoá thành công")
      // load lại list
      fetchAPI()
    }
  }
  // const oneChangeTheme = () => {
  //   setValue({ ...value, darkMode: !value.darkMode })
  // }

  const SWrapper = styled.div``

  return (
    <SWrapper>
      {/* <button onClick={oneChangeTheme}>dark mode</button> */}
      <ListPost posts={data} onEdit={onSubmitEdit} onRemovePost={onRemove} />
    </SWrapper>
  )
}

export default ProductScreen
