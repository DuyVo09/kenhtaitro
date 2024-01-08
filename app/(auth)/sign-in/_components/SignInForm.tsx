"use client";

import { useRouter } from "next/navigation";
import { Controller, set, useForm } from "react-hook-form";
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
import { toast, ToastContainer } from "react-toastify";

import { useRef, useState } from "react";

import { ISignInForm } from "./type";
import { login } from "@/apis/auth";
import { setAuthCookies } from "@/common/helpers/authCookies";

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
    const toastId = toast.loading("Đang đăng nhập...", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    login(data.userName, data.password)
      .then((res) => {
        if (res.status === 201) {
          setAuthCookies(res.data);
          toast.update(toastId, {
            render: "Đăng nhập thành công!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
          // console.log(res)

          if (redirect) {
            return navigate.replace(redirect);
          }

          if (onSuccess) {
            return onSuccess();
          }

          window.location.reload();
        } else {
          toast.update(toastId, {
            render: res.detail,
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.update(toastId, {
          render: err.detail,
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      });
  });

  return (
    <form onSubmit={onSubmit} className="w-full">
      <ToastContainer />
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
          variant="contained"
          sx={{ textTransform: "none", py: 1 }}
        >
          <Typography className="font-bold">Đăng nhập</Typography>
        </Button>
      </Box>
    </form>
  );
};
