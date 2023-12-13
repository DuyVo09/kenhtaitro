import { Search } from "@mui/icons-material";
import { Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";

export function FilterSection() {
  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      py="50px"
      className="bg-[#BDE0FE]/50"
    >
      <Grid container spacing={4} p={10}>
        <Grid item xs={4}>
          <Typography className="font-bold text-2xl text-[#10107B] py-6">
            Lĩnh vực sự kiện
          </Typography>
          <Select
            fullWidth
            displayEmpty
            defaultValue=""
            sx={{
              bgcolor: "white",
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
            }}
          >
            <MenuItem disabled value="" sx={{ display: "none" }}>
              <Typography className="text-primary italic">
                Choose an events
              </Typography>
            </MenuItem>
          </Select>
        </Grid>

        <Grid item xs={4}>
          <Typography className="font-bold text-2xl text-[#10107B] py-6">
            Tên trường
          </Typography>
          <Select
            fullWidth
            displayEmpty
            defaultValue=""
            sx={{
              bgcolor: "white",
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
            }}
          >
            <MenuItem disabled value="" sx={{ display: "none" }}>
              <Typography className="text-primary italic">
                Choose university
              </Typography>
            </MenuItem>
          </Select>
        </Grid>

        <Grid item xs={4}>
          <Typography className="font-bold text-2xl text-[#10107B] py-6">
            Địa điểm tổ chức
          </Typography>
          <Select
            fullWidth
            displayEmpty
            defaultValue=""
            sx={{
              bgcolor: "white",
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
            }}
          >
            <MenuItem disabled value="" sx={{ display: "none" }}>
              <Typography className="text-primary italic">
                Choose location
              </Typography>
            </MenuItem>
          </Select>
        </Grid>

        <Grid item xs={4}>
          <Typography className="font-bold text-2xl text-[#10107B] py-6">
            Thời gian bắt đầu
          </Typography>
          <Select
            fullWidth
            displayEmpty
            defaultValue=""
            sx={{
              bgcolor: "white",
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
            }}
          >
            <MenuItem disabled value="" sx={{ display: "none" }}>
              <Typography className="text-primary italic">
                Choose date and time
              </Typography>
            </MenuItem>
          </Select>
        </Grid>

        <Grid item xs={4}>
          <Typography className="font-bold text-2xl text-[#10107B] py-6">
            Quy mô
          </Typography>
          <Select
            fullWidth
            displayEmpty
            defaultValue=""
            sx={{
              bgcolor: "white",
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
            }}
          >
            <MenuItem disabled value="" sx={{ display: "none" }}>
              <Typography className="text-primary italic">
                Choose number of participants
              </Typography>
            </MenuItem>
          </Select>
        </Grid>

        <Grid item xs={4} display="flex" justifyContent="end" alignItems="end">
          <Button
            variant="contained"
            startIcon={<Search />}
            sx={{
              boxShadow: 5,
              textTransform: "none",
              py: 2,
              px: 6,
              borderRadius: "12px",
            }}
          >
            <Typography>Tìm kiếm</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
