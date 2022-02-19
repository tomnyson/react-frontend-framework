
const express = require('express')
const bodyParser = require('body-parser')
// import api router
const apiRoute =  require('./routes')
const mongoDbProvider = require('./models/mongodbProvider')
const app = express()
require('dotenv').config()

const port = 8081
/**
 *  gửi tên, tuôỉ
 * xuất => xin chào tên , tuổi, có được thi bằng lái xe hay không? 18>= ok , no
 */

app.use(bodyParser.json())
//  sử dung router
app.use('/api', apiRoute)

let listSinhVien = [{
  id: 1,
  name: 'nguyen van a',
  mark: 7.5,
  class: 'it-01'
},



{
  id: 2,
  name: 'nguyen van b',
  mark: 5,
  class: 'it-01'
},
{
  id: 3,
  name: 'nguyen van c',
  mark: 4,
  class: 'it-01'
}
]

app.get('/student', (req, res) => {
  res.json({'students': listSinhVien})
})

// get thông tin chi tiết
app.get('/student/:id', (req, res) => {
  /**
   * b1: kiểm tra xem có id không nếu có thì trả về còn ko có thì trả về id không tồn tại
   */
  const {id} = req.params
  const isExistStudent = listSinhVien.filter(student => student.id === Number(id))
  if(isExistStudent&&isExistStudent.length >0) {
    return res.json(isExistStudent[0])
  }
  return res.status(400).json({'message': 'id not exist'})
})
// cập nhật thông tin 
app.put('/:id', (req, res) => {
  res.send('update sinh vien')
})

// thêm mới
app.post('/student', (req, res) => {
  const {name, mark, lop} = req.body
  const newStudent = {name, mark, class: lop, id: listSinhVien.length + 1}
  listSinhVien.push(newStudent)
  return res.json(newStudent)
})
// delete xoá thông tin
app.delete('/student/:id', (req, res) => {
  const {id} = req.params
  const isExistStudent = listSinhVien.filter(student => student.id === Number(id))
  if(isExistStudent && isExistStudent.length > 0) {
    listSinhVien =  listSinhVien.filter(student => student.id !== Number(id))
    return res.status(200).json({'message': 'remove success'})
  }
  return res.status(400).json({'message': 'id not exist'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
