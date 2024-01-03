import BlogCard from "@/common/components/BlogCard/BlogCard";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/legacy/image";

export function HotBlogSection() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      my={2}
      bgcolor="white"
    >
      <Box display="flex" width="100%">
        <Box display="flex" flex={1}>
          <Typography className="text-6xl font-bold ml-4">
            <span className="text-primary">BLOG</span> NỔI BẬT
          </Typography>
        </Box>
        <Box display="flex" color="#7848F4">
          <Typography className="font-medium italic">Xem tất cả</Typography>
          <KeyboardDoubleArrowRight />
        </Box>
      </Box>
      <Typography sx={{ my: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </Typography>

      <Box display="flex" width="100%">
        <BlogCard
          img="/images/homepage/eventImg.png"
          title="Chương trình chào mừng ngày Nhà giáo Việt Nam"
          author="Tên tác giả"
          category="Category"
          uploadDate="20/12/2023"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        />

        <BlogCard
          img="/images/homepage/eventImg.png"
          title="Chương trình chào mừng ngày Nhà giáo Việt Nam"
          author="Tên tác giả"
          category="Category"
          uploadDate="20/12/2023"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        />

        <BlogCard
          img="/images/homepage/eventImg.png"
          title="Chương trình chào mừng ngày Nhà giáo Việt Nam"
          author="Tên tác giả"
          category="Category"
          uploadDate="20/12/2023"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        />
      </Box>
    </Box>
  );
}
