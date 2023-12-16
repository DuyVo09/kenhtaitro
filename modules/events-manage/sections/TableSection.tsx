import { Box, Button, Typography } from "@mui/material";

export function TableSection() {
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Box display="flex" alignItems="center" px='7%' py={5}>
        <Box display="flex" flex={1}>
          <Typography className="text-xl font-bold">Đã liên hệ tài trợ</Typography>
          <Typography className="text-xl font-bold">Đang quan tâm</Typography>
        </Box>
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
          <Typography className="font-bold">Xem chi tiết</Typography>
        </Button>
      </Box>
    </Box>
  );
}
