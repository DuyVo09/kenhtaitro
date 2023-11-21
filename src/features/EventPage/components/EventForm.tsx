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


const categoriesOpt: ICategoryOption[] = [
  {
    label: "Field 1",
    id: 1,
  },
  {
    label: "Field 2",
    id: 2,
  },
  {
    label: "Field 3",
    id: 3,
  },
  {
    label: "Field 4",
    id: 4,
  },
  {
    label: "Field 5",
    id: 5,
  },
];

const validationSchema = yup.object().shape({
  // bannerImage: yup.string().required(),
  full_name: yup.string().required(),
  phone: yup.string().required(),
  email: yup.string().required("Vui lòng nhập email liên hệ"),
  school: yup.string().required(),
  location: yup.string().required(),
  event_name: yup.string().required().max(90),
  event_description: yup.string().required().min(50).max(3000),
  event_image: yup.string(),
  organizer: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  deadline_sponsorship: yup.string().required(),
  event_field: yup.string().required(),
  total_reach: yup.number().required(),
  total_reach_in_house: yup.number().required(),
  first_year_attendee_percentage: yup.number(),
  exclusive_sponsorship: yup.number().required(),
  diamond_sponsorship: yup.number().required(),
  gold_sponsorship: yup.number().required(),
  silver_sponsorship: yup.number().required(),
  bronze_sponsorship: yup.number().required(),
  companion_sponsorship: yup.number().required(),
  other_sponsorship: yup.number(),
  proposal: yup.string().required(),
});

const EventForm = ({ initialValue, onSubmit, noEdit }: IEventFormProps) => {
  const [startTimeValue, setStartTimeValue] = useState<Dayjs | null>();
  const [endTimeValue, setEndTimeValue] = useState<Dayjs | null>();
  const [deadlineValue, setDeadlineValue] = useState<Dayjs | null>();
  const [files, setFiles] = useState<File[]>([]);

  const [selectedCategories, setSelectedCategories] = useState<
    ICategoryOption[]
  >([]);

  const handleUploadFiles = (files: File[]) => {
    setFiles((pre) => [...pre, ...files]);
    setValue("event_image", "");
  }

  const handleFormSubmit = (formValues: IEventDataModel) => {
    try {
      onSubmit?.(formValues);
    } catch (error: any) { }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm({
    defaultValues: initialValue,
    resolver: yupResolver(validationSchema),
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
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
                {...register("start_date")}
                label="Thời gian bắt đầu"
                value={startTimeValue}
                onChange={(e) => setStartTimeValue(e)}
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
                {...register("end_date")}
                label="Thời gian kết thúc"
                value={endTimeValue}
                onChange={(e) => setEndTimeValue(e)}
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
                {...register("deadline_sponsorship")}
                label="Thời hạn cuối nhận tài trợ"
                value={deadlineValue}
                onChange={(e) => setDeadlineValue(e)}
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
                {...register("event_field")}
                multiple
                id="eventCategory"
                options={categoriesOpt}
                getOptionLabel={(opt) => opt.label}
                filterSelectedOptions
                value={selectedCategories}
                onChange={(e, value) => setSelectedCategories(value)}
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
      </form>
    </LocalizationProvider>
  );
};

export default EventForm;
