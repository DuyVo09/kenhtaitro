"use client";
import { AppFooter } from "@components/AppFooter";
import {
  AboutUsSection,
  BigEventSection,
  FirstCategorySection,
  HotBlogSection,
  NewestEventSection,
  NumericSection,
  PartnerSection,
  QuoteSection,
  SecondCategorySection,
  SponsorSection,
  ThirdCategorySection,
} from "./_sections";
import { BannerSection } from "@/common/components/BannerSection";
import { Box, Typography } from "@mui/material";
import { AwesomeButton } from "react-awesome-button";

function Homepage() {
  return (
    <Box className="flex-col flex w-full items-center">
      <BannerSection />

      <NewestEventSection />

      <NumericSection />

      <SponsorSection />

      <BigEventSection />

      <FirstCategorySection />

      <SecondCategorySection />

      <ThirdCategorySection />

      <HotBlogSection />

      <AboutUsSection />

      <PartnerSection />
      <QuoteSection />
    </Box>
  );
}

export default Homepage;
