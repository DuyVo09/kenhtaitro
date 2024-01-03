import { RocketLaunchOutlined, TipsAndUpdatesOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const VisionSection = () => {
  return (
    <div className="w-full bg-sky-100 py-9 flex justify-center">
      <Box width="1400px" bgcolor="white" p={10}>
        <Typography className="font-bold uppercase text-4xl">
          <span className="text-primary text-[55px]">Tầm nhìn</span> sponsorship
        </Typography>

        <div className="grid grid-cols-3">
          <Box display="flex" flexDirection="column" py={6}>
            <Box
              color="#2BB79D"
              position="relative"
              px={2}
              sx={{
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: "0",
                  left: "0px",
                  width: "10px",
                  height: "80%",
                  backgroundColor: "#2BB79D",
                  transform: "translateX(-50%)",
                },
              }}
            >
              <RocketLaunchOutlined className="w-[47px] h-[47px] stroke-white" />
              <Typography className="text-6xl font-medium uppercase">
                5.000+
              </Typography>
              <Typography className="text-3xl font-medium uppercase">
                Sự kiện hằng năm
              </Typography>
            </Box>

            <Box px={2} py={1} marginTop={5} borderLeft={1}>
              <Typography className="text-neutral-400 text-[22px] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </Box>
          </Box>

          <Box display="flex" flexDirection="column" py={6}>
            <Box
              color="#FEC536"
              position="relative"
              px={2}
              sx={{
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: "0",
                  left: "0px",
                  width: "10px",
                  height: "80%",
                  backgroundColor: "#FEC536",
                  transform: "translateX(-50%)",
                },
              }}
            >
              <TipsAndUpdatesOutlined className="w-[47px] h-[47px] stroke-white" />
              <Typography className="text-6xl font-medium uppercase">
                1.000+
              </Typography>
              <Typography className="text-3xl font-medium uppercase">
                Nhà tài trợ
              </Typography>
            </Box>

            <Box px={2} py={1} marginTop={5} borderLeft={1}>
              <Typography className="text-neutral-400 text-[22px] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </Box>
          </Box>

          <Box display="flex" flexDirection="column" py={6}>
            <Box
              color="#006EDB"
              position="relative"
              px={2}
              sx={{
                "&::before": {
                  content: '""',
                  position: "absolute",
                  bottom: "0",
                  left: "0px",
                  width: "10px",
                  height: "80%",
                  backgroundColor: "#006EDB",
                  transform: "translateX(-50%)",
                },
              }}
            >
              <RocketLaunchOutlined className="w-[47px] h-[47px] stroke-white" />
              <Typography className="text-6xl font-medium uppercase">
                500+
              </Typography>
              <Typography className="text-3xl font-medium uppercase">
                Sự kiện quy mô
              </Typography>
            </Box>

            <Box px={2} py={1} marginTop={5} borderLeft={1}>
              <Typography className="text-neutral-400 text-[22px] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </Box>
          </Box>
        </div>
      </Box>
    </div>
  );
};
