import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { TEventCardProps } from "./types";
import Image from "next/image";
import { GroupsOutlined } from "@mui/icons-material";

export const EventCard = ({
  img,
  title,
  description,
  location,
  participant,
}: TEventCardProps) => {
  return (
    <Card sx={{ width: '400px', m:3 }}>
      <Box
        display="flex"
        flex={1}
        minHeight="350px"
        width="100%"
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
          <Typography sx={{display: 'flex', flex: 1}}>{location}</Typography>
          <Box display="flex">
            <GroupsOutlined sx={{ mx: 1 }} />
            <Typography>{`Upto ${participant}`}</Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};
