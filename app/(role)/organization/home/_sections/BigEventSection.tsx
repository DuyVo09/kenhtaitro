// "use client";

import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { CardCarousel } from "../_components";

export function BigEventSection() {
  return (
    <Box display="flex" justifyContent="center" width="100%" bgcolor="white">
      <div className="max-w-[1440px]">
        <Typography className="font-bold text-5xl text-primary">
          Sự kiện quy mô lớn
        </Typography>

        <CardCarousel />
      </div>
    </Box>
  );
}
