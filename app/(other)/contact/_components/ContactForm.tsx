"use client";
import { Controller, useForm } from "react-hook-form";
import { resolver } from "./resolver";
import { IContactFormData } from "./type";
import { Box, Input, Typography } from "@mui/material";
import { AwesomeButton } from "react-awesome-button";

export function ContactForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactFormData>({ resolver });

  const onSubmit = handleSubmit((formValues: IContactFormData) => {
    try {
      console.log(formValues);
    } catch (error: any) {}
  });

  return (
    <form id="contact-form" onSubmit={onSubmit}>
      <Box className="grid grid-cols-2 gap-9 ">
        <div className="col-span-2">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Box>
                <Typography className="font-medium leading-tigh text-primary">
                  Họ và tên*
                </Typography>
                <Input
                  id="name"
                  {...field}
                  fullWidth
                  error={errors.name ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.name?.message}
                </Typography>
              </Box>
            )}
          />
        </div>

        <div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Box>
                <Typography className="font-medium leading-tigh text-primary">
                  Email*
                </Typography>
                <Input
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
        </div>

        <div>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Box>
                <Typography className="font-medium leading-tigh text-primary">
                  Số điện thoại
                </Typography>
                <Input
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
        </div>

        <div className="col-span-2">
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <Box>
                <Typography className="font-medium leading-tigh text-primary">
                  Chủ đề*
                </Typography>
                <Input
                  id="title"
                  {...field}
                  fullWidth
                  error={errors.title ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.title?.message}
                </Typography>
              </Box>
            )}
          />
        </div>

        <div className="col-span-2">
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <Box>
                <Typography className="font-medium leading-tigh text-primary">
                  Tin nhắn*
                </Typography>
                <Input
                  id="content"
                  {...field}
                  fullWidth
                  error={errors.content ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.content?.message}
                </Typography>
              </Box>
            )}
          />
        </div>

        <div className="col-span-2 flex justify-end ">
          <AwesomeButton className="h-14 " type="primary" size="large">
            <Typography className="font-bold uppercase">Gửi</Typography>
          </AwesomeButton>
        </div>
      </Box>
    </form>
  );
}
