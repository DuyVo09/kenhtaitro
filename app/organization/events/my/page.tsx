import { OverviewSection, TableSection } from "./_sections";
import { Box } from "@mui/material";

function MyEventsPage() {
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

export default MyEventsPage;
