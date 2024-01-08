import { Box, Button, Grid, Pagination, Typography } from "@mui/material";
import Image from "next/image";

export function FirstCategorySection() {
  return (
    <Box display="flex" flexDirection="column" width="100%" my={2}>
      <Grid container>
        <Grid item xs={6}></Grid>
        <Grid
          item
          xs={6}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography className="py-2.5 font-bold uppercase text-5xl text-primary">
            Sự kiện
          </Typography>
          <Typography className="py-2.5 font-bold uppercase text-5xl text-[#F4A261]">
            Lĩnh vực 1
          </Typography>
        </Grid>
      </Grid>
      <Box
        height="850px"
        display="flex"
        flex={1}
        position="relative"
        // py={"100px"}
      >
        <Image
          fill
          alt="Category 2 bg"
          src="/images/homepage/category1Bg.png"
          style={{
            objectFit: "cover",
            maxWidth: "100%",
          }} />
        <Box display="flex" position="relative" py="100px">
          <Pagination
            hidePrevButton
            count={3}
            variant="outlined"
            shape="rounded"
            sx={{
              position: "absolute",
              top: 15,
              right: 0,
              "& button": {
                color: "white",
                borderColor: "white",
              },
              "& .MuiPaginationItem-root": {
                "&.Mui-selected": {
                  background: "white",
                  color: "blue",
                  // borderRadius: '50%',
                },
              },
            }}
            className=""
          />

          <Box display="flex" flex={1}>
            <Box display="flex" flex={1} width="100%" height="100%">
              <Box width="100%" position="relative">
                <Image
                  alt="Top event"
                  fill
                  src="/images/homepage/topEvent.png"
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                    maxWidth: "100%",
                  }} />
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            flex={1}
            alignItems="center"
            justifyContent="center"
            zIndex={1}
          >
            <Box width="100%" px={15}>
              <Typography className="text-white text-4xl font-bold">
                20th International Business Conference
              </Typography>

              <Typography className="text-white py-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>

              <Box display="flex" alignItems="center">
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  height="100px"
                  width="100px"
                  p={2}
                  border={1}
                  borderColor="white"
                >
                  <Typography color="white">30</Typography>
                  <Typography color="white">Days</Typography>
                </Box>

                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  height="100px"
                  width="100px"
                  p={2}
                  mx={2}
                  border={1}
                  borderColor="white"
                >
                  <Typography color="white">3</Typography>
                  <Typography color="white">Hours</Typography>
                </Box>

                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  height="100px"
                  width="100px"
                  p={2}
                  border={1}
                  borderColor="white"
                >
                  <Typography color="white">3</Typography>
                  <Typography color="white">Mins</Typography>
                </Box>
              </Box>

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
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
