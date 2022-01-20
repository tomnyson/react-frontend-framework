import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import { Box, Link } from "@mui/material"
import { logo, payment } from "../../assets/images"
import { styled } from "@mui/system"

const Footer = () => {
  return (
    <Grid>
      <Container>
        <Grid container>
          <Grid item xs={3}>
            <Box component="img" src={logo}></Box>
            <Box component="p">Don't be the same, be better</Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <SLink href="#">Về chúng tôi</SLink>
              <SLink href="#">Thanh toán </SLink>
              <SLink href="#">Liên hệ</SLink>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box component="h5">Hỗ trợ</Box>
              <SLink href="#">Quẹt thẻ/Trả góp</SLink>
              <SLink href="#">Cài đặt phần mềm </SLink>
              <SLink href="#">Phục hồi dữ liệu</SLink>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box component="h5">Thông tin</Box>
              <SLink href="#">Quy định chung</SLink>
              <SLink href="#">Chính sách bảo hành </SLink>
              <SLink href="#">Chính sách đổi trả</SLink>
              <SLink href="#">Chính sách bảo mật thông tin</SLink>
              <SLink href="#">Chính sách vận chuyển</SLink>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box component="h5">Liên hệ</Box>
              <SLink href="#">
                Địa chỉ: 273/8 Nguyễn Trọng Tuyển, Phường 10, Phú Nhuận, Thành phố Hồ
                Chí Minh
              </SLink>
              <SLink href="#">Email: sale@laptopvang.com </SLink>
              <SLink href="#">Bán hàng 0868 111 232</SLink>
              <SLink href="#">Kỹ thuật 0868 111 242</SLink>
            </Box>
          </Grid>
          <Box
            sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
          >
            <Box component="p">
              Copyright © 2017 by laptopVANG.com. GPKD Số: 41P8018855, cấp ngày
              08/09/2017
            </Box>
            <Box component="img" src={payment} />
          </Box>
        </Grid>
      </Container>
    </Grid>
  )
}

const SLink = styled(Link)(({ theme }) => ({
  margin: "0 5px",
  color: theme.palette.primary.color,
}))

export default Footer
