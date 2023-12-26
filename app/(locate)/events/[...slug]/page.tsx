import { DetailSection, OverviewSection, RelatedSection } from "@/modules/event-detail";
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
