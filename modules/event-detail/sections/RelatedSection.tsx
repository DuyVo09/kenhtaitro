import { EventCard } from "@/common/components/EventCard";
import { mockEventList } from "@/modules/home/mockEventList";
import { Box, Grid, Typography } from "@mui/material";

export function RelatedSection() {
  return (
    <Box display="flex" flexDirection="column" width='100%' px="7%" py="50px">
      <Typography className="font-bold text-2xl my-3">
        Sự kiện <span className="text-primary">liên quan</span>
      </Typography>
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
              width="100%"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
