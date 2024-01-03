import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const SignInPage = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col h-svh grow p-5 items-center">
        <Box
          display="flex"
          alignItems="center"
          width="100%"
          justifyContent="end"
        >
          <Typography>Chưa có tài khoản?</Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none", px: 5, ml: 2 }}
          >
            Đăng ký
          </Button>
        </Box>
        <Box position="relative" height="140px" width="300px">
          <Image src="/images/logo.png" alt="history" fill objectFit="cover" />
        </Box>

        <Typography className="text-sky-600 text-[26px] font-semibold">
          Dành cho doanh nghiệp
        </Typography>

        <div></div>
      </div>
      <Box border={1} height="100svh" width="600px"></Box>
    </div>
  );
};

export default SignInPage;
