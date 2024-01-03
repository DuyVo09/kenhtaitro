import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/legacy/image";

export function ThirdCategorySection() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      my={2}
      p={20}
      className="bg-primary/70"
    >
      <Grid container>
        <Grid item xs={8} display="flex" alignItems="center" height="600px">
          <Box
            display="flex"
            flex={1}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="350px"
            // width="350px"
            bgcolor="#FFEB75"
          >
            <Typography className="py-2.5 font-bold uppercase text-5xl text-primary">
              Sự kiện
            </Typography>
            <Typography className="py-2.5 font-bold uppercase text-5xl text-[#F4A261]">
              Lĩnh vực 3
            </Typography>
          </Box>

          <Box display="flex" flex={1} height="100%">
            <Box position="relative" width="100%" height="100%">
              <Image
                fill
                alt="Category 2 bg"
                src="/images/homepage/newEvent.png"
                style={{
                  objectFit: "cover",
                  borderRadius: "12px 85px 12px 12px",
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box width="100%" px={5}>
            <Typography className="text-white text-4xl font-bold">
              20th International Business Conference
            </Typography>

            <Typography className="text-white py-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>

            <Box display="flex" alignItems="center" py={3}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "white",
                  boxShadow: 5,
                  textTransform: "none",
                  py: 2,
                  px: 6,
                  borderRadius: "12px",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#ededed",
                    color: "#3c52b2",
                  },
                }}
              >
                <Typography className="font-bold text-primary">
                  Xem chi tiết
                </Typography>
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
