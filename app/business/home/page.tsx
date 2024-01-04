"use client";
import { AppFooter } from "@components/AppFooter";
import {
  AboutUsSection,
  BigEventSection,
  FirstCategorySection,
  HotBlogSection,
  NewestEventSection,
  NumericSection,
  SecondCategorySection,
  SponsorSection,
  ThirdCategorySection,
} from "./_sections";
import { BannerSection } from "@/common/sections/BannerSection";
import { Box, Typography } from "@mui/material";
import { PartnerSection } from "@/common/sections/PartnerSection";
import { QuoteSection } from "@/common/sections/QuoteSection";

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
