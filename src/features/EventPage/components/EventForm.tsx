import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { IEventFormProps, IEventDataModel } from "../models";
import {
  Grid,
  Typography,
  FormControl,
  FormLabel,
  TextField,
  Button,
  Modal,
} from "@mui/material";
import { useState } from "react";
import { ImgUploadModal } from "./ImgUploadModal";

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
  startTime: yup.number().required(),
  endTime: yup.number().required(),
  sponsorDeadline: yup.number().required(),
  eventCategory: yup.array().required(),
  totalReachCount: yup.number().required(),
  offlineReachCount: yup.number().required(),
  firstYearPersent: yup.number(),
  exclusivePackagePrice: yup.string().required(),
  diamondPackagePrice: yup.string().required(),
  goldPackagePrice: yup.string().required(),
  silverPackagePrice: yup.string().required(),
  bronzePackagePrice: yup.string().required(),
  companionPackagePrice: yup.string().required(),
  otherPackagePrice: yup.string(),
  proposalLink: yup.string().required(),
});

const EventForm = ({ initialValue, onSubmit, noEdit }: IEventFormProps) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleFormSubmit = (formValues: IEventDataModel) => {
    try {
      onSubmit?.(formValues);
    } catch (error: any) {}
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

        <Grid item xs={10}>
          <FormControl fullWidth variant="standard">
            <TextField
              {...register("eventImages")}
              id="eventImages"
              name="eventImages"
              //   error={errors.eventImages ? true : false}
              disabled={noEdit}
              label="Hình ảnh sự kiện"
            />
          </FormControl>
        </Grid>

        <Grid item xs={2}>
          <Button onClick={handleOpen} variant="contained">
            Mở modal upload
          </Button>
          <Modal
            open={openModal}
            onClose={handleClose}
          >
            <ImgUploadModal />
          </Modal>
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
            <TextField
              {...register("contactName")}
              id="contactName"
              name="contactName"
              //   error={errors.contactName ? true : false}
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
              {...register("contactName")}
              id="contactName"
              name="contactName"
              //   error={errors.contactName ? true : false}
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
              {...register("contactName")}
              id="contactName"
              name="contactName"
              //   error={errors.contactName ? true : false}
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
              {...register("contactName")}
              id="contactName"
              name="contactName"
              //   error={errors.contactName ? true : false}
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
              {...register("contactName")}
              id="contactName"
              name="contactName"
              //   error={errors.contactName ? true : false}
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
              {...register("contactName")}
              id="contactName"
              name="contactName"
              //   error={errors.contactName ? true : false}
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
              {...register("contactName")}
              id="contactName"
              name="contactName"
              //   error={errors.contactName ? true : false}
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
              {...register("contactName")}
              id="contactName"
              name="contactName"
              //   error={errors.contactName ? true : false}
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
              {...register("contactName")}
              id="contactName"
              name="contactName"
              //   error={errors.contactName ? true : false}
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
              {...register("contactName")}
              id="contactName"
              name="contactName"
              //   error={errors.contactName ? true : false}
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
              {...register("contactName")}
              id="contactName"
              name="contactName"
              //   error={errors.contactName ? true : false}
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
              {...register("contactName")}
              id="contactName"
              name="contactName"
              //   error={errors.contactName ? true : false}
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
              {...register("contactName")}
              id="contactName"
              name="contactName"
              //   error={errors.contactName ? true : false}
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
              {...register("contactName")}
              id="contactName"
              name="contactName"
              //   error={errors.contactName ? true : false}
              disabled={noEdit}
              label="Họ và tên"
            />
            <Typography variant="inherit" color={"error"}>
              {errors.contactName?.message}
            </Typography>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};

export default EventForm;
