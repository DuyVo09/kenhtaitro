import { useEffect, useState } from "react";
import { Add } from "@mui/icons-material";
import { Box, Button, Pagination, Typography } from "@mui/material";

import Slider from "react-slick";
import { RecentEvents, HotBlogs, CustomerTestimonialCard } from "../components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IEventViewModel } from "../models";
import { businessHomeApi } from "../homepageApi";


export function BusinessView() {
  const [eventList,setEventList] = useState<IEventViewModel[]>([]);
  
  useEffect(() => {
    businessHomeApi.getRecent({limit: 2, page: 1}).then(
      (data) => setEventList(data.data)
    ).catch(error => console.log(error))
  }, [])

  console.log(eventList);
  
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
        <Typography>Sự kiện mới nhất</Typography>
        <Button>Xem tất cả</Button>
      </Box>

      {/* Recent events */}
      

      <Box display="flex" justifyContent="center" alignItems="center" my={5}>
        <Pagination
          hideNextButton
          hidePrevButton
          count={3}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </>
  );
}
