"use client";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from 'next/navigation';
import Image from "next/image";

const RolePage = () => {
  const router= useRouter();
  return (
    <div className="flex w-full">
      <div className="flex flex-col grow p-5 items-center max-h-screen">
        <Box position="relative" height="140px" width="300px" my={7}>
          <Image
            src="/images/logo.png"
            alt="history"
            fill
            style={{
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <Typography className="text-sky-600 text-[26px] font-semibold">
          Chọn vai trò tài khoản của bạn
        </Typography>

        <div className="w-1/2 h-full flex items-center ">
          <div className="w-full grid grid-col-1 gap-9">
            <Typography>Bạn là?</Typography>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
              }}
              onClick={() => {
                router.push("/sign-up/organization");
              }}
            >
              <Typography className="text-[22px] capitalize">Ban tổ chức</Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
              }}
              onClick={() => {
                router.push("/sign-up/business");
              }}
            >
              <Typography className="text-[22px] capitalize">Doanh nghiệp</Typography>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolePage;
