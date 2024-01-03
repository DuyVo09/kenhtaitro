import { DescripEventCard } from "@components/DescripEventCard";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/legacy/image";

const eventData = {
  img: "/images/homepage/eventImg.png",
  title:
    "Event title that a little bit long. Nvm let make it really long after all",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et",
  location: "Đại học Bách Khoa TPHCM",
  participant: 500,
};

export function NewestEventSection() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
      width="100%"
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
          <DescripEventCard
            img={eventData.img}
            title={eventData.title}
            description={eventData.description}
            location={eventData.location}
            participant={eventData.participant}
          />

          <DescripEventCard
            img={eventData.img}
            title={eventData.title}
            description={eventData.description}
            location={eventData.location}
            participant={eventData.participant}
          />
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
              style={{ objectFit: "cover" }}
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
          <DescripEventCard
            img={eventData.img}
            title={eventData.title}
            description={eventData.description}
            location={eventData.location}
            participant={eventData.participant}
          />

          <DescripEventCard
            img={eventData.img}
            title={eventData.title}
            description={eventData.description}
            location={eventData.location}
            participant={eventData.participant}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
