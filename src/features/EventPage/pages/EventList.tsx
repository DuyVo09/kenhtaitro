import { Box, Typography, Button, Pagination } from "@mui/material";
import EventReview from "features/Homepage/components/EventReview";
import { useState, useEffect } from "react";
import { IEventViewModel } from "features/Homepage/models";
import { eventsApi } from "../eventsApi";
import { IEventDataModel } from "../models";

// const mockEvent: IEventViewModel[] = [
//   {
//     id: 1,
//     event_image: "",
//     event_name: "Some name",
//     event_description: "Description about the event",
//     organizer: "First organizer",
//     location: "Viet Nam",
//     created_at: new Date(),
//   },
// ];

function EventList() {
  const [eventList, setEventList] = useState<IEventDataModel[]>([]);
  useEffect(() => {
    // z
    eventsApi
      .getAll({ limit: 2, page: 1 })
      .then((data) => setEventList(data.data.data))
      .catch((error) => console.log(error));
  }, []);
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

      {/* Create event */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 4 }}
      >
        <Typography variant="h4" fontWeight="bold">Tất cả sự kiện</Typography>
      </Box>

      <Typography fontWeight="bold">Lọc sự kiện</Typography>

      {/* Recent events */}
      {eventList.map((e) => (
        <EventReview
          imgUrls={e.event_image}
          eventName={e.event_name}
          description={e.event_description}
          organization={e.organizer}
          location={e.location}
          businessView={true}
        />
      ))}

      <Box display="flex" justifyContent="center" alignItems="center" my={5}>
        <Pagination
          hideNextButton
          hidePrevButton
          count={3}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Box>
  );
}

export default EventList;
