import { Box, Typography } from "@mui/material";
import Image from "next/image";

const imageLst = [
  "/brands/google.svg",
  "/brands/microsoft-6.svg",
  "/brands/stripe-4.svg",
  "/brands/spotify-logo.svg",
  "/brands/youtube-6.svg",
];

export function PartnerSection() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      maxWidth="1440px"
      my={2}
    >
      <Box display="flex" width="100%">
        <Typography className="text-6xl font-bold ml-4">
          <span className="text-primary">ĐỐI TÁC</span> CỦA CHÚNG TÔI
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" py={7}>
        <Typography className="text-lg font-bold">
          We've had the pleasure of working with industry-defining brands.
        </Typography>
        <Typography className="text-lg font-bold">
          These are just some of them.
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between">
        {imageLst.map((image, index) => (
          <Box
            key={index}
            width="200px"
            height="100px"
            // border={1}
            position="relative"
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
