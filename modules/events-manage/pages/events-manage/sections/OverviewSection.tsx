import { Box, Typography } from "@mui/material";
import Image from "next/image";

export function OverviewSection() {
  return (
    <Box display="flex" width="100%" px="7%" py="100px">
      <Box
        display="flex"
        flex={1}
        flexDirection="column"
        justifyContent="center"
        alignItems='center'
      >
        <Typography className="text-6xl font-bold py-3">
          Checkout your <span className="text-primary">followed events</span>{" "}
          now!!
        </Typography>
        <Box display="flex" width="100%" justifyContent="start">
          <Box
            p={2}
            width="140px"
            borderRadius={2}
            className="bg-primary"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            mx={2}
            boxShadow={2}
          >
            <Typography className="text-3xl text-white font-bold">
              5k+
            </Typography>
            <Typography className="font-bold text-white">
              Total Events Annually
            </Typography>
          </Box>

          <Box
            p={2}
            width="140px"
            borderRadius={2}
            className="bg-primary"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            boxShadow={2}
          >
            <Typography className="text-3xl text-white font-bold">
              1k+
            </Typography>
            <Typography className="font-bold text-white">
              Total Big Events
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box height="450px" width="627px" position="relative" borderRadius={2}>
        <Image
          alt="Overview Image"
          src="/images/events/overview.png"
          fill
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
      </Box>
    </Box>
  );
}
