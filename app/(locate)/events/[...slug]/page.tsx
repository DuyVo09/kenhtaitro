import { DetailSection, OverviewSection, RelatedSection } from "@/modules/events-manage/pages/event-detail/sections";
import { Box } from "@mui/material";

function EventDetailPage() {
  return (
    <Box className="flex-col flex w-full">
      <OverviewSection />
      <DetailSection />
      <RelatedSection />
    </Box>
  );
}

export default EventDetailPage;
