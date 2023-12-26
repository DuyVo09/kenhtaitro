import {
  BlogCarouselSection,
  BlogListSection,
  SidebarSection,
} from "./sections";
import { Box, Grid } from "@mui/material";

function BlogsPage() {
  return (
    <Box className="flex-col flex w-full items-center">
      <BlogCarouselSection />

      <Grid container>
        <Grid item>
          <BlogListSection />
        </Grid>
        <Grid item>
          <SidebarSection />
        </Grid>
      </Grid>
    </Box>
  );
}

export default BlogsPage;
