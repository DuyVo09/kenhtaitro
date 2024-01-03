"use client";
import {
  ArrowOutwardOutlined,
  LightbulbOutlined,
  PlayArrow,
  RocketLaunchOutlined,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { AwesomeButton } from "react-awesome-button";
import Image from "next/image";

export const BannerSection = () => {
  return (
    <Box className="flex flex-col h-[820px] w-full bg-[#006EDB] items-center">
      <Box display="flex" flex={1} width="1440px">
        <Box
          display="flex"
          flexDirection="column"
          flex={1}
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Typography className="text-white text-[45px] font-black capitalize">
              We help to organize events
            </Typography>

            <Typography className="text-white text-2xl font-thin my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500
            </Typography>

            <Box display="flex" width="100%" my="30px">
              <Box display="flex" flex={1}>
                <RocketLaunchOutlined className="fill-amber-400 w-[64px] h-[64px] stroke-[#006EDB] stroke-1" />
                <Box color="white" width="150px">
                  <Typography className="font-semibold text-xl">
                    Lorem Ipsum
                  </Typography>
                  <Typography className="text-[8.75px]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" flex={1}>
                <LightbulbOutlined className="fill-amber-400 w-[64px] h-[64px] stroke-[#006EDB] stroke-1" />
                <Box color="white" width="150px">
                  <Typography className="font-semibold text-xl">
                    Lorem Ipsum
                  </Typography>
                  <Typography className="text-[8.75px] ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" py={3}>
              <AwesomeButton className="h-14" type="secondary" size="large">
                <Typography className="font-bold uppercase">
                  Our history
                </Typography>
                <ArrowOutwardOutlined className="fill-amber-400" />
              </AwesomeButton>
            </Box>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" position="relative">
          <Box width="470px" height="522px" position="relative">
            <Image
              src={"/images/about-us/banner.png"}
              alt="Banner"
              fill
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
            <Box
              position="absolute"
              bottom={0}
              right="50%"
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              bgcolor="white"
              textAlign="center"
              width='80%'
              p={1}
              sx={{
                transform: "translateX(50%) translateY(50%)",
                borderRadius: "10px 10px 10px 10px",
              }}
            >
              <Typography className="text-primary text-lg">
                Lorem Ispum is dummy
              </Typography>
              <Typography className="text-[27.39px]">Hỗ trợ tư vấn</Typography>
              <Typography className="text-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
