import { Box, Grid } from "@mui/material";

export function ThirdCategorySection() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      my={2}
      p={20}
      className="bg-primary/70"
    >
        <Grid container>
            <Grid item xs={8}></Grid>
            <Grid item xs={4}></Grid>
        </Grid>
    </Box>
  );
}
