import { Box, Typography } from "@mui/material";
import AboutUsCard from "../components/AboutUsCard";

export function AboutUsSection() {
  return (
    <Box display="flex" flexDirection="column" width="100%" my={2}>
      <Typography className="text-6xl font-bold uppercase py-4">
        Tại sao nên chọn chúng tôi
      </Typography>
      <Box display='flex' width='100%' justifyContent='center'>
        <AboutUsCard
          title="Access To Events"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          color="#0986CA"
        />
        <AboutUsCard
          title="Make a Difference"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          color="#EC4C36"
        />
        <AboutUsCard
          title="Information Exchange"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          color="#01D38E"
        />
        <AboutUsCard
          title="Skilled Speaker"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          color="#FFBD0B"
        />
      </Box>
    </Box>
  );
}
