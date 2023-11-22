import { useEffect, useState } from "react";
import { Add } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

import Slider from "react-slick";
import { RecentEvents, HotBlogs, CustomerTestimonialCard } from "../components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OrganizationView } from "./OrganizationView";
import { BusinessView } from "./BusinessView";
import { useSelector } from "react-redux";
import { selectUser } from "features/Authentication/saga/authSlice";

export function HomeScreen() {
  // const user = useSelector(selectUser);
  const user = 2;

  const  getView = (type: number) => {
    switch (type) {
      case 1:
        return <OrganizationView />;
      case 2:
        return <BusinessView />;
      default:
        return null;
    }
  }

  useEffect(() => {}, [user])

  console.log(user)

  return (
    <Box px={20} display="flex" flexDirection="column">
      {/* Banner */}
      {getView(user)}
    </Box>
  );
}
