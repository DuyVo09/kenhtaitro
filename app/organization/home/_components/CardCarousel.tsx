"use client";

import { convertEventDataToCardProps } from "@/common/helpers/convertEventData";
import { mockEventList } from "../../../../common/mockData/mockEventList";
import { Box } from "@mui/material";
import Slider, { Settings } from "react-slick";
import { PrevSliderArrow, NextSliderArrow } from "./CardCarouselArrow";
import { useState } from "react";
import { CardCarouselItem } from "./CardCarouselItem";

export function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const sliderSetting: Settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 800,
    prevArrow: <PrevSliderArrow />,
    nextArrow: <NextSliderArrow />,
    beforeChange: (current, next) => {
      setCurrentIndex(next);
    },
    afterChange: (current) => {
      setCurrentIndex(current);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      position="relative"
      px={5}
      my={5}
      bgcolor="white"
      sx={{
        "& .slick-list": {
          // padding: "100px 0",
          // margin: "-100px 0",
          // height: 500,
          display: "flex",
          flexDirection: "column",
        },
        "& .slick-track": {
          // height: 500,
          display: "flex",
          alignItems: "center",
          // flexDirection: 'column'
        },
        "& .slick-slide": {
          // width: 'min-content',
          // height: 500,
        },
        "& .slick-slide > div": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // width: 'max-content',
          // margin: "0 5px",
          // height: '100%'
        },
        "& .eventcard-content": {
          display: "none",
        },
        "& .slick-center": {
          ".eventcard-content": { display: "" },
        },
      }}
    >
      <Slider {...sliderSetting}>
        {mockEventList.map((data, index) => {
          const eventProps = convertEventDataToCardProps(data);
          return (
            <CardCarouselItem
              key={index}
              {...eventProps}
              carouselCenter={currentIndex === index}
            />
          );
        })}
      </Slider>
    </Box>
  );
}
