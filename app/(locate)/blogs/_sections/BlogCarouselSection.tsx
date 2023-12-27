import { Box } from "@mui/material";
import { BlogCarousel } from "../_components/BlogCarousel";

export function BlogCarouselSection() {
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <BlogCarousel />
    </Box>
  );
}
