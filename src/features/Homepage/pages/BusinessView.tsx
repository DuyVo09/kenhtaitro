import { useEffect, useState } from "react";
import { Box, Button, Pagination, Typography } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IEventViewModel } from "../models";
import { businessHomeApi } from "../homepageApi";
import EventReview from "../components/EventReview";

// const mockEvent: IEventViewModel[] = [{
//   id: 1,
//   event_image: "",
//   event_name: "Some name",
//   event_description: "Description about the event",
//   organizer: "First organizer",
//   location: "Viet Nam",
//   created_at: new Date()
// }]

export function BusinessView() {
  const [eventList, setEventList] = useState<IEventViewModel[]>([]);
  const [page,setPage] = useState(1);

  const handleChangePage = (e: any, value: number) => {
    setPage(value)
  }

  useEffect(() => {
    // setEventList(mockEvent);
    businessHomeApi
      .getRecent({ limit: 2, page: page })
      .then((data) => {
        setEventList(data.data.data)})
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <>
      {/* Banner */}
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
        <Typography variant="h6" fontWeight="bold">Sự kiện mới nhất</Typography>
        <Button>Xem tất cả</Button>
      </Box>

      {/* Recent events */}
      {eventList && eventList.map((e) => (
        <EventReview
          imgUrls={e.event_image}
          eventName={e.event_name}
          description={e.event_description}
          organization={e.organizer}
          location={e.location}
          businessView={true}
        />
      ))}
      {eventList.length === 0 && (<Box>
        Không tìm thấy sự kiện nào mới gần đây
      </Box>)}

      <Box display="flex" justifyContent="center" alignItems="center" my={5}>
        <Pagination
          hideNextButton
          hidePrevButton
          page={page}
          onChange={handleChangePage}
          count={3}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </>
  );
}
