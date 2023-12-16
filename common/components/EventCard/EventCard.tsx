import { Box, Paper, Typography } from "@mui/material";
import { TEventCardProps } from "./types";
import Image from "next/image";
import { GroupsOutlined } from "@mui/icons-material";

export const EventCard = ({
  img,
  title,
  description,
  location,
  date,
  participant,
  ...rest
}: TEventCardProps) => {
  return (
    <Paper sx={{ width: rest.width ?? "300px", m: 3, ...rest }}>
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
        <Typography className="font-bold  py-5">{title}</Typography>
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
            {date}
          </Typography>
          <Box display="flex">
            <GroupsOutlined sx={{ mx: 1 }} />
            <Typography>{`Upto ${participant}`}</Typography>
          </Box>
        </Box>
        <Typography className="w-full py-5 text-slate-400">{location}</Typography>
      </Box>
    </Paper>
  );
};
