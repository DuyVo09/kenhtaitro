"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import { AwesomeButton } from "react-awesome-button";
import { EventForm } from "../components/event-form/EventForm";

export function EventCreateSection() {
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
            <EventForm />
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
