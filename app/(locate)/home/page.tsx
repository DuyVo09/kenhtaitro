import { AppFooter } from "@components/AppFooter";
import {
  AboutUsSection,
  BannerSection,
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
} from "@/modules/home/sections";
import { Box } from "@mui/material";

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
      <AppFooter />
    </Box>
  );
}

export default Homepage;
