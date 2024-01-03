import { Box, Paper, Typography } from "@mui/material";
import { TEventCardProps } from "./types";
import Image from "next/image";
import { GroupsOutlined } from "@mui/icons-material";

export const DescripEventCard = ({
  img,
  title,
  description,
  location,
  participant,
  ...rest
}: TEventCardProps) => {
  return (
    <Paper sx={{ width: rest.width ?? "300px", m: 3 }}>
      <Box
        display="flex"
        flex={1}
        height={rest.height ?? "300px"}
        width={rest.width ?? "300px"}
        position="relative"
      >
        <Image
          src={img}
          alt="Event image"
          fill
          style={{
            objectFit: "cover",
            maxWidth: "100%",
            height: "auto"
          }} />
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
