import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { BlogCarousel } from "../_components/BlogCarousel";
import { SocialIcon } from "react-social-icons";

export function BlogCarouselSection() {
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <BlogCarousel />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box display="flex" alignItems="center">
          <Box height="80px" width="80px" position="relative">
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              style={{
                objectFit: "contain",
                maxWidth: "100%",
              }} />
          </Box>
          <Box>
            <Typography className="font-medium text-primary text-xl ">
              Sponsorship
            </Typography>
            <Typography className="font-light text-xs  text-zinc-500">
              Communication Solutions Company Limited{" "}
            </Typography>
          </Box>
        </Box>

        <Typography className="text-zinc-500 w-[668px] text-center my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
          tristique velit, auctor cursus ipsum. Phasellus neque lacus, bibendum
          sit amet lobortis ut, sollicitudin vel sem. Morbi eget neque ac magna
          auctor luctus vel vitae metus. Morbi efficitur condimentum turpis, vel
          iaculis turpis suscipit in. Donec imperdiet urna ut faucibus bibendum.
        </Typography>

        <Box display="flex" marginBottom="48px">
          <SocialIcon
            url="facebook.com"
            bgColor="transparent"
            fgColor="currentColor"
            className="text-zinc-500 hover:text-primary"
          />
          <SocialIcon
            url="instagram.com"
            bgColor="transparent"
            fgColor="currentColor"
            className="text-zinc-500 hover:text-primary"
          />
          <SocialIcon
            url="tiktok.com"
            bgColor="transparent"
            fgColor="currentColor"
            className="text-zinc-500 hover:text-primary"
          />
          <SocialIcon
            url="youtube.com"
            bgColor="transparent"
            fgColor="currentColor"
            className="text-zinc-500 hover:text-primary"
          />
        </Box>
      </Box>
    </Box>
  );
}
