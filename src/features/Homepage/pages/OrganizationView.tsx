import { useState } from "react";
import { Add } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

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

export function OrganizationView() {
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
      <Button sx={{ width: 200, my: 5 }} variant="contained" endIcon={<Add />}>
        Tạo sự kiện
      </Button>

      {/* Recent events */}
      <RecentEvents />

      {/* Hot blog */}
      <HotBlogs />
      {/* Customer's impression */}
      <Box display="flex">
        <Slider {...carouselSetting}>
          {carouselLst.map((e) => (
            <CustomerTestimonialCard key={e} />
          ))}
        </Slider>
      </Box>

      {/* <Box display="flex">
        <CustomerTestimonialCard key={1} />
        <CustomerTestimonialCard key={2} />
        <CustomerTestimonialCard key={3} />
      </Box> */}
      {/* Our sponsor */}
    </>
  );
}
