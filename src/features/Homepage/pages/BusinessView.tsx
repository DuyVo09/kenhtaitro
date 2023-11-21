import { useState } from "react";
import { Add } from "@mui/icons-material";
import { Box, Button, Pagination, Typography } from "@mui/material";

import Slider from "react-slick";
import { RecentEvents, HotBlogs, CustomerTestimonialCard } from "../components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselLst = [1, 2, 3, 4, 5];

const carouselSetting = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 200,
  slidesToShow: 2,
  slidesToScroll: 1,
};

export function BusinessView() {
  return (
    <>
      {/* Banner */}
      <Box
        my={5}
        border={1}
        display="flex"
        height={150}
        justifyContent="center"
        alignItems="center"
      >
        Ảnh bìa
      </Box>

      {/* Create event */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 4 }}
      >
        <Typography>Sự kiện mới nhất</Typography>
        <Button>Xem tất cả</Button>
      </Box>

      {/* Recent events */}
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

      <Box
        display="flex"
        my={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Button variant="outlined" sx={{ py: 1, px: 5 }}>
          Tài trợ
        </Button>
        <Button variant="outlined" sx={{ py: 1, px: 5 }}>
          Quan tâm
        </Button>
      </Box>

      <Button
        variant="outlined"
        sx={{ py: 1, px: 5, my: 2, width: "max-content" }}
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
    </>
  );
}
