"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import { AwesomeButton } from "react-awesome-button";
import { EventForm } from "../_components/event-form/EventForm";
import { IEventFormModel } from "@/types";
import { SubmitHandler } from "react-hook-form";
import ReactiveButton from "reactive-button";
import { Email, PhoneInTalk, Place } from "@mui/icons-material";
import { SocialIcon } from "react-social-icons";
import SideContactUsSection from "@/common/sections/SideContactUsSection";
import { useState } from "react";

export function EventCreateSection() {
  const [rejected, setRejected] = useState(false);
  
  const handleFormSubmit: SubmitHandler<IEventFormModel> = (formValues) => {
    console.log(formValues);
  };

  const initialValues: IEventFormModel = {
    full_name: "",
    phone: "",
    email: "",
    school: "",
    location: "",
    area: "",
    district: "",
    event_name: "",
    event_description: "",
    event_image: [],
    organizer: "",
    start_date: new Date(),
    end_date: new Date(),
    deadline_sponsorship: "",
    event_field: [],
    tags: [],
    total_reach: 0,
    total_reach_in_house: 0,
    first_year_attendee_percentage: undefined,
    exclusive_sponsorship: 0,
    diamond_sponsorship: 0,
    gold_sponsorship: 0,
    silver_sponsorship: 0,
    bronze_sponsorship: 0,
    companion_sponsorship: 0,
    other_sponsorship: null,
    proposal: "",
    notes: null,
    is_published: undefined,
    is_edit: undefined,
    creator_id: undefined,
    event_type_id: undefined,
  };

  return (
    <Box py="50px" display="flex" flexDirection="column" width="100%">
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
            <EventForm initialValues={initialValues} noEdit={false} />
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
            size="large"
            style={{ borderRadius: "12px" }}
          />

          <ReactiveButton
            className="bg-primary"
            idleText={
              <Typography className="font-bold  p-3">Huỷ bỏ</Typography>
            }
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
