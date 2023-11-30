import { Box, Typography, Chip, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IEventDataModel } from "../models";
import { eventsApi } from "../eventsApi";

const fieldList: string[] = ["Field 1", "Field 2", "Field 3", "Field 4"];

export function EventDetail() {
  const { id } = useParams();
  const [eventDetail, setEventDetail] = useState<IEventDataModel>();

  useEffect(() => {
    if (id) {
      eventsApi
        .getById(parseInt(id))
        .then((res) => {
          setEventDetail(res.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  return (
    <Box px={20} display="flex" flexDirection="column">
      <Typography my={2} fontWeight="bold" variant="h4">
        Nội dung sự kiện
      </Typography>

      <Typography my={2}>{eventDetail?.event_name}</Typography>

      <Box display="flex" alignItems="center">
        <Typography marginRight={8}>{eventDetail?.organizer}</Typography>

        {/* {fieldList.map((e) => (
          <Chip sx={{ mx: 1 }} label={e} />
        ))} */}
        <Chip sx={{ mx: 1 }} label={eventDetail?.event_field} />
      </Box>

      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid item xs={9}>
          <Box
            marginBottom={5}
            border={1}
            display="flex"
            height={150}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              width="100%"
              height="100%"
              component="img"
              src={eventDetail?.event_image}
              sx={{ objectFit: "contain" }}
            />
          </Box>

          <Box
            border={1}
            p={4}
            display="flex"
            height={550}
            justifyContent="center"
            alignItems="center"
          >
            {eventDetail?.event_description}
          </Box>
        </Grid>

        <Grid item xs={3}>
          <Typography textAlign="center" sx={{ my: 1 }}>
            21 / 12 / 2023
          </Typography>

          <Typography textAlign="center" sx={{ my: 1 }}>
            21 / 12 / 2023
          </Typography>

          <Typography textAlign="center" sx={{ my: 1 }}>
            Event location
          </Typography>

          <Typography textAlign="center" sx={{ my: 1 }}>
            150 người
          </Typography>
        </Grid>
      </Grid>
      <Typography>22 tháng 3 2022 15h:00:35</Typography>
    </Box>
  );
}
