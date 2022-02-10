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
