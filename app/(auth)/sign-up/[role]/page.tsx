"use client";
import { Box, Button, Typography } from "@mui/material";
import { useRouter, redirect } from "next/navigation";
import Image from "next/image";
import { SignUpForm } from "./_components/SignUpForm";

const SignupPage = ({ params }: { params: { role: string } }) => {
  const router = useRouter();
  let accountRole = "";
  if (params.role !== "organization" && params.role !== "business") {
    redirect("/role");
  }

  if (params.role === "organization") {
    accountRole = "Ban tổ chức";
  } else {
    accountRole = "Doanh nghiệp";
  }

  return (
    <div className="flex w-full">
      <Box
        maxHeight="100svh"
        width="600px"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src="/images/auth/signup.png"
          alt="history"
          fill
          style={{
            maxWidth: "100%",
            objectFit: "cover",
          }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          height="100%"
          width="100%"
          display="flex"
          boxSizing="border-box"
          color="white"
          alignItems="center"
          justifyContent="center"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            textAlign="center"
            alignItems="center"
          >
            <Typography className="text-[40px] font-bold">Welcome</Typography>
            <Typography className="my-8">
              Đã có tài khoản? Đăng nhập ngay
            </Typography>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                py: 2,
                px: 4,
                bgcolor: "rgba(255, 255, 255, 0.2)",
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.4)",
                },
              }}
              onClick={() => router.push("/sign-in")}
            >
              <Typography>Đăng nhập</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <div className="flex flex-col h-svh grow p-5 items-center ">
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
          {`Dành cho ${accountRole}`}
        </Typography>

        <div className="w-1/2 h-full flex items-center">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
