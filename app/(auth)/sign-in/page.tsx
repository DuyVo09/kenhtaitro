import { Box, Button, Typography } from "@mui/material";
import { useRouter, redirect } from "next/navigation";
import Image from "next/image";
import { LoginForm } from "./_components/SignInForm";

const SignInPage = ({ params }: { params: { role: string } }) => {
  // if (params.role !== "organization" && params.role !== "business") {
  //   redirect("/role");
  // }

  return (
    <div className="flex w-full">
      <div className="flex flex-col max-h-screen grow p-5 items-center ">
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
          Dành cho doanh nghiệp
        </Typography>

        <div className="w-1/2 h-full flex items-center">
          <LoginForm />
        </div>
      </div>
      <Box
        height="100svh"
        width="600px"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src="/images/login/login.png"
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
            backgroundImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(7, 7, 7, 0.3), rgba(82, 82, 82, 0) 97%, rgba(84, 84, 84, 0))",
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
              Vui lòng đăng ký để sử dụng dịch vụ của chúng tôi
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
            >
              <Typography>Đăng ký</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SignInPage;
