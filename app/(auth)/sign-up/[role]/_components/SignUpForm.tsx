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
  Person2Outlined,
  PhoneOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useState } from "react";
// import { login } from "@/common/apis/auth";
// import { setAccessCookies } from "@/common/helpers/setCookies";
import { ISignUpForm } from "./type";

export const SignUpForm = ({
  redirect,
  onSuccess,
  isOrganization,
}: {
  redirect?: string;
  onSuccess?: () => void;
  isOrganization?: boolean;
}) => {
  const navigate = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isDirty, isValid },
  } = useForm<ISignUpForm>({
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

  const role = isOrganization ? "Ban tổ chức" : "Doanh nghiệp";
  
  return (
    <form onSubmit={onSubmit} className="w-full">
      <Box
        display="flex"
        flexDirection="column"
        className="grid grid-cols-2 gap-9"
      >
        <Controller
          control={control}
          name="full_name"
          render={({ field }) => (
            <Box className="col-span-2">
              <Typography className="font-bold">Họ và tên*</Typography>
              <OutlinedInput
                id="full_name"
                {...field}
                fullWidth
                error={errors.full_name ? true : false}
              />
              <Typography variant="inherit" color={"error"}>
                {errors.full_name?.message}
              </Typography>
            </Box>
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Box>
              <Typography className="font-bold">Địa chỉ email*</Typography>
              <OutlinedInput
                id="email"
                {...field}
                fullWidth
                error={errors.email ? true : false}
              />
              <Typography variant="inherit" color={"error"}>
                {errors.email?.message}
              </Typography>
            </Box>
          )}
        />

        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <Box>
              <Typography className="font-bold">Số điện thoại*</Typography>
              <OutlinedInput
                id="phone"
                {...field}
                fullWidth
                error={errors.phone ? true : false}
              />
              <Typography variant="inherit" color={"error"}>
                {errors.phone?.message}
              </Typography>
            </Box>
          )}
        />
        
        <Controller
          control={control}
          name="company"
          render={({ field }) => (
            <Box className="col-span-2">
              <Typography className="font-bold">{`Tên ${role}`}</Typography>
              <OutlinedInput
                id="company"
                {...field}
                fullWidth
                error={errors.company ? true : false}
              />
              <Typography variant="inherit" color={"error"}>
                {errors.company?.message}
              </Typography>
            </Box>
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Box className="col-span-2">
              <Typography className="font-bold">Mật khẩu</Typography>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                {...field}
                fullWidth
                error={errors.password ? true : false}
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
        <Controller
          control={control}
          name="confirm_password"
          render={({ field }) => (
            <Box className="col-span-2">
              <Typography className="font-bold">Nhập lại mật khẩu</Typography>
              <OutlinedInput
                id="confirm_password"
                type={showPassword ? "text" : "password"}
                {...field}
                fullWidth
                error={errors.confirm_password ? true : false}
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
                {errors.confirm_password?.message}
              </Typography>
            </Box>
          )}
        />

        <Button
          type="submit"
          // disabled={isDirty && !isValid}
          variant="contained"
          sx={{ textTransform: "none", py: 1 }}
        >
          <Typography className="font-bold">Đăng ký</Typography>
        </Button>
      </Box>
    </form>
  );
};
