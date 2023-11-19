import { Box, Typography, Chip, Grid } from "@mui/material";

const fieldList: string[] = ["Field 1", "Field 2", "Field 3", "Field 4"];

export function EventDetail() {
  return (
    <Box px={20} display="flex" flexDirection="column">
      <Typography my={2} fontWeight="bold" variant="h4">
        Nội dung sự kiện
      </Typography>

      <Typography my={2}>EVENT TITLE</Typography>

      <Box display="flex" alignItems="center">
        <Typography marginRight={8}>Organization</Typography>

        {fieldList.map((e) => (
          <Chip sx={{ mx: 1 }} label={e} />
        ))}
      </Box>

      <Grid container spacing={2} sx={{ my: 2 }}>
        <Grid item xs={9}>
          <Box
            marginBottom={5}
            border={1}
            display="flex"
            height={150}
            justifyContent="center"
            alignItems="center"
          >
            Ảnh sự kiện
          </Box>

          <Box
            border={1}
            display="flex"
            height={550}
            justifyContent="center"
            alignItems="center"
          >
            Nội dung
          </Box>
        </Grid>

        <Grid item xs={3}>
          <Typography textAlign="center" sx={{ my: 1 }}>
            21 / 12 / 2023
          </Typography>

          <Typography textAlign="center" sx={{ my: 1 }}>
            21 / 12 / 2023
          </Typography>

          <Typography textAlign="center" sx={{ my: 1 }}>
            Event location
          </Typography>

          <Typography textAlign="center" sx={{ my: 1 }}>
            150 người
          </Typography>
        </Grid>
      </Grid>
      <Typography>22 tháng 3 2022 15h:00:35</Typography>
    </Box>
  );
}
