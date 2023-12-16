import { Search } from "@mui/icons-material";
import {
  Box,
  Grid,
  InputAdornment,
  InputBase,
  OutlinedInput,
  Typography,
} from "@mui/material";

import { mockEventList } from "@/modules/home/mockEventList";
import { EventCard } from "@/common/components/EventCard";

export function EventListSection() {
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
        {mockEventList.map((data) => (
          <Grid item key={data.title} xs={4}>
            <EventCard
              img={data.img}
              title={data.title}
              description={data.description}
              location={data.location}
              date="Sunday, March 18, 9.30PM"
              participant={data.participant}
              width='100%'
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
