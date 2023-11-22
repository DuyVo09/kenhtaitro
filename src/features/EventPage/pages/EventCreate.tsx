import { Box, Button, Typography, Grid } from "@mui/material";
import { EventForm } from "../components";
import { IEventDataModel } from "../models";
import { SubmitHandler } from "react-hook-form";
import { organizerEventApi } from "../eventsApi";

const mockData: IEventDataModel = {
  // bannerImage: "string",
  full_name: "",
  phone: "string",
  email: "string",
  school: "string",
  location: "string",
  event_name: "string",
  event_description: "string",
  event_image: "",
  organizer: "string",
  start_date: new Date(),
  end_date: new Date(),
  deadline_sponsorship: "",
  event_field: "",
  total_reach: 0,
  total_reach_in_house: 0,
  first_year_attendee_percentage: 0,
  exclusive_sponsorship: 100,
  diamond_sponsorship: 0,
  gold_sponsorship: 0,
  silver_sponsorship: 0,
  bronze_sponsorship: 0,
  companion_sponsorship: 0,
  other_sponsorship: 0,
  proposal: "string",
  notes: "",
  is_published: false,
  is_edit: false,
  creator_id: 1,
  event_type_id: 1,
};

const formStatus = "Waiting";

export function EventCreate() {
  const handleFormSubmit: SubmitHandler<IEventDataModel> = (formValues) => {
    organizerEventApi.sendCreateRequest(formValues).then(
      res => {
        console.log(res);
      }
    ).catch(error => console.log(error))
  };
  
  return (
    <Box px={20} display="flex" flexDirection="column">
      <Box
        my={5}
        border={1}
        display="flex"
        height={150}
        justifyContent="center"
        alignItems="center"
      >
        Ảnh bìa
      </Box>

      <Box
        py={3}
        my={2}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography>THÔNG TIN SỰ KIỆN</Typography>
        <Button sx={{ textDecoration: "none" }} variant="contained">
          Viết bài đăng về sự kiện
        </Button>
      </Box>

      <Box display="flex" alignItems="center">
        <Typography>Sự kiện ID: #123456</Typography>
        <Box mx={10} p={2} border={1}>
          {formStatus}
        </Box>
      </Box>

      <Box my={5}>
        <EventForm
          initialValue={mockData}
          onSubmit={handleFormSubmit}
          noEdit={false}
        />
      </Box>

    </Box>
  );
}
