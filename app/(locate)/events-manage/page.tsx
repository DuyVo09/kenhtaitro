import { OverviewSection, TableSection } from "@/modules/events-manage";
import { Box } from "@mui/material";

function EventsManagePage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      alignItems="center"
    >
        <OverviewSection />
        <TableSection />
    </Box>
  );
}

export default EventsManagePage;
