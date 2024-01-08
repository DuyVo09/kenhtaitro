"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import { AwesomeButton } from "react-awesome-button";
import { EventForm } from "../_components/event-form/EventForm";
import { IEventFormModel } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactiveButton from "reactive-button";
import { Email, PhoneInTalk, Place } from "@mui/icons-material";
import { SocialIcon } from "react-social-icons";
import SideContactUsSection from "@/common/sections/SideContactUsSection";
import { useState } from "react";
import { deleteDraftEvent, submitEvent } from "@/apis/events";
import { resolver } from "../_components/event-form/resolver";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React from "react";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export function EventCreateSection() {
  const [rejected, setRejected] = useState(false);
  const [open, setOpen] = useState(false);
  const [eventMessage, setEventMessage] = useState("");
  const initialValues: IEventFormModel = {
    full_name: "",
    phone: "",
    email: "",
    school: "",
    location: "",
    province: "",
    district: "",
    event_name: "",
    event_description: "",
    event_image: [],
    organizer: "",
    start_date: new Date(),
    end_date: new Date(),
    deadline_sponsorship: new Date(),
    event_category: [],
    tags: [],
    total_reach: 0,
    total_reach_in_house: 0,
    first_year_attendee_percentage: 0,
    exclusive_sponsorship: 0,
    diamond_sponsorship: 0,
    gold_sponsorship: 0,
    silver_sponsorship: 0,
    bronze_sponsorship: 0,
    companion_sponsorship: 0,
    proposal: ""
  };

  const {
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<IEventFormModel>({ 
    resolver, defaultValues: initialValues 
  });

  const createEvent = async () => {
    const data = getValues();
    const res = await submitEvent("organizer/event", data);
    setOpen(true);
    setEventMessage(res.detail);
  };

  const createDraft = async () => {
    const data = getValues();
    const res = await submitEvent("organizer/draft", data);
    console.log(res);
    setOpen(true);
    setEventMessage(res.detail);
  }
  
  const deleteDraft = async (id: number) => {
    const res = await deleteDraftEvent(id);
  }
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Box py="50px" display="flex" flexDirection="column" width="100%">
      <Snackbar 
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {eventMessage}
        </Alert>
      </Snackbar>
      
      <Typography className="font-bold text-4xl my-10">
        <span className="text-primary">ĐĂNG KÝ </span>SỰ KIỆN
      </Typography>

      <Box display="flex" justifyContent="space-between" my={5}>
        <Box
          className="bg-blue-200/50"
          px={2}
          py={1}
          width="max-content"
          borderRadius={2}
        >
          <Typography className="text-primary text-[22px]">
            Sự kiện ID: #1234
          </Typography>
        </Box>

        {/* <ReactiveButton color="primary" /> */}
        <AwesomeButton type="primary">
          <Typography className="font-medium">Viết bài về sự kiện</Typography>
        </AwesomeButton>
      </Box>

      <Grid container className="bg-white" p={1} spacing={1}>
        <Grid item xs={8}>
          <Box
            className="bg-blue-200 bg-opacity-30"
            display="flex"
            flexDirection="column"
            p={3}
          >
            <EventForm initialValues={initialValues} noEdit={false} 
                control={control} errors={errors} setValue={setValue}/>
          </Box>
        </Grid>

        <Grid item xs={4}>
          <SideContactUsSection />
        </Grid>
      </Grid>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="bg-blue-200 bg-opacity-30"
        p={5}
      >
        <Box className="grid grid-cols-3 gap-9">
          <ReactiveButton
            className="bg-primary"
            idleText={
              <Typography className="font-bold  p-3">Lưu nháp</Typography>
            }
            onClick={() => createDraft()}
            size="large"
            style={{ borderRadius: "12px" }}
          />

          <ReactiveButton
            className="bg-primary"
            idleText={
              <Typography className="font-bold  p-3">Huỷ bỏ</Typography>
            }
            onClick={() => deleteDraft(1)} // must be changed
            size="large"
            style={{ borderRadius: "12px" }}
          />

          <ReactiveButton
            className="bg-primary"
            idleText={
              <Typography className="font-bold  p-3">
                Huỷ bỏ bản nháp
              </Typography>
            }
            size="large"
            style={{ borderRadius: "12px" }}
          />

          <ReactiveButton
            className="bg-primary"
            idleText={
              <Typography className="font-bold  p-3">Gửi bài</Typography>
            }
            onClick={() => createEvent()}
            size="large"
            style={{ borderRadius: "12px" }}
          />

          <ReactiveButton
            className="bg-primary"
            idleText={
              <Typography className="font-bold  p-3">Chấp nhận</Typography>
            }
            size="large"
            style={{ borderRadius: "12px" }}
          />

          <ReactiveButton
            className="bg-primary"
            idleText={
              <Typography className="font-bold  p-3">Từ chối</Typography>
            }
            size="large"
            style={{ borderRadius: "12px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
