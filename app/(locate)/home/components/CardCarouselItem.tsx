import { TEventCardProps } from "@/common/components/EventCard";
import { GroupsOutlined } from "@mui/icons-material";
import { Paper, Box, Typography } from "@mui/material";

import Image from "next/image";

export const CardCarouselItem = ({
  img,
  title,
  description,
  location,
  participant,
  carouselCenter,
  ...boxProps
}: TEventCardProps & { carouselCenter: boolean }) => {
  return (
    <Paper
      sx={{
        height: carouselCenter ? "auto" : "300px",
        width: "300px",
        m: 3,
        transition: "height 0.5s ease",
        overflow: "hidden",
        ...boxProps,
      }}
    >
      <Box
        display="flex"
        flex={1}
        height="300px"
        width="300px"
        position="relative"
      >
        <Image
          src={img}
          alt="Event image"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          p: 2,
          display: "flex",
          height: carouselCenter ? "auto" : 0,
          overflow: "hidden",
          transition: "height 0.5s ease",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-primary to-[#D7C7FF] py-5">
          {title}
        </Typography>
        <Typography className="font-light py-2">{description}</Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          flex={1}
          width="100%"
          className="text-primary"
        >
          <Typography
            sx={{
              display: "flex",
              flex: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {location}
          </Typography>
          <Box display="flex">
            <GroupsOutlined sx={{ mx: 1 }} />
            <Typography>{`Upto ${participant}`}</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};
