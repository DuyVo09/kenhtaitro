import { Box, Typography } from "@mui/material";

export function SponsorSection() {
  return (
    <Box
      display="flex"
      width="100%"
      p={2}
      alignItems="center"
      justifyContent="center"
    >
      <Typography className="font-extrabold text-pink-300">
        <span className="text-[150px]">S</span>
        <span className="text-[70px]">ponsor</span>
      </Typography>
    </Box>
  );
}
