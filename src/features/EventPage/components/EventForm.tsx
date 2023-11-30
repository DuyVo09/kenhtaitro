import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/en-gb";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import { IEventFormProps, IEventDataModel, ICategoryOption } from "../models";
import {
  Grid,
  Typography,
  FormControl,
  FormLabel,
  TextField,
  Button,
  Modal,
  Autocomplete,
  Box,
} from "@mui/material";
import { useState } from "react";
import FileUpload from "components/Common/FileUploader";

// const categoriesOpt: ICategoryOption[] = [
//   {
//     label: "Field 1",
//     id: 1,
//   },
//   {
//     label: "Field 2",
//     id: 2,
//   },
//   {
//     label: "Field 3",
//     id: 3,
//   },
//   {
//     label: "Field 4",
//     id: 4,
//   },
//   {
//     label: "Field 5",
//     id: 5,
//   },
// ];

const categoriesOpt = ["Field 1", "Field 2", "Field 3", "Field 4"];

const requiredMsg = "Trường thông tin này là bắt buộc";

const validationSchema = yup.object().shape({
  // bannerImage: yup.string().required(requiredMsg),
  full_name: yup.string().required(requiredMsg),
  phone: yup.string().required(requiredMsg),
  email: yup.string().required(requiredMsg),
  school: yup.string().required(requiredMsg),
  location: yup.string().required(requiredMsg),
  event_name: yup.string().required(requiredMsg).max(90),
  event_description: yup
    .string()
    .required(requiredMsg)
    .min(50, "Phải nhập ít nhất 50 kí tự")
    .max(3000),
  event_image: yup.string().required(requiredMsg),
  organizer: yup.string().required(requiredMsg),
  start_date: yup.date().required(requiredMsg).typeError("Invalid Date"),
  end_date: yup.date().required(requiredMsg).typeError("Invalid Date"),
  deadline_sponsorship: yup.string().required(requiredMsg),
  event_field: yup.string().required(requiredMsg),
  total_reach: yup
    .number()
    .required(requiredMsg)
    .typeError("Trường này chỉ nhập số"),
  total_reach_in_house: yup
    .number()
    .required(requiredMsg)
    .typeError("Trường này chỉ nhập số"),
  first_year_attendee_percentage: yup
    .number()
    .typeError("Trường này chỉ nhập số"),
  exclusive_sponsorship: yup
    .number()
    .required(requiredMsg)
    .typeError("Trường này chỉ nhập số"),
  diamond_sponsorship: yup
    .number()
    .required(requiredMsg)
    .typeError("Trường này chỉ nhập số"),
  gold_sponsorship: yup
    .number()
    .required(requiredMsg)
    .typeError("Trường này chỉ nhập số"),
  silver_sponsorship: yup
    .number()
    .required(requiredMsg)
    .typeError("Trường này chỉ nhập số"),
  bronze_sponsorship: yup
    .number()
    .required(requiredMsg)
    .typeError("Trường này chỉ nhập số"),
  companion_sponsorship: yup
    .number()
    .required(requiredMsg)
    .typeError("Trường này chỉ nhập số"),
  other_sponsorship: yup
    .number()
    .nullable()
    .transform((_, val) => (val ? Number(val) : null)),
  proposal: yup.string().required(requiredMsg),
});

const EventForm = ({ initialValue, onSubmit, noEdit }: IEventFormProps) => {
  const [startTimeValue, setStartTimeValue] = useState<Dayjs | null>();
  const [endTimeValue, setEndTimeValue] = useState<Dayjs | null>();
  const [deadlineValue, setDeadlineValue] = useState<Dayjs | null>();
  const [files, setFiles] = useState<File[]>([]);

  const [selectedCategories, setSelectedCategories] = useState<string | null>();

  const handleUploadFiles = (files: File[]) => {
    setFiles((pre) => [...pre, ...files]);
    setValue("event_image", "new string");
  };

  const handleSelectStartDate = (value: Dayjs | null) => {
    setStartTimeValue(value);
    if (value) {
      setValue("start_date", value.toDate());
    }
  };

  const handleSelectEndDate = (value: Dayjs | null) => {
    setEndTimeValue(value);
    if (value) {
      setValue("end_date", value.toDate());
    }
  };

  const handleSelecDeadlineDate = (value: Dayjs | null) => {
    setDeadlineValue(value);
    if (value) {
      setValue("deadline_sponsorship", value.toString());
    }
  };

  const handleSelectField = (e: any, value: string | null) => {
    setSelectedCategories(value);
    if (value) {
      setValue("event_field", value);
    }
  };

  const handleFormSubmit = (formValues: IEventDataModel) => {
    try {
      onSubmit?.(formValues);
    } catch (error: any) {}
  };

  const handleFormError = (e: any) => {
    // console.log(getValues('event_image'))
    console.log(e);
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    // defaultValues: initialValue,
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(handleFormSubmit, handleFormError)}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
        <Grid container spacing={5} sx={{ my: 3 }}>
          <Grid item xs={12}>
            <Typography>Thông tin liên hệ</Typography>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("full_name")}
                id="full_name"
                name="full_name"
                error={errors.full_name ? true : false}
                disabled={noEdit}
                label="Họ và tên"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.full_name?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("phone")}
                id="phone"
                name="phone"
                error={errors.phone ? true : false}
                disabled={noEdit}
                label="Số điện thoại"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.phone?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("email")}
                id="email"
                name="email"
                error={errors.email ? true : false}
                disabled={noEdit}
                label="Email"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.email?.message}
              </Typography>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={5} sx={{ my: 3 }}>
          <Grid item xs={12}>
            <Typography>Thông tin tổ chức sự kiện</Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("school")}
                id="school"
                name="school"
                error={errors.school ? true : false}
                disabled={noEdit}
                label="Tên trường"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.school?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("location")}
                id="location"
                name="location"
                error={errors.location ? true : false}
                disabled={noEdit}
                label="Địa điểm tổ chức"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.location?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("event_name")}
                id="event_name"
                name="event_name"
                error={errors.event_name ? true : false}
                disabled={noEdit}
                label="Tên sự kiện"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.event_name?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                multiline
                rows={5}
                maxRows={5}
                {...register("event_description")}
                id="event_description"
                name="event_description"
                error={errors.event_description ? true : false}
                disabled={noEdit}
                label="Mô tả sự kiện"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.event_description?.message}
              </Typography>
            </FormControl>
          </Grid>

          {/* <Grid item xs={9}>
            <Box height={150} display='flex' flex="auto" border={1}></Box>
          </Grid> */}

          <Grid item xs={12}>
            <FormLabel>Hình ảnh sự kiện</FormLabel>

            <FileUpload value={files} onChange={handleUploadFiles} />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("organizer")}
                id="organizer"
                name="organizer"
                error={errors.organizer ? true : false}
                disabled={noEdit}
                label="Đơn vị tổ chức sự kiện"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.organizer?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <DateTimePicker
                label="Thời gian bắt đầu"
                value={startTimeValue}
                onChange={handleSelectStartDate}
                disabled={noEdit}
              />
              <Typography variant="inherit" color={"error"}>
                {errors.start_date?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <DateTimePicker
                label="Thời gian kết thúc"
                value={endTimeValue}
                onChange={handleSelectEndDate}
                disabled={noEdit}
              />
              <Typography variant="inherit" color={"error"}>
                {errors.end_date?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <DateTimePicker
                label="Thời hạn cuối nhận tài trợ"
                value={deadlineValue}
                onChange={handleSelecDeadlineDate}
                disabled={noEdit}
              />
              <Typography variant="inherit" color={"error"}>
                {errors.deadline_sponsorship?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <Autocomplete
                // multiple
                // id="eventCategory"
                options={categoriesOpt}
                // getOptionLabel={(opt) => opt.label}
                filterSelectedOptions
                value={selectedCategories}
                onChange={handleSelectField}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Lĩnh vực sự kiện"
                    placeholder="Lĩnh vực"
                  />
                )}
              />
              <Typography variant="inherit" color={"error"}>
                {errors.event_field?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("total_reach")}
                id="total_reach"
                name="total_reach"
                error={errors.total_reach ? true : false}
                disabled={noEdit}
                label="Tổng lượt tiếp cận"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.total_reach?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("total_reach_in_house")}
                id="total_reach_in_house"
                name="total_reach_in_house"
                error={errors.total_reach_in_house ? true : false}
                disabled={noEdit}
                label="Lượt tiếp cận trực tiếp tại sự kiện"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.total_reach_in_house?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("first_year_attendee_percentage")}
                id="first_year_attendee_percentage"
                name="first_year_attendee_percentage"
                error={errors.first_year_attendee_percentage ? true : false}
                disabled={noEdit}
                label="Tỷ lệ sinh viện năm 1 tại sự kiện"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.first_year_attendee_percentage?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("exclusive_sponsorship")}
                id="exclusive_sponsorship"
                name="exclusive_sponsorship"
                error={errors.exclusive_sponsorship ? true : false}
                disabled={noEdit}
                label="Giá trị Gói tài trợ Độc quyền"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.exclusive_sponsorship?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("diamond_sponsorship")}
                id="diamond_sponsorship"
                name="diamond_sponsorship"
                error={errors.diamond_sponsorship ? true : false}
                disabled={noEdit}
                label="Giá trị Gói tài trợ Kim cương"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.diamond_sponsorship?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("gold_sponsorship")}
                id="gold_sponsorship"
                name="gold_sponsorship"
                error={errors.gold_sponsorship ? true : false}
                disabled={noEdit}
                label="Giá trị Gói tài trợ Vàng"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.gold_sponsorship?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("silver_sponsorship")}
                id="silver_sponsorship"
                name="silver_sponsorship"
                error={errors.silver_sponsorship ? true : false}
                disabled={noEdit}
                label="Giá trị Gói tài trợ Bạc"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.gold_sponsorship?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("bronze_sponsorship")}
                id="bronze_sponsorship"
                name="bronze_sponsorship"
                error={errors.bronze_sponsorship ? true : false}
                disabled={noEdit}
                label="Giá trị Gói tài trợ Đồng"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.bronze_sponsorship?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("companion_sponsorship")}
                id="companion_sponsorship"
                name="companion_sponsorship"
                error={errors.companion_sponsorship ? true : false}
                disabled={noEdit}
                label="Giá trị Gói tài trợ  Đồng hành - Hảo tâm"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.companion_sponsorship?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("other_sponsorship")}
                id="other_sponsorship"
                name="other_sponsorship"
                error={errors.other_sponsorship ? true : false}
                disabled={noEdit}
                label="Giá trị Gói tài trợ  Khác (Nếu có)"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.other_sponsorship?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("proposal")}
                id="proposal"
                name="proposal"
                error={errors.proposal ? true : false}
                disabled={noEdit}
                label="Link Proposal tài trợ"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.proposal?.message}
              </Typography>
            </FormControl>
          </Grid>
        </Grid>

        <Box my={5} p={3} height={250} border={1}>
          Lý do từ chối
        </Box>

        <Box my={1} display="flex" justifyContent="space-between">
          <Button sx={{ textDecoration: "none" }} variant="contained">
            Lưu nháp
          </Button>

          <Button sx={{ textDecoration: "none" }} variant="contained">
            Hủy bài nháp
          </Button>

          <Button sx={{ textDecoration: "none" }} variant="contained">
            Hủy bỏ
          </Button>
        </Box>

        <Box my={1} display="flex" justifyContent="space-between">
          <Button
            type="submit"
            sx={{ textDecoration: "none" }}
            variant="contained"
          >
            Gửi bài
          </Button>
          <Button sx={{ textDecoration: "none" }} variant="contained">
            Chấp nhận
          </Button>
          <Button sx={{ textDecoration: "none" }} variant="contained">
            Từ chối
          </Button>
        </Box>
      </LocalizationProvider>
    </form>
  );
};

export default EventForm;
