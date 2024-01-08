import { Box, Typography } from "@mui/material";
import AboutUsCard from "../_components/AboutUsCard";
import Image from "next/image";

export function AboutUsSection() {
  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      width="100%"
      height="793px"
      my={2}
    >
      <Image
        src="/images/homepage/aboutUs.png"
        alt="about-us-bg"
        fill
        style={{
          maxWidth: "100%",
          objectFit: "cover",
        }}
      />
      <div className="flex flex-col max-w-[1440px] z-10 ">
        <Typography className="text-white text-6xl font-bold uppercase pt-20">
          Tại sao nên chọn chúng tôi?
        </Typography>
        <Box
          display="flex"
          height="100%"
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
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
      </div>
    </Box>
  );
}
