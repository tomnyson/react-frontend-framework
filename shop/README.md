### tích hợp api cho chức website

website sẽ ra 3 loại người dùng

- guest: không đăng nhập website

* đã đăng nhập

- user ( có thể mua hàng)
- admin (toàn quyền của hệ thống)

### tạo chức năng login

- create form login
- user/password -> login
  save token login tại localstorage
  gửi kèm token nếu đã có token trong axios

  - với các path private thì yêu cầu login để sử dụng

  * tiến hàng import login Screen comp to route

  - create login flow
    - tạo hàm login
    - call api login

  * khi login thành công chúng ta tiến hành xử phần reducer
    chúng ta cần lấy thêm thông tin roleId và name để hiển thị UI

### yêu cầu login cho các page private như thế nào ?

chúng ta sẽ check quyền và token để xác định user login hay chưa

### tạo quản lý user(chỉ có login mới xem đươc)

- trang danh sách ( get list user from api)
  bổ sung thêm header cho axios để get được các private router
  thêm thuộc tính header

* tạo một table và đổ dữ liệu từ api vào list

- thêm mới
  chúng ta sẽ tạo một form (cho phép user nhập vào username, password, role để tạo một user mới và hiện thị lại list)
  - để validation chúng ta dùng form hook
- cập nhật
  - lấy thông tin user hiện tại truyền vào modal và thực hiện xoá
- xoá

### xây dựng một alert funtion giúp nhận thông báo từ server cho người dùng

### create reducer là notification

# nhúng alert bên ngoài layout

chúng ta sẽ chạy một timeout để hide alert trong khoảng 1s

# CRUD product

- get list
  support tính năng search và tính năng pagination
  search thì chúng ta cần truyền keyword lên
  phân trang: cần có số trang trả về, và gửi số tran cần lấy lên
  thay đổi code của product get list một xíu
- create
- put
- delete

product sẽ cài một ckeditor support việc viết mô tả cho sản phẩm

<!-- https://express-validator.github.io/docs/index.html -->
