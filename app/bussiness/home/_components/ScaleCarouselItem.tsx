import { TEventCardProps } from "@/common/components/EventCard";
import { GroupsOutlined } from "@mui/icons-material";
import { Paper, Box, Typography } from "@mui/material";

import Image from "next/legacy/image";

export const ScaleCarouselItem = ({
  img,
  title,
  description,
  location,
  participant,
  carouselCenter,
  ...boxProps
}: TEventCardProps & { carouselCenter: boolean }) => {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      // sx={{
      //   transform: carouselCenter ? "scale(1)" : "scale(0.9) translateY(50%)",
      //   transition: "transform 0.7s ease 0s",
      // }}
    >
      <Paper
        sx={{
          height: carouselCenter ? "auto" : "300px",
          width: "400px",
          m: 3,
          transition: "height 0.3s ease 0s",
          translateY: carouselCenter ? 0 : "-100%",
          ...boxProps,
        }}
      >
        <Box
          display="flex"
          flex={1}
          height="300px"
          width="400px"
          position="relative"
          zIndex={2}
        >
          <Image
            src={img}
            alt="Event image"
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>

      </Paper>
    </Box>
  );
};
