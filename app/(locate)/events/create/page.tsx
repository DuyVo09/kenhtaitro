import { Box } from "@mui/material";
import { BannerSection } from "@/common/components/BannerSection";
import { EventCreateSection } from "./_sections";

function EventCreatePage() {
  return (
    <Box display="flex" flexDirection="column" width="100%" alignItems="center">
      <BannerSection />

      <div className="w-full max-w-[1440px]">
        <EventCreateSection />
      </div>
    </Box>
  );
}

export default EventCreatePage;
