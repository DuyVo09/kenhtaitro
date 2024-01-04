import { Star } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export function NumericSection() {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="center"
      className="bg-black/80"
      p={3}
    >
      <div className="w-full max-w-[1440px] flex items-center justify-around">
        <Box
          display="flex"
          flexDirection="column"
          color="white"
          alignItems="center"
        >
          <Typography className="font-bold text-6xl">5.000+</Typography>
          <Typography className="font-semibold text-xl">
            Sự Kiện Hằng Năm
          </Typography>
        </Box>

        <Star
          sx={{ stroke: "#D7C7FF", strokeWidth: 2 }}
          className="color-primary"
        />

        <Box
          display="flex"
          flexDirection="column"
          color="white"
          alignItems="center"
        >
          <Typography className="font-bold text-6xl">1.000+</Typography>
          <Typography className="font-semibold text-xl">Nhà Tài Trợ</Typography>
        </Box>

        <Star
          sx={{ stroke: "#D7C7FF", strokeWidth: 2 }}
          className="color-primary"
        />

        <Box
          display="flex"
          flexDirection="column"
          color="white"
          alignItems="center"
        >
          <Typography className="font-bold text-6xl">500+</Typography>
          <Typography className="font-semibold text-xl">
            Sự Kiện Quy Mô Lớn
          </Typography>
        </Box>

        <Star
          sx={{ stroke: "#D7C7FF", strokeWidth: 2 }}
          className="color-primary"
        />

        <Box
          display="flex"
          flexDirection="column"
          color="white"
          alignItems="center"
        >
          <Typography className="font-bold text-6xl">100</Typography>
          <Typography className="font-semibold text-xl">
            Sự Kiện Mỗi Ngày
          </Typography>
        </Box>
      </div>
    </Box>
  );
}
