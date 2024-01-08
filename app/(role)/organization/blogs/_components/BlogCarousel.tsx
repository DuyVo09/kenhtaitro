"use client";
import { Box } from "@mui/material";
import Slider, { Settings } from "react-slick";
import { BlogCarouselItem } from "./BlogCarouselItem";
import { useState } from "react";

export function BlogCarousel() {
  const [imageIndex, setImageIndex] = useState(1);

  const setting: Settings = {
    dots: false,
    infinite: true,
    lazyLoad: 'progressive',
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <Box display="flex" flexDirection="column">
      <Slider {...setting}>
        {items.map((item, idx) => (
          <BlogCarouselItem
            href="#"
            img={`/images/homepage/event${item}.jpg`}
            key={item}
            centerImg={idx === imageIndex}
          />
        ))}
      </Slider>
    </Box>
  );
}

const items = [1, 2, 3, 4, 5];
