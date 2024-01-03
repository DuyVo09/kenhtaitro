"use client";

import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { resolver } from "./resolver";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import {
  Email,
  EmailOutlined,
  Lock,
  LockOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useState } from "react";
// import { login } from "@/common/apis/auth";
// import { setAccessCookies } from "@/common/helpers/setCookies";
import { ISignInForm } from "./type";

export const LoginForm = ({
  redirect,
  onSuccess,
}: {
  redirect?: string;
  onSuccess?: () => void;
}) => {
  const navigate = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isDirty, isValid },
  } = useForm<ISignInForm>({
    resolver,
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit = handleSubmit(async (data) => {
    // const res = await login(data.userName, data.password);

    // if (res.status !== 200) {
    //   console.log(res)
    //   setError("root", { message: "Đăng nhập thất bại" });
    //   return;
    // }

    // setAccessCookies(res);

    // console.log(res)

    // if (redirect) {
    //   return navigate.replace(redirect);
    // }

    // if (onSuccess) {
    //   return onSuccess();
    // }

    // window.location.reload();
  });
  
  return (
    <form onSubmit={onSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        className="grid grid-cols-1 gap-9"
      >
        <Controller
          control={control}
          name="userName"
          render={({ field }) => (
            <Box>
              <Typography className="font-bold">SĐT/Email</Typography>
              <OutlinedInput
                id="userName"
                {...field}
                fullWidth
                error={errors.userName ? true : false}
                startAdornment={
                  <InputAdornment position="start">
                    <EmailOutlined />
                  </InputAdornment>
                }
              />
              <Typography variant="inherit" color={"error"}>
                {errors.userName?.message}
              </Typography>
            </Box>
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Box>
              <Typography className="font-bold">Mật khẩu</Typography>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                {...field}
                fullWidth
                error={errors.password ? true : false}
                startAdornment={
                  <InputAdornment position="start">
                    <LockOutlined />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <Typography variant="inherit" color={"error"}>
                {errors.password?.message}
              </Typography>
            </Box>
          )}
        />
        <Box display="flex" justifyContent="end">
          <Typography
            className="text-primary hover:underline hover:text-blue-500 hover:cursor-pointer"
            sx={{}}
          >
            Quên mật khẩu
          </Typography>
        </Box>

        <Button
          type="submit"
          disabled={isDirty && !isValid}
          variant="contained"
          sx={{ textTransform: "none", py: 1 }}
        >
          <Typography className="font-bold">Đăng nhập</Typography>
        </Button>
      </Box>
    </form>
  );
};
