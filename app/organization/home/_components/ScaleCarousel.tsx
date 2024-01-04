"use client";

import { convertEventDataToCardProps } from "@/common/helpers/convertEventData";
import { mockEventList } from "../../../../common/mockData/mockEventList";
import { Box } from "@mui/material";
import Slider, { Settings } from "react-slick";
import { PrevSliderArrow, NextSliderArrow } from "./CardCarouselArrow";

import { ScaleCarouselItem } from "./ScaleCarouselItem";
import { useEffect, useState } from "react";
import { CardCarouselItem } from "./CardCarouselItem";
import { PublishedEvent } from "@/types";
import { searchByCategory } from "@/apis/events";

export function ScaleCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [event2Data, setEvent2Data] = useState<PublishedEvent[]>([]);
  const sliderSetting: Settings = {
    // className: "center",
    dots: true,
    variableWidth: true,
    // centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
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
  useEffect(() => {
    searchByCategory({
      category_id: 2,
      page: 1,
      limit: 10,
    }).then((res) => {
      if (res.status_code === 200) 
        setEvent2Data(res.data);
    });
  }, []);
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      position="relative"
      px={5}
      my={5}
      bgcolor="white"
    >
      <Slider {...sliderSetting}>
        {event2Data.map((data, index) => {
          const eventProps = convertEventDataToCardProps(data);
          return (
            <ScaleCarouselItem
              key={index}
              {...eventProps}
              carouselCenter={false}
            />
          );
        })}
      </Slider>
    </Box>
  );
}
