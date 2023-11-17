import { Box, Button, Typography } from "@mui/material";
import { EventForm } from "../components";
import { IEventDataModel } from "../models";
import { SubmitHandler } from "react-hook-form";

const mockData: IEventDataModel = {
  bannerImage: "string",
  contactName: "string",
  contactPhone: "string",
  contactEmail: "string",
  schoolName: "string",
  location: "string",
  eventName: "string",
  eventDescription: "string",
  eventOrganization: "string",
  startTime: new Date(),
  endTime: new Date(),
  sponsorDeadline: new Date(),
  eventCategory: [],
  totalReachCount: 10,
  offlineReachCount: 11,
  exclusivePackageValue: "string",
  diamondPackageValue: "string",
  goldPackageValue: "string",
  silverPackageValue: "string",
  bronzePackageValue: "string",
  companionPackageValue: "string",
  proposalLink: "string",
};

const formStatus = "Waiting";

export function EventCreate() {
  const handleFormSubmit: SubmitHandler<IEventDataModel> = (formValues) => {
    console.log(formValues);
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

      <Box>
        
      </Box>

      <Box my={5} p={3} border={1}>Lý do từ chối</Box>
    </Box>
  );
}
