import { EventDetail } from "@/types";
import { PlaceOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

export function OverviewSection({data} : {data: EventDetail}) {
  return (
    <Box display="flex" px="7%" py="50px">
      <Box display="flex" flexDirection="column" flex={1}>
        <Box
          p={2}
          width="260px"
          borderRadius={2}
          className="bg-primary"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          my={2}
          boxShadow={2}
        >
          <Typography className="text-3xl text-white font-bold">
            Upto {data.total_reach}
          </Typography>
          <Typography className="text-3xl font-bold text-white">
            Participants
          </Typography>
        </Box>

        <Typography className="text-6xl font-bold my-10">
          {data.event_name}
        </Typography>

        <Typography className="text-4xl font-bold my-3">
          Event Category
        </Typography>
        {data.categories.map((category, idx) => (
          <div key={idx}>
            <Typography sx={{ my: 1 }}>{category}</Typography>
          </div>  
          ))}

        <Box display="flex">
          <PlaceOutlined />
          <Typography>View map</Typography>
        </Box>
      </Box>

      <Box display="flex" flex={1} alignItems="center" justifyContent="center">
        <Box
          p={3}
          border={1}
          borderRadius={2}
          display="flex"
          flexDirection="column"
        >
          <Typography className="text-2xl font-bold">
            Deadline Tài Trợ
          </Typography>
          <Typography>{data.deadline_sponsorship.toString()}</Typography>
          <Button variant="contained" sx={{ my: 1, textTransform: "none" }}>
            Tài trợ
          </Button>
          <Button variant="contained" sx={{ my: 1, textTransform: "none" }}>
            Quan tâm
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
