import { Box, Typography, Button } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import Image from "next/image";

const BannerSection = () => {
  return (
    <Box
      className="flex flex-col h-[600px] w-full bg-cover items-center"
      style={{ backgroundImage: "url('/images/homeBanner.png')" }}
    >
      <Box display="flex" flex={1} width='1440px'>
        <Box
          display="flex"
          flexDirection="column"
          flex={1}
          alignItems="center"
          justifyContent="center"
        >
          <Box width="min-content">
            <Typography color="#D7C7FF" className="font-semibold">
              Organization - Upto 500 attendees
            </Typography>

            <Typography className="text-primary text-6xl font-bold">
              International Business Conference 2023
            </Typography>

            <Box display="flex" alignItems="center" py={3}>
              <Button
                variant="contained"
                sx={{
                  boxShadow: 5,
                  textTransform: "none",
                  py: 2,
                  px: 6,
                  borderRadius: "12px",
                }}
              >
                <Typography className="font-bold">Tài trợ</Typography>
              </Button>
              <Box display="flex" alignItems="center">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bgcolor="#8B64EF"
                  borderRadius="50%"
                  m={1}
                  position="relative"
                  className="shadow-lg"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bgcolor="#67C4F6"
                    borderRadius="50%"
                    p={1}
                    sx={{
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <PlayArrow style={{ color: "white" }} />
                  </Box>
                </Box>
                <Typography className="font-bold text-white">
                  Xem chi tiết
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box display="flex" flex={1} position="relative">
          <Box
            display="flex"
            flex={1}
            width="100%"
            height="100%"
            top="50px"
            position="absolute"
            sx={{
              clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 50px), 0 100%)",
            }}
          >
            <Box width="100%" position="relative">
              <Image
                alt="Top event"
                fill
                src="/images/homepage/topEvent.png"
                style={{
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { BannerSection };
