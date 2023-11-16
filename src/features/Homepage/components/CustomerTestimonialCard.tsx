import { Paper, Box, Avatar, Typography } from "@mui/material";

export function CustomerTestimonialCard() {
    return (
      <Paper
      elevation={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          p: 2,
          my: 5,
          width: 400,
          height: 200,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Avatar></Avatar>
        </Box>
  
        <Box py={2}>
          <Typography textAlign="center" variant="h6">
            Name
          </Typography>
          <Typography textAlign="center" variant="subtitle2">
            Job
          </Typography>
        </Box>
  
        <Box display="flex" border={1} flex={1} width="100%"></Box>
      </Paper>
    );
  }