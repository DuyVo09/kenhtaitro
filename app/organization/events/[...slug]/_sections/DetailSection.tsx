import { LocationMap } from "@/common/components/LocationMap";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";

const tagList = [
  "School Fest",
  "University Event",
  "Event",
  "Seminar",
  "Jaskaran Event",
];

export function DetailSection() {
  return (
    <Box display="flex" flexDirection="column" px="7%" py="50px">
      <Typography className="font-bold text-2xl my-3">
        Nội dung sự kiện
      </Typography>
      <Grid container spacing={5}>
        <Grid item display="flex" flexDirection="column" xs={6}>
          <Box display="flex" flexDirection="column" my={2}>
            <Typography className="text-semi-light">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
              tellus eget condimentum rhoncus, sem quam semper libero, sit amet
              adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
              pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
              tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam
              quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
              leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
              magna. Sed consequat, leo eget bibendum sodales, augue velit
              cursus nunc,
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
                Saturday, March 18 2023, 9.30 AM
              </Typography>
            </Box>
            <Box display="flex" my={1}>
              <Typography className="text-semi-light mr-4">
                Thời gian kết thúc:
              </Typography>
              <Typography className="text-primary">
                Saturday, March 18 2023, 9.30 AM
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
              202 Lê Lai, Phường Bến Thành, Quận 1, TP. HCM
            </Typography>
          </Box>

          <Box display='flex' flexDirection='column' my={2}>
            <Typography className="font-bold text-2xl my-4">Tag</Typography>
            <Box display="flex" flexWrap="wrap">
              {tagList.map((e) => (
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
