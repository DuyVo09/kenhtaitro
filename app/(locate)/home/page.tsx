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
    </Box>
  );
}

export default Homepage;
