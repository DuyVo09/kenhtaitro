import { BannerSection } from "@/common/components/BannerSection";
import EventListSection from "@/modules/events/sections/EventListSection";
import FilterSection from "@/modules/events/sections/FilterSection";
import { Box } from "@mui/material";

function EventsPage() {
  return <Box className="flex-col flex wull items-center">
    <BannerSection />

    <FilterSection />
    <EventListSection />
  </Box>;
}

export default EventsPage;
