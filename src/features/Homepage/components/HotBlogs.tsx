import { Box, Typography, Button, Pagination } from "@mui/material";

export function HotBlogs() {
    return (
      <Box>
        <Typography variant="h6">BLOG NỔI BẬT</Typography>
        <Box>
          <Box
            my={5}
            border={1}
            display="flex"
            height={250}
            justifyContent="center"
            alignItems="center"
          >
            Ảnh
          </Box>
  
          <Typography>Tiêu đề blog</Typography>
  
          <Box display="flex">
            <Typography px={2}>Tên tác giả</Typography>
            <Typography px={2}>Category bài viết</Typography>
            <Typography px={2}>Thời điểm úp bài</Typography>
          </Box>
  
          <Box display="flex" justifyContent="center" alignItems="center" height={100} border={1} my={3}>
            Tóm tắt
          </Box>
          <Button
            variant="contained"
            sx={{
              width: 100,
              textTransform: "none",
            }}
          >
            Xem thêm
          </Button>
  
          <Box display="flex" justifyContent="center" alignItems="center" my={5}>
            <Pagination
              hideNextButton
              hidePrevButton
              count={3}
              variant="outlined"
              shape="rounded"
            />
          </Box>
        </Box>
      </Box>
    );
  }