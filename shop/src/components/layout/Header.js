import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Link from "@mui/material/Link"
import styled from "styled-components"
import { logo } from "../../assets/images"
import TextField from "@mui/material/TextField"
import AccountCircle from "@mui/icons-material/AccountCircle"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import InputAdornment from "@mui/material/InputAdornment"
import Button from "@mui/material/Button"
import { styled as styledSystem } from "@mui/system"
import { useTheme } from "@mui/material/styles"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import SellIcon from "@mui/icons-material/Sell"
// or
const menu = [
  {
    name: "mac",
    icon: "mac",
    children: [
      {
        name: "pro",
        icon: "mac",
        children: [
          {
            name: "pro 2018",
            icon: "mac",
          },
          {
            name: "pro 2017",
            icon: "mac",
          },
          {
            name: "pro 2016",
            icon: "mac",
          },
          {
            name: "pro 2015",
            icon: "mac",
          },
          {
            name: "pro 2019",
            icon: "mac",
          },
        ],
      },
      {
        name: "macbook air",
        icon: "mac",
        children: [
          {
            name: "air 2021",
            icon: "mac",
          },
          {
            name: "air 2021",
            icon: "mac",
          },
          {
            name: "air 2021",
            icon: "mac",
          },
          {
            name: "air 2021",
            icon: "mac",
          },
        ],
      },
      {
        name: "macbook m1",
        icon: "mac",
        children: [
          {
            name: "pro 2021",
            icon: "mac",
          },
        ],
      },
      {
        name: "macbook mini",
        icon: "mac",
        children: [
          {
            name: "pro 2021",
            icon: "mac",
          },
        ],
      },
      {
        name: "imac",
        icon: "mac",
        children: [
          {
            name: "pro 2021",
            icon: "mac",
          },
        ],
      },
      {
        name: "imac pro",
        icon: "mac",
        children: [
          {
            name: "pro 2021",
            icon: "mac",
          },
        ],
      },
      {
        name: "mac pro",
        icon: "mac",
        children: [
          {
            name: "pro 2021",
            icon: "mac",
          },
        ],
      },
      {
        name: "monitor/display",
        icon: "mac",
      },
    ],
  },
  {
    name: "surface",
    icon: "mac",
    children: [
      {
        name: "surface pro",
        icon: "mac",
      },
      {
        name: "surface book",
        icon: "mac",
      },
      {
        name: "surface laptop",
        icon: "mac",
      },
      {
        name: "surface laptop studio",
        icon: "mac",
      },
      {
        name: "surface go",
        icon: "mac",
      },
    ],
  },
  {
    name: "laptop",
    icon: "mac",
    children: [
      {
        name: "thinkpad",
        icon: "mac",
      },
      {
        name: "laptop dell",
        icon: "mac",
      },
      {
        name: "razer",
        icon: "mac",
      },
    ],
  },
  {
    name: "đồ công nghệ",
    icon: "mac",
    children: [
      {
        name: "apple watch",
        icon: "mac",
      },
      {
        name: "ipad",
        icon: "mac",
      },
    ],
  },
  {
    name: "phụ kiện",
    icon: "mac",
    children: [
      {
        name: "apple accessories",
        icon: "mac",
      },
      {
        name: "surface accessories",
        icon: "mac",
      },
      {
        name: "google accessories",
        icon: "mac",
      },
      {
        name: "balô chống sốc",
        icon: "mac",
      },
      {
        name: "cổng chuyển đổi",
        icon: "mac",
      },
      {
        name: "ram",
        icon: "mac",
      },
      {
        name: "sạc dự phòng",
        icon: "mac",
      },
      {
        name: "skin macbook",
        icon: "mac",
      },
    ],
  },
]

function printMenu(menu) {
  if (!menu) return ""

  let str = ""
  for (let i in menu) {
    if (menu[i].children)
      str +=
        "<li>" +
        menu[i].name +
        "<ul className='has-children'>" +
        printMenu(menu[i].children) +
        "</ul></li>"
    else str += "<li>" + menu[i].name + "</li>"
  }
  return str
}
const Header = () => {
  const theme = useTheme()

  console.log("theme.palette.primary.color", theme.palette.primary.color)
  const STopHeader = styled(Box)`
    background: #2a2a2a;
  `
  const STopInnerHeader = styled(Box)`
    display: flex;
    justify-content: flex-end;
    padding: 5px 20px;
    a {
      color: ${theme.palette.primary.white};
      padding: 5px 20px;
      text-decoration: none;
    }
    a:hover {
      background: #fff;
      color: ${theme.palette.primary.color};
    }
  `
  const SBottomHeader = styled(Box)`
    display: flex;
    padding: 20px 0px;
  `

  return (
    <Grid>
      <STopHeader>
        <Container>
          <STopInnerHeader>
            <a href="#">Về chúng tôi</a>
            <a href="#">Thanh toán </a>
            <a href="#">Liên hệ</a>
          </STopInnerHeader>
        </Container>
      </STopHeader>
      <Container>
        <SBottomHeader>
          <Grid item xs={3}>
            <Box component="img" src={logo} sx={{ width: "200px" }} />
          </Grid>
          <Grid item xs={3}>
            <STextInput
              id="fullWidth"
              InputProps={{
                endAdornment: <SearchIcon />,
              }}
            />
          </Grid>
          <Grid item md={2}>
            <Button sx={{ fontSize: "12px" }} variant="contained">
              <LocalPhoneIcon /> HOTLINE BÁN HÀNG
            </Button>
          </Grid>
          <Grid item md={4}>
            <SHeaderIcon component="div">
              <a href="#">
                <SHeaderLinkIcon>
                  <span>
                    <AccountCircle />
                  </span>
                  <span>trả góp 0%</span>
                </SHeaderLinkIcon>
              </a>
              <a href="#">
                <SHeaderLinkIcon>
                  <span>
                    <SellIcon />
                  </span>
                  <span>khuyến mại</span>
                </SHeaderLinkIcon>
              </a>
              <a href="#">
                <SHeaderLinkIcon>
                  <span>
                    <SearchIcon />
                  </span>
                  <span>tra cứu ĐH</span>
                </SHeaderLinkIcon>
              </a>
              <a href="#">
                <SHeaderLinkIcon>
                  <span>
                    <ShoppingCartIcon />
                  </span>
                  <span>giỏ hàng</span>
                </SHeaderLinkIcon>
              </a>
            </SHeaderIcon>
          </Grid>
        </SBottomHeader>
      </Container>
      <Grid item md={12}>
        <SNavigation>
          <Container>
            <Box
              component="ul"
              dangerouslySetInnerHTML={{ __html: printMenu(menu) }}
            />
          </Container>
        </SNavigation>
      </Grid>
    </Grid>
  )
}

const SNavigation = styled.nav`
  background: #f8ab16;
  position: relative;
  box-shadow: 3px 3px 5px 0 rgb(0 0 0 / 40%);
  z-index: 999;
  ul {
    display: flex;
    & > li {
      list-style: none;
      padding: 20px 0;
      flex: 1;
      &:hover {
        background: #f8ab16;
        & > ul {
          display: flex;
          position: absolute;
          background: #fff;
          width: 95%;
          left: 1%;
          margin-top: 20px;
          box-shadow: 3px 3px 5px 0 rgb(0 0 0 / 40%);
          & > li {
            display: block;
            flex: 1;
            width: 100px;
            padding: 20px;
            ul {
              margin-top: 20px;
              left: 0px;
              display: block;
              width: 300px;
              }
              li {
                width: 100px;
                float: left;
                &:hover {
                  background: #fff;
                  color: #f8ab16;
                }
              }
              
            }
          }
        }
      }
      ul {
        display: none;
        li {
          display: none;
          cursor: pointer;
          text-align: center;
        }
      }
    }
  }
`
const STextInput = styled(TextField)`
  margin-right: 30px;
  input {
    padding: 10px;
  }
`
const SHeaderIcon = styled(Box)`
  display: flex;
  justify-content: space-around;
  svg {
    display: block;
    fill: #2a2a2a;
  }
  a {
    color: #4f4f4f;
    text-align: center;
    padding: 5px 10px;
    text-decoration: none;
  }
  a:hover {
    background: #f8ab16;
  }
`
const SHeaderLinkIcon = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export default Header
