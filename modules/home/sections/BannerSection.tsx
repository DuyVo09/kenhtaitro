import AppHeader from "@/components/AppHeader";
import { Box, Typography } from "@mui/material";
import { url } from "inspector";
import Image from "next/image";

const BannerSection = () => {
  return (
    <Box
      className="flex flex-col h-[800px] w-full bg-cover"
      style={{ backgroundImage: "url('/images/homeBanner.png')" }}
    >
      <AppHeader />
      <Box display='flex' flex={1}>
        <Box display='flex' flexDirection='column' flex={1} border={1}>
          <Typography color="#D7C7FF" className="font-semibold">
            Organization - Upto 500 attendees
          </Typography>

          <Typography className="text-primary text-6xl">
            International Business Conference 2023
          </Typography>
        </Box>

        <Box display='flex' flex={1} border={1}>

        </Box>
      </Box>
    </Box>
  );
};

export { BannerSection };
