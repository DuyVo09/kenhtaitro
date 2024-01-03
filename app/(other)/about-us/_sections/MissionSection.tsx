import { RocketLaunchOutlined, TipsAndUpdatesOutlined } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";

export const MissionSection = () => {
  return (
    <div className="w-full py-9 flex justify-center">
      <div className="max-w-[1440px]">
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          alignItems="center"
        >
          <Typography className="font-bold uppercase text-center text-4xl">
            <span className="text-primary text-[55px]">Sứ mệnh</span>{" "}
            sponsorship
          </Typography>
          <Typography className="text-center text-[22px] mt-5 text-neutral-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an
          </Typography>

          <div className="grid grid-cols-3 mt-10">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              boxShadow={1}
              position="relative"
              px={5}
              mx={10}
              sx={{
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  width: "80%",
                  height: "10px",
                  backgroundColor: "#C4C4C4",
                  transform: "translateX(-50%)",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  width: "80%",
                  height: "10px",
                  backgroundColor: "#C4C4C4",
                  transform: "translateX(-50%)",
                },
              }}
            >
              <RocketLaunchOutlined
                color="primary"
                className="w-[52px] h-[52px] stroke-white m-10"
              />
              <Typography className="text-blue-700 text-[22px] font-bold ">
                Lorem Ipsim is simply
              </Typography>
              <Typography className="font-light my-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </Typography>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              boxShadow={1}
              position="relative"
              px={5}
              mx={10}
              sx={{
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  width: "80%",
                  height: "10px",
                  backgroundColor: "#C4C4C4",
                  transform: "translateX(-50%)",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  width: "80%",
                  height: "10px",
                  backgroundColor: "#C4C4C4",
                  transform: "translateX(-50%)",
                },
              }}
            >
              <TipsAndUpdatesOutlined
                color="primary"
                className="w-[52px] h-[52px] stroke-white m-10"
              />
              <Typography className="text-blue-700 text-[22px] font-bold ">
                Lorem Ipsim is simply
              </Typography>
              <Typography className="font-light my-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </Typography>
            </Box>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              boxShadow={1}
              position="relative"
              px={5}
              mx={10}
              sx={{
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  width: "80%",
                  height: "10px",
                  backgroundColor: "#C4C4C4",
                  transform: "translateX(-50%)",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  width: "80%",
                  height: "10px",
                  backgroundColor: "#C4C4C4",
                  transform: "translateX(-50%)",
                },
              }}
            >
              <TipsAndUpdatesOutlined
                color="primary"
                className="w-[52px] h-[52px] stroke-white m-10"
              />
              <Typography className="text-blue-700 text-[22px] font-bold ">
                Lorem Ipsim is simply
              </Typography>
              <Typography className="font-light my-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </Typography>
            </Box>
          </div>
        </Box>
      </div>
    </div>
  );
};
