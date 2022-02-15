# hôm nay chúng ta tiến hành học các bước cơ bản để thao tác với mongodb

### env file chứa các config

```js
yarn add dotenv -D
```

#### vậy là chúng ta đã config kết nối thành công

### chúng ta tiến hành tạo một collection đầu tiên đó là user

để sử thêm được user -> cần định nghĩa một schema user

username: string | unique( duy nhất)
password: string
email: string, format email
role: string ['user'| 'admin']

#### tạo một router user

##### chức năng thêm mới một user

`req.body;` method dùng để lấy dữ liệu từ form input user

####### payload data

```js
{
    "username": "admin",
    "password": "123456",
    "role": "admin",
    "email": "tabletkindfire@gmail.com"
}
```

### tạo một controller user

#### để lưu được user cần gọi class userSchema để tạo object và dùng function save để lưu lại

```js
const post = new PostSchema({ name, description, tags, category })
post.save().then(() => console.log('meow'))
```

#### password nên được mã hoá

`bcryptjs`

### xây dựng chức năng login

- nhập vào username, password, email
  kiểm tra tồn tại thông báo đang nhập thành công hay thất bại

  -> sinh ra một token để dùng cho validation
  dùng thư viện `jsonwebtoken`

  ```js
  const jwt = require('jsonwebtoken')
  export const generateAccessToken = (payload) => {
    return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '7d' })
  }
  ```

```

```

xây dựng một middleware để bảo vệ nhưng router cần bảo mật
chúng ta sẽ dùng 2 module sau
`passport passport-jwt`

### hướng dẫn xây dựng chức năng thêm xoá sửa categories và product

#### tạo model cho categories trước

xây dựng CRUD cho categories

- create router categories method: get, post, put, delete
- apply function controller categories
- create (check exist name)
  nhận dữ liệu từ body và thêm vào model
- get list categories
- get detail by Id
- update
  - findOneAndUpdate
- delete
  - deleteOne
- export module main router

### tạo product

api product
get
get detail
post (1 product sẽ thuộc 1 categories)
put
delete

- create schema cho product, product sẽ cần link đến categories schema ta dùng thuộc tính ref để link
- get list product (làm sao đê link được category)

* dùng .populate để lấy dữ liệu

### create orders

- đối với orders chúng ta cần 1 số thông tin sau đó

```
{
  order_date: Date,
  customer: String
  address_shipping:
  phone:
  email:
  note:
  status:
  Item: [{
    product_id:
    price:
    quantity
  }]
  total:
}
```

- create schema cho order
- create router and controller
  - getList ( include users and info product)
    - dùng populate method để access ref nếu array thì cần access phần tử chứa nó trước
  - create
  - put
  - delete
