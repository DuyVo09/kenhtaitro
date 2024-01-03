import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface HistoryItemRightProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

export const HistoryItemRight = ({
  title,
  date,
  description,
  image,
}: HistoryItemRightProps) => {
  return (
    <Box className="flex w-full my-10">
      <Box display="flex" flexDirection="column" marginRight="170px">
        <Box display="flex" alignItems="center">
          <Typography className="text-[55px] font-semibold mr-16">
            {date}
          </Typography>
          <Typography className="text-[27.39px] uppercase font-bold py-4">
            {title}
          </Typography>
        </Box>
        <Typography className="text-zinc-500 text-[22px] ">
          {description}
        </Typography>
      </Box>
      <Box
        minWidth="500px"
        height="450px"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src="/images/about-us/historyImage.png"
          alt="history"
          fill
          objectFit="cover"
        />
        <Box
          width="400px"
          height="400px"
          position="relative"
          zIndex={2}
          style={{
            clipPath:
              "polygon(37.66% 1.07%, 100% 18.69%, 100% 76.23%, 47.58% 99.97%, 1.28% 54.66%)",
          }}
        >
          <Image src={image} alt="history" fill objectFit="cover" />
        </Box>
      </Box>
    </Box>
  );
};
