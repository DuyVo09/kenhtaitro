import { Box, Typography, Grid, Button, Pagination } from "@mui/material";

export function RecentEvents() {
  return (
    <Box>
      <Typography variant="h6">SỰ KIỆN ĐƯỢC TẠO GẦN ĐÂY</Typography>

      <Grid container spacing={3}>
        <Grid xs={8} item>
          <Box
            display="flex"
            p={1}
            
            border={1}
            height={300}
            alignItems="center"
            justifyContent="center"
          >
            Ảnh sự kiện thời gian diễn ra
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={3}
            my={4}
            border={1}
          >
            Tên sự kiện
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={150}
            p={1}
            my={1}
            border={1}
          >
            Mô tả tóm tắt sự kiện
          </Box>

          <Box
            display="flex"
            my={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box py={1} px={5} border={1}>
              Ban tổ chức
            </Box>
            <Box py={1} px={5} border={1}>
              Địa điểm
            </Box>
          </Box>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
          xs={4}
          item
        >
          <Box display="flex" flexDirection="column" flex={1}>
            <Box
              justifyContent="center"
              alignItems="center"
              position="relative"
              display="flex"
              flex={1}
              p={1}
              border={1}
            >
              Ảnh sự kiện
              <Button
                variant="contained"
                sx={{
                  position: "absolute",
                  bottom: 5,
                  right: 5,
                  textTransform: "none",
                }}
              >
                Xem thêm
              </Button>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={2}
              my={4}
              border={1}
            >
              Tên sự kiện
            </Box>
            <Box
              display="flex"
              my={1}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box p={1} border={1}>
                Ban tổ chức
              </Box>
              <Box p={1} border={1}>
                Địa điểm
              </Box>
            </Box>
          </Box>

          <Box p={1} display="flex" flexDirection="column" flex={1}>
            <Box
              justifyContent="center"
              alignItems="center"
              position="relative"
              display="flex"
              flex={1}
              p={1}
              border={1}
            >
              Ảnh sự kiện
              <Button
                variant="contained"
                sx={{
                  position: "absolute",
                  bottom: 5,
                  right: 5,
                  textTransform: "none",
                }}
              >
                Xem thêm
              </Button>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              p={2}
              my={4}
              border={1}
            >
              Tên sự kiện
            </Box>
            <Box
              display="flex"
              my={1}
              justifyContent="space-between"
              alignItems="center"
            >
              <Box p={1} border={1}>
                Ban tổ chức
              </Box>
              <Box p={1} border={1}>
                Địa điểm
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

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
  );
}
