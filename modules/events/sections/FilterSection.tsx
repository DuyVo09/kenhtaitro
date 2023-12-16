import { Search } from "@mui/icons-material";
import { Box, Button, Grid, Select, Typography } from "@mui/material";

function FilterSection() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      my={2}
      className="bg-[#BDE0FE]/50"
    >
      <Grid container spacing={5} p={4}>
        <Grid item xs={4}>
          <Typography className="font-bold text-2xl text-[#10107B] py-4">
            Lĩnh vực sự kiện
          </Typography>
          <Select
            fullWidth
            sx={{
              bgcolor: "white",
            }}
          />
        </Grid>

        <Grid item xs={4}>
          <Typography className="font-bold text-2xl text-[#10107B] py-4">
            Tên trường
          </Typography>
          <Select
            fullWidth
            sx={{
              bgcolor: "white",
            }}
          />
        </Grid>

        <Grid item xs={4}>
          <Typography className="font-bold text-2xl text-[#10107B] py-4">
            Địa điểm tổ chức
          </Typography>
          <Select
            fullWidth
            sx={{
              bgcolor: "white",
            }}
          />
        </Grid>

        <Grid item xs={4}>
          <Typography className="font-bold text-2xl text-[#10107B] py-4">
            Thời gian bắt đầu
          </Typography>
          <Select
            fullWidth
            sx={{
              bgcolor: "white",
            }}
          />
        </Grid>

        <Grid item xs={4}>
          <Typography className="font-bold text-2xl text-[#10107B] py-4">
            Quy mô
          </Typography>
          <Select
            fullWidth
            sx={{
              bgcolor: "white",
            }}
          />
        </Grid>

        <Grid item xs={4} display="flex" justifyContent="end" alignItems="end">
          <Button variant="contained" startIcon={<Search />}>
            <Typography>Tìm kiếm</Typography>
          </Button>
        </Grid>
      </Grid>

      <Box display="flex" alignItems="center" p={2}>
        <Box bgcolor='white'>
            <Box>
                
            </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FilterSection;
