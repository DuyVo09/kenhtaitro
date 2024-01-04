import { searchNewestEvent } from "@/apis/events";
import { PublishedEvent } from "@/types";
import { DescripEventCard } from "@components/DescripEventCard";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export function NewestEventSection() {
  const [eventData, setEventData] = useState<PublishedEvent[]>([]);
  useEffect(() => {
    searchNewestEvent().then((res) => {
      console.log(res);
      if (res.status_code === 200) setEventData(res.data);
    })
  }, []);
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
      width="100%"
      maxWidth="1440px"
      alignItems="center"
    >
      <Typography className="text-5xl uppercase font-bold p-20">
        Sự kiện <span className="text-primary">mới nhất</span>
      </Typography>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          {eventData.slice(0, eventData.length / 2).map((event, idx) => (
            <DescripEventCard
              key={idx}
              img={event.event_image[0]}
              title={event.event_name}
              description={event.event_description}
              location={event.location}
              participant={event.total_reach}
            />
          ))}
        </Grid>

        <Grid
          item
          xs={0}
          md={0}
          lg={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Box
            height="1000px"
            width="100%"
            maxWidth="450px"
            position="relative"
            sx={{
              "@media (max-width: 1200px)": {
                display: "none",
              },
            }}
          >
            <Image
              alt="Decorate image"
              fill
              src="/images/homepage/newEvent.png"
              style={{
                objectFit: "cover",
                maxWidth: "100%",
              }}
            />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          {eventData.map((event, idx) => (
            <DescripEventCard
              key={idx}
              img={event.event_image[0]}
              title={event.event_name}
              description={event.event_description}
              location={event.location}
              participant={event.total_reach}
            />
          )).slice(eventData.length / 2)}
        </Grid>
      </Grid>
    </Box>
  );
}
