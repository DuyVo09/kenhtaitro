import { BannerSection } from "@/common/sections/BannerSection";
import { Box } from "@mui/material";
import { FilterSection, EventListSection } from "./_sections";

function EventsPage() {
  return (
    <Box className="flex-col flex w-full items-center">
      <BannerSection />

      <FilterSection />

      <EventListSection />
    </Box>
  );
}

export default EventsPage;
