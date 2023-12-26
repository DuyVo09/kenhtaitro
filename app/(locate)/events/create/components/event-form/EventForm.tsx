import { IEventFormModel } from "@/types";
import { Box, Input, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { resolver } from "./resolver";

export const EventForm = ({
  redirect,
  onSuccess,
}: {
  redirect?: string;
  onSuccess?: () => void;
}) => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isDirty, isValid },
  } = useForm<IEventFormModel>({ resolver });

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    if (redirect) {
      // return navigate.replace(redirect);
    }

    if (onSuccess) {
      return onSuccess();
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Box display="flex" flexDirection="column">
        <Box
          className="bg-blue-200 bg-opacity-30 grid grid-cols-1 gap-9"
          p={5}
          display="flex"
          flexDirection="column"
        >
          <Typography className="text-[22px] text-primary font-bold capitalize">
            Thông tin liên hệ*
          </Typography>

          <Controller
            control={control}
            name="full_name"
            render={({ field }) => (
              <Box>
                <Typography className="font-medium leading-tight">
                  Họ và tên
                </Typography>
                <Input
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
          <Box className="grid grid-cols-2 gap-9">
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <Box>
                  <Typography className="font-medium leading-tight">
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
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Box>
                  <Typography className="font-medium leading-tight">
                    Email
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
          </Box>
        </Box>

        <Box
          className="bg-blue-200 bg-opacity-30 grid grid-cols-1 gap-9 mt-10"
          p={5}
          display="flex"
          flexDirection="column"
        >
          <Typography className="text-[22px] text-primary font-bold capitalize">
            Thông tin sự kiện*
          </Typography>

          <Controller
            control={control}
            name="event_name"
            render={({ field }) => (
              <Box>
                <Typography className="font-medium leading-tight">
                  Tên sự kiện (tối đa 90 kí tự)
                </Typography>
                <Input
                  id="event_name"
                  {...field}
                  fullWidth
                  error={errors.event_name ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.event_name?.message}
                </Typography>
              </Box>
            )}
          />

          <Controller
            control={control}
            name="location"
            render={({ field }) => (
              <Box>
                <Typography className="font-medium leading-tight">
                  Địa điểm tổ chức
                </Typography>
                <Input
                  id="location"
                  {...field}
                  fullWidth
                  error={errors.location ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.location?.message}
                </Typography>
              </Box>
            )}
          />

          <Box className="grid grid-cols-2 gap-9">
            <Controller
              control={control}
              name="area"
              render={({ field }) => (
                <Box>
                  <Typography className="font-medium leading-tight">
                    Tỉnh/Thành phố
                  </Typography>
                  <Input
                    id="area"
                    {...field}
                    fullWidth
                    error={errors.area ? true : false}
                  />
                  <Typography variant="inherit" color={"error"}>
                    {errors.area?.message}
                  </Typography>
                </Box>
              )}
            />
            <Controller
              control={control}
              name="district"
              render={({ field }) => (
                <Box>
                  <Typography className="font-medium leading-tight">
                    Quận/Huyện
                  </Typography>
                  <Input
                    id="district"
                    {...field}
                    fullWidth
                    error={errors.district ? true : false}
                  />
                  <Typography variant="inherit" color={"error"}>
                    {errors.district?.message}
                  </Typography>
                </Box>
              )}
            />
          </Box>
          <Controller
            control={control}
            name="organizer"
            render={({ field }) => (
              <Box>
                <Typography className="font-medium leading-tight">
                  Đơn vị tổ chức sự kiện
                </Typography>
                <Input
                  id="organizer"
                  {...field}
                  fullWidth
                  error={errors.organizer ? true : false}
                />
                <Typography variant="inherit" color={"error"}>
                  {errors.organizer?.message}
                </Typography>
              </Box>
            )}
          />
        </Box>
      </Box>
    </form>
  );
};
