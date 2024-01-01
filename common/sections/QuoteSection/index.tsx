import {
  East,
  FormatQuote,
  KeyboardBackspace,
  West,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export function QuoteSection() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      className="bg-[#BDE0FE]/50"
      alignItems="center"
      py={4}
    >
      <FormatQuote className="text-primary text-9xl" />

      <Typography className="max-w-2xl text-center text-xl my-3">
        I appreciate your amazing services and professional staff for all your
        hard work and creative thinking. There are many variations of passages
        of rem ipsum available, but the majority have alteration in some form.
      </Typography>

      <Box display="flex" alignItems="center" my={2}>
        <Box display="flex">
          <West />
          <Typography>Prev</Typography>
        </Box>
        <Box
          height="127px"
          width="127px"
          mx={3}
          position="relative"
          borderRadius="50%"
          overflow="hidden"
        >
          <Image
            src={"/person/girl.jpg"}
            alt="Quote Avatar"
            fill
            style={{objectFit:"cover"}}
          />
        </Box>
        <Box display="flex">
          <Typography>Next</Typography>
          <East />
        </Box>
      </Box>

      <Typography className="font-bold text-2xl text-center">Martha Martin</Typography>
      <Typography>Entrepreneur</Typography>
    </Box>
  );
}
