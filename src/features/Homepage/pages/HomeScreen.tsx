import { useState } from "react";
import { Add } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

import Slider from "react-slick";
import { RecentEvents, HotBlogs, CustomerTestimonialCard } from "../components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OrganizationView } from "./OrganizationView";
import { BusinessView } from "./BusinessView";

const carouselLst = [1, 2, 3, 4, 5];

const carouselSetting = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 200,
  slidesToShow: 2,
  slidesToScroll: 1,
};

var user = 2;
export function HomeScreen() {
  function getView() {
    switch (user) {
      case 1:
        return <OrganizationView />
      case 2:
        return <BusinessView />
    }
  }

  return (
    <Box px={20} display="flex" flexDirection="column">
      {/* Banner */}
      {getView()}
    </Box>
  );
}
