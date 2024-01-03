import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface HistoryItemLeftProps {
  title: string;
  date: string;
  description: string;
  image: string;
}

export const HistoryItemLeft = ({
  title,
  date,
  description,
  image,
}: HistoryItemLeftProps) => {
  return (
    <Box className="flex w-full my-10">
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
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover"
          }} />
        <Box>
          <Box
            width="400px"
            height="400px"
            position="relative"
            zIndex={2}
            style={{
              clipPath:
                "polygon(57.99% 0.57%, 100% 45.02%, 63.4% 100%, 0% 72.05%, 0% 20.02%)",
            }}
          >
            <Image
              src={image}
              alt="history"
              fill
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "cover"
              }} />
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" marginLeft="170px">
        <Box display="flex" alignItems="center">
          <Typography className="text-[27.39px] uppercase font-bold py-4">
            {title}
          </Typography>
          <Typography className="text-[55px] font-semibold ml-16">
            {date}
          </Typography>
        </Box>
        <Typography className="text-zinc-500 text-[22px] ">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};
