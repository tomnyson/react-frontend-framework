const JSReview =  () => {
  /**
   *  const hằng ko thay đổi
   *  let: khi cần thay đổi giá trị let
   *  dữ liệu: string, number(Int, Float), array, object, class
   */
    // let sinhvien = {
    //   name: 'abc', 
    //   old: 30,
    //   mark: 7.5
    // };
    // console.log(sinhvien);
    // câu điều kiện if else | switch case
    const tuoi = 16;
    /**
     * if(biểu thức so sánh) (<,>, >=, <=, && ||) => boolean(true, false)
     * nếu có nhiều trường hợp else if
     */
    // if(tuoi >=18) {
    //   console.log('bạn đã đủ tuổi lấy vk')
    // } else if(tuoi >= 16) {
    //   console.log('đủ tuổi lấy bằng lái')
    // } else {
    //   console.log('em còn non lắm')
    // }
    // const ngayTrongTuan ="thuhai3"
    // switch(ngayTrongTuan) {
    //   case "thuhai":
    //     console.log('thu hai');
    //   break;
    //   case "thuba":
    //     console.log('thu ba');
    //     break;
    //   default:
    //     console.log('sai rồi')
    //     break;
    //  }
    // vòng lặp for
    // let sum =0;
    // for(let i=0; i<100; i++) {
    //   if(i % 2 == 0) {
    //     sum +=i;
    //   }
    // }
    // console.log('sum', sum)
    // while 
    let i =0;
    const n = 100;
    // vòng lặp vô tận
    // while(i<=n) {
    //    console.log("i", i);
    //    i++;
    // }
    // do while
    
    // let old;
    // do {
    //   old = prompt('nhập tuổi > 16')
    // } while (old<=16) //kd
    // function cách khai báo và sử dụng es5
    function getName(user='abc') {
      // xử lý gì tròng này
      return user
    }
    // es6
    const getNameES6 = (user='abc') => user
    // lưu ý tên hàm thì các bạn phải ()
    console.log(getName('edf'))
    console.log(getNameES6('edf'))
    // array;
    /**
     * khai báo [gia tri, gia tri i]
     *  sử dụng truy xuất thông qua index ví trí bắt đầu 0
     */
    const arrSinhVien = ['a', 'b', 'c', 'd', 'e', 'f'];
    // for(let i=0;i< arrSinhVien.length; i++) {
    //   console.log('arrSinhVien',arrSinhVien[i])
    // }
    //es6
    //foreach
    arrSinhVien.forEach((item, index) => {
      console.log('index',index)
      console.log(item)
    })
    //map =>
    arrSinhVien.map((item, index) => {
      if(i% 2 === 0) {
        console.log('item')
      }
      console.log(item)
    })
    //filter, find, some
    // es6 template
    // const abc = 'let hong son'
    // const html = `rennder html ${abc}`
    const product = {
      name: 'abc',
      price: 2000,
      color: 'white'
    }
    // c1 key
    console.log(product?.name)
    console.log(product['name'])
    //rest object
    const {name, ...rest} = product
    console.log('name',name)
    console.log('rest', rest)
    // clone object unmute 
    const product2 = Object.assign({}, product)
    const product3 =  {...product}
    delete product3.name
    // promise
    const promiseFc = (a, b) => {
      return new Promise((resolve, reject) =>{
         if(a+b > 4) {
          resolve(a+b)
         } else {
          reject(null)
         }
      })
    }
    // arow 
    const functWait = async () => {
      const response = await fetch('https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article').catch(err => {
        console.log('error', err);
      })
      console.log('response', response)
    }
    // promiseFc(1,5).then(result => {
    //   console.log('result', result)
    // })
  //  fetch('https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article').then(response => {
  //    console.log('response',response)
  //  }).catch(err => {
  //    console.error(err)
  //  })
  // localstorage
  const userName = {
    'name': 'admin',
    'role': 1
  }
  localStorage.setItem('USER', JSON.stringify(userName))
 const value =  localStorage.getItem('USER')
 console.log(JSON.parse(value).name)

  functWait()
  return (
    <h1></h1>
  )
}

export default JSReview