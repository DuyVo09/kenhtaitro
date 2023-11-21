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
  bannerImage: yup.string().required(),
  contactName: yup.string().required(),
  contactPhone: yup.string().required(),
  contactEmail: yup.string().required("Vui lòng nhập email liên hệ").email(),
  schoolName: yup.string().required(),
  location: yup.string().required(),
  eventName: yup.string().required().max(90),
  eventDescription: yup.string().required().min(50).max(3000),
  eventImages: yup.array(),
  eventOrganization: yup.string().required(),
  startTime: yup.date().required(),
  endTime: yup.date().required(),
  sponsorDeadline: yup.date().required(),
  eventCategory: yup.array().required(),
  totalReachCount: yup.number().required(),
  offlineReachCount: yup.number().required(),
  firstYearPersent: yup.number(),
  exclusivePackageValue: yup.string().required(),
  diamondPackageValue: yup.string().required(),
  goldPackageValue: yup.string().required(),
  silverPackageValue: yup.string().required(),
  bronzePackageValue: yup.string().required(),
  companionPackageValue: yup.string().required(),
  otherPackageValue: yup.string(),
  proposalLink: yup.string().required(),
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
    setFiles((pre) => [...pre, ...files])
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
                {...register("contactName")}
                id="contactName"
                name="contactName"
                error={errors.contactName ? true : false}
                disabled={noEdit}
                label="Họ và tên"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.contactName?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("contactPhone")}
                id="contactPhone"
                name="contactPhone"
                error={errors.contactPhone ? true : false}
                disabled={noEdit}
                label="Số điện thoại"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.contactPhone?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("contactEmail")}
                id="contactEmail"
                name="contactEmail"
                error={errors.contactEmail ? true : false}
                disabled={noEdit}
                label="Email"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.contactEmail?.message}
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
                {...register("schoolName")}
                id="schoolName"
                name="schoolName"
                error={errors.schoolName ? true : false}
                disabled={noEdit}
                label="Tên trường"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.schoolName?.message}
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
                {...register("eventName")}
                id="eventName"
                name="eventName"
                error={errors.eventName ? true : false}
                disabled={noEdit}
                label="Tên sự kiện"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.eventName?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                multiline
                rows={5}
                maxRows={5}
                {...register("eventDescription")}
                id="eventDescription"
                name="eventDescription"
                error={errors.eventDescription ? true : false}
                disabled={noEdit}
                label="Mô tả sự kiện"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.eventDescription?.message}
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
                {...register("eventOrganization")}
                id="eventOrganization"
                name="eventOrganization"
                error={errors.eventOrganization ? true : false}
                disabled={noEdit}
                label="Đơn vị tổ chức sự kiện"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.eventOrganization?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <DateTimePicker
                {...register("startTime")}
                label="Thời gian bắt đầu"
                value={startTimeValue}
                onChange={(e) => setStartTimeValue(e)}
                disabled={noEdit}
              />
              <Typography variant="inherit" color={"error"}>
                {errors.startTime?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <DateTimePicker
                {...register("endTime")}
                label="Thời gian kết thúc"
                value={endTimeValue}
                onChange={(e) => setEndTimeValue(e)}
                disabled={noEdit}
              />
              <Typography variant="inherit" color={"error"}>
                {errors.endTime?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <DateTimePicker
                {...register("sponsorDeadline")}
                label="Thời hạn cuối nhận tài trợ"
                value={deadlineValue}
                onChange={(e) => setDeadlineValue(e)}
                disabled={noEdit}
              />
              <Typography variant="inherit" color={"error"}>
                {errors.sponsorDeadline?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <Autocomplete
                {...register("eventCategory")}
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
                {errors.eventCategory?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("totalReachCount")}
                id="totalReachCount"
                name="totalReachCount"
                error={errors.totalReachCount ? true : false}
                disabled={noEdit}
                label="Tổng lượt tiếp cận"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.totalReachCount?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("offlineReachCount")}
                id="offlineReachCount"
                name="offlineReachCount"
                error={errors.offlineReachCount ? true : false}
                disabled={noEdit}
                label="Lượt tiếp cận trực tiếp tại sự kiện"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.offlineReachCount?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("firstYearPersent")}
                id="firstYearPersent"
                name="firstYearPersent"
                error={errors.firstYearPersent ? true : false}
                disabled={noEdit}
                label="Tỷ lệ sinh viện năm 1 tại sự kiện"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.firstYearPersent?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("exclusivePackageValue")}
                id="exclusivePackageValue"
                name="exclusivePackageValue"
                error={errors.exclusivePackageValue ? true : false}
                disabled={noEdit}
                label="Giá trị Gói tài trợ Độc quyền"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.exclusivePackageValue?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("diamondPackageValue")}
                id="diamondPackageValue"
                name="diamondPackageValue"
                error={errors.diamondPackageValue ? true : false}
                disabled={noEdit}
                label="Giá trị Gói tài trợ Kim cương"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.diamondPackageValue?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("goldPackageValue")}
                id="goldPackageValue"
                name="goldPackageValue"
                error={errors.goldPackageValue ? true : false}
                disabled={noEdit}
                label="Giá trị Gói tài trợ Vàng"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.goldPackageValue?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("bronzePackageValue")}
                id="bronzePackageValue"
                name="bronzePackageValue"
                error={errors.bronzePackageValue ? true : false}
                disabled={noEdit}
                label="Giá trị Gói tài trợ Đồng"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.bronzePackageValue?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("companionPackageValue")}
                id="companionPackageValue"
                name="companionPackageValue"
                error={errors.companionPackageValue ? true : false}
                disabled={noEdit}
                label="Giá trị Gói tài trợ  Đồng hành - Hảo tâm"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.companionPackageValue?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("otherPackageValue")}
                id="otherPackageValue"
                name="otherPackageValue"
                error={errors.otherPackageValue ? true : false}
                disabled={noEdit}
                label="Giá trị Gói tài trợ  Khác (Nếu có)"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.otherPackageValue?.message}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <TextField
                {...register("proposalLink")}
                id="proposalLink"
                name="proposalLink"
                error={errors.proposalLink ? true : false}
                disabled={noEdit}
                label="Link Proposal tài trợ"
              />
              <Typography variant="inherit" color={"error"}>
                {errors.proposalLink?.message}
              </Typography>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </LocalizationProvider>
  );
};

export default EventForm;
