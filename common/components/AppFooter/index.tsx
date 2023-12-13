import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export function AppFooter() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      position="relative"
      height="640px"
      px="7%"
    >
      <Image
        src="/images/pexels-min-an-1006121.jpg"
        alt="Footer"
        fill
        
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          objectFit:"cover"
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity (0.5) for desired darkness
        }}
      />
      <Box
        my={7}
        zIndex={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        flex={1}
      >
        <Grid container color="white" flex={1}>
          <Grid item xs={3}>
            <Typography className="font-bold text-lg">Sự Kiện</Typography>

            <Typography>Sự Kiện Mới Nhất</Typography>
            <Typography>Sự Kiện Quy Mô Lớn</Typography>
            <Typography>Sự Kiện LĨnh Vực 1</Typography>
            <Typography>Sự Kiện LĨnh Vực 2</Typography>
            <Typography>Sự Kiện LĨnh Vực 3</Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography className="font-bold text-lg">Blog</Typography>

            <Typography>Blog Chủ Đề 1</Typography>
            <Typography>Blog Chủ Đề 2</Typography>
            <Typography>Blog Chủ Đề 3</Typography>
            <Typography>Blog Chủ Đề 4</Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography className="font-bold text-lg">Doanh nghiệp</Typography>

            <Typography>Trang chủ</Typography>
            <Typography>Về chúng tôi</Typography>
            <Typography>Liên Hệ</Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography className="font-bold text-lg">Liên Hệ</Typography>

            <Typography>Sự Kiện Mới Nhất</Typography>
            <Typography>Sự Kiện Quy Mô Lớn</Typography>
            <Typography>Sự Kiện LĨnh Vực 1</Typography>
            <Typography>Sự Kiện LĨnh Vực 2</Typography>
            <Typography>Sự Kiện LĨnh Vực 3</Typography>
          </Grid>
        </Grid>

        <Box
          display="flex"
          width="800px"
          height="100px"
          className="bg-white/80"
          my={4}
          borderRadius={2}
        >
          <div style={{ height: "100%", width: "200px", position: "relative" }}>
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            alignItems="center"
          >
            <Typography className="font-bold text-lg">Follow us</Typography>
            <Box display='flex' width='100%' justifyContent='space-around' my={1}>
              <SocialIcon url="www.facebook.com" />
              <SocialIcon url="www.instagram.com" />
              <SocialIcon url="www.tiktok.com" />
              <SocialIcon url="www.youtube.com" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
