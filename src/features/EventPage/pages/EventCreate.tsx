import { Box } from "@mui/material";
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
  startTime: Date.now(),
  endTime: Date.now(),
  sponsorDeadline: Date.now(),
  eventCategory: [],
  totalReachCount: 10,
  offlineReachCount: 11,
  exclusivePackagePrice: "string",
  diamondPackagePrice: "string",
  goldPackagePrice: "string",
  silverPackagePrice: "string",
  bronzePackagePrice: "string",
  companionPackagePrice: "string",
  proposalLink: "string",
};

export function EventCreate() {
  const handleFormSubmit: SubmitHandler<IEventDataModel> = (formValues) => {
    console.log(formValues);
  };
  return (
    <Box px={35} display="flex" flexDirection="column">
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

      <EventForm
        initialValue={mockData}
        onSubmit={handleFormSubmit}
        noEdit={false}
      />
    </Box>
  );
}
