import { getRelatedEvents } from "@/apis/events";
import { EventCard } from "@/common/components/EventCard";
import { mockEventList } from "@/common/mockData/mockEventList";
import { Box, Grid, Typography } from "@mui/material";

export async function RelatedSection({id} : {id: number}) {
  const data = (await getRelatedEvents(id)).data;
  return (
    <Box display="flex" flexDirection="column" width='100%' px="7%" py="50px">
      <Typography className="font-bold text-2xl my-3">
        Sự kiện <span className="text-primary">liên quan</span>
      </Typography>
      <Grid container spacing={4}>
        {data.map((item) => (
          <Grid item key={item.id} xs={4}>
            <EventCard
              img={item.event_image[0]}
              title={item.event_name}
              description={item.event_description}
              location={item.event_description}
              date={item.start_date}
              participant={item.total_reach}
              width="100%"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
