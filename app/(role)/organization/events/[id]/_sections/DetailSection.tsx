import { LocationMap } from "@/common/components/LocationMap";
import { EventDetail } from "@/types";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";

const tagList = [
  "School Fest",
  "University Event",
  "Event",
  "Seminar",
  "Jaskaran Event",
];

export function DetailSection({data} : {data: EventDetail}) {
  return (
    <Box display="flex" flexDirection="column" px="7%" py="50px">
      <Typography className="font-bold text-2xl my-3">
        Nội dung sự kiện
      </Typography>
      <Grid container spacing={5}>
        <Grid item display="flex" flexDirection="column" xs={6}>
          <Box display="flex" flexDirection="column" my={2}>
            <Typography className="text-semi-light">
              {data.event_description}
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column">
            <Typography className="font-bold text-2xl my-3">
              Thời gian
            </Typography>
            <Box display="flex">
              <Typography className="text-semi-light mr-5">
                Thời gian bắt đầu:
              </Typography>
              <Typography className="text-primary">
                {data.start_date.toString()}
              </Typography>
            </Box>
            <Box display="flex" my={1}>
              <Typography className="text-semi-light mr-4">
                Thời gian kết thúc:
              </Typography>
              <Typography className="text-primary">
                {data.end_date.toString()}
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            sx={{ p: 2, my: 2, textTransform: "none", width: "max-content" }}
          >
            <Typography className="font-bold">Ban Tổ Chức</Typography>
          </Button>
        </Grid>

        <Grid item display="flex" flexDirection="column" xs={6}>
          <Box height="260px" border={1}>
            <LocationMap />
          </Box>
          <Box display='flex' flexDirection='column' my={2}>
            <Typography className="font-bold text-2xl my-4">
              Địa điểm tổ chức
            </Typography>
            <Typography className="text-semi-light">
              {data.location}
            </Typography>
          </Box>

          <Box display='flex' flexDirection='column' my={2}>
            <Typography className="font-bold text-2xl my-4">Tag</Typography>
            <Box display="flex" flexWrap="wrap">
              {data.tags.map((e) => (
                <Chip
                  key={e}
                  label={e}
                  sx={{
                    marginRight: 1,
                    marginBottom: 1,
                    p: 1,
                  }}
                />
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
