"use client";

import { Search } from "@mui/icons-material";
import {
  Box,
  Grid,
  InputAdornment,
  InputBase,
  OutlinedInput,
  Typography,
} from "@mui/material";

import { mockEventList } from "../../../../common/mockData/mockEventList";
import { EventCard } from "@/common/components/EventCard";
import { PublishedEvent } from "@/types";
import { useEffect, useState } from "react";
import { getAllPublishedEvents } from "@/apis/events";

export function EventListSection() {
  const [allEventList, setAllEventList] = useState<PublishedEvent[]>([]);
  useEffect(() => {
    getAllPublishedEvents().then((res) => {
      if (res.status_code === 200) setAllEventList(res.data);
    });
  }, []);
  return (
    <Box display="flex" width="100%" flexDirection="column" px="7%" py='50px'>
      <Box display="flex" p={3}>
        <Box display="flex" flex={1} alignItems="center">
          <Typography className="text-4xl uppercase font-bold text-primary">
            Tất cả
          </Typography>{" "}
          <Typography className="text-4xl uppercase font-bold ml-4">
            Sự kiện
          </Typography>
        </Box>

        <OutlinedInput
          id="event-search"
          placeholder="Tìm kiếm"

          sx={{
            borderRadius: 3,
            borderColor: "#0986CA",
            boxShadow: 2,
            input: {
              "&::placeholder": {
                color: "#0986CA",
              },
            },
          }}
          startAdornment={
            <InputAdornment position="start">
              <Search sx={{ color: "#0986CA" }} />
            </InputAdornment>
          }
        />
      </Box>
      <Grid container spacing={4}>
        {allEventList.map((data) => (
          <Grid item key={data.event_name} xs={4}>
            <EventCard
              img={data.event_image[0]}
              title={data.event_name}
              description={data.event_description}
              location={data.location}
              date={data.start_date}
              participant={data.total_reach}
              width='100%'
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
