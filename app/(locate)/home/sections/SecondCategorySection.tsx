import { Box, Grid, Typography } from "@mui/material";
import { ScaleCarousel } from "../components/ScaleCarousel";

export function SecondCategorySection() {
  return (
    <Box display="flex" flexDirection="column" width="100%" my={2}>
      <Grid container>
        <Grid item xs={6}></Grid>
        <Grid
          item
          xs={6}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography className="py-2.5 font-bold uppercase text-5xl text-primary">
            Sự kiện
          </Typography>
          <Typography className="py-2.5 font-bold uppercase text-5xl text-[#F4A261]">
            Lĩnh vực 2
          </Typography>
        </Grid>
      </Grid>
      <ScaleCarousel />
    </Box>
  );
}
