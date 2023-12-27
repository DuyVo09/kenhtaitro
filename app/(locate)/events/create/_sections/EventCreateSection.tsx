"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import { AwesomeButton } from "react-awesome-button";
import { EventForm } from "../_components/event-form/EventForm";
import { IEventFormModel } from "@/types";
import { SubmitHandler } from "react-hook-form";

export function EventCreateSection() {
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
    event_field: "",
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
          <Box
            className="bg-blue-200/30"
            display="flex"
            flexDirection="column"
            p={2}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
