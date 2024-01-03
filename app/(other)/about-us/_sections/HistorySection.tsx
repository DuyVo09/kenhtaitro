import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { HistoryItemRight } from "../_components";
import { HistoryItemLeft } from "../_components/HistoryItemLeft";

export const HistorySection = () => {
  return (
    <div className="w-full bg-sky-100 py-9 flex justify-center">
      <div className="max-w-[1440px]">
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          alignItems="center"
        >
          <Typography className="font-bold uppercase text-center text-4xl">
            <span className="text-primary text-[55px]">Lịch sử hình thành</span>{" "}
            sponsorship
          </Typography>
          <Box width="283px" height="40px" position="relative" my="30px">
            <Image
              src="/images/about-us/historyTitleLine.png"
              alt="line"
              fill
              style={{
                maxWidth: "100%",
                objectFit: "contain"
              }} />
          </Box>

          <HistoryItemRight
            date="2021"
            title="Lorem Ipsum is simply dummy text"
            description="Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi"
            image="/images/about-us/image1.jpg"
          />

          <HistoryItemLeft
            date="2022"
            title="Lorem Ipsum is simply dummy text"
            description="Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi"
            image="/images/about-us/image2.jpg"
          />

          <HistoryItemRight
            date="2023"
            title="Lorem Ipsum is simply dummy text"
            description="Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam,
            quis nostrum exercitationem ullam corporis suscipit laboriosam,
            nisi"
            image="/images/about-us/image3.jpg"
          />
        </Box>
      </div>
    </div>
  );
};
