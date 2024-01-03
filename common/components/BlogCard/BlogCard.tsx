import { Paper, Box, Typography } from "@mui/material";
import Image from "next/image";
import { TBlogCardProps } from "./types";
import { CalendarMonthOutlined, ModeEditOutlineOutlined, StickyNote2Outlined } from "@mui/icons-material";

function BlogCard({
  img,
  title,
  description,
  author,
  category,
  uploadDate,
  ...boxProps
}: TBlogCardProps) {
  return (
    <Paper sx={{width: '380px', m: 3, ...boxProps}}>
      <Box
        display="flex"
        flex={1}
        height="300px"
        width="380px"
        position="relative"
      >
        <Image
          src={img}
          alt="Event image"
          fill
          style={{
            objectFit: "cover",
            maxWidth: "100%",
            height: "auto"
          }} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={2}
      >
        <Typography className="text-center font-bold text-primary py-5">{title}</Typography>
        <Box display='flex'>
            <Box display='flex'>
                <ModeEditOutlineOutlined />
                <Typography>{author}</Typography>
            </Box>

            <Box display='flex' px={1}>
                <StickyNote2Outlined />
                <Typography>{category}</Typography>
            </Box>

            <Box display='flex'>
                <CalendarMonthOutlined />
                <Typography>{uploadDate}</Typography>
            </Box>
        </Box>

        <Typography className="font-light py-2">
            {description}
        </Typography>
      </Box>
    </Paper>
  );
}

export default BlogCard;
