import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  ListItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface EventReviewProps {
  // imgUrls: string[];
  imgUrls: string;
  eventName: string;
  description: string;
  organization: string;
  location: string;
  businessView: boolean;
}

function EventReview({
  imgUrls,
  eventName,
  description,
  organization,
  location,
  businessView,
}: EventReviewProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        // component={}
        display="flex"
        p={1}
        border={1}
        height={300}
        alignItems="center"
        justifyContent="center"
      >
        {/* {imgUrls.map((e) => (
          <ListItem>
            <Box width={200} height={200} border={1} borderColor="divider">
              <Box
                width="100%"
                height="100%"
                component="img"
                src={e}
                sx={{ objectFit: "contain" }}
              />
            </Box>
          </ListItem>
        ))} */}
        <Box
          width="100%"
          height="100%"
          component="img"
          src={imgUrls}
          sx={{ objectFit: "contain" }}
        />
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
        my={4}
        border={1}
      >
        {eventName}
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={150}
        p={1}
        my={1}
        border={1}
      >
        {description}
      </Box>

      <Box
        display="flex"
        my={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box py={1} px={5} border={1}>
          {organization}
        </Box>
        <Box py={1} px={5} border={1}>
          {location}
        </Box>
      </Box>

      {businessView && (
        <Box
          display="flex"
          my={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Button onClick={handleOpen} variant="outlined" sx={{ py: 1, px: 5 }}>
            Tài trợ
          </Button>
          <Button variant="outlined" sx={{ py: 1, px: 5 }}>
            Quan tâm
          </Button>
        </Box>
      )}

      <Button
        variant="outlined"
        sx={{ py: 1, px: 5, my: 2, width: "max-content" }}
      >
        Xem thêm
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography my={5}>Gửi thông tin liên hệ đến kênh tài trợ</Typography>
          <FormControl sx={{ my: 2 }} fullWidth variant="standard">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={4}>
                <FormLabel>Họ và tên</FormLabel>
              </Grid>
              <Grid item xs={8}>
                <TextField />
              </Grid>
            </Grid>
          </FormControl>

          <FormControl sx={{ my: 2 }} fullWidth variant="standard">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={4}>
                <FormLabel>Địa chỉ email</FormLabel>
              </Grid>
              <Grid item xs={8}>
                <TextField />
              </Grid>
            </Grid>
          </FormControl>

          <FormControl sx={{ my: 2 }} fullWidth variant="standard">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={4}>
                <FormLabel>Số điện thoại</FormLabel>
              </Grid>
              <Grid item xs={8}>
                <TextField />
              </Grid>
            </Grid>
          </FormControl>

          <FormControl sx={{ my: 2 }} fullWidth variant="standard">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={4}>
                <FormLabel>Tên doanh nghiệp</FormLabel>
              </Grid>
              <Grid item xs={8}>
                <TextField />
              </Grid>
            </Grid>
          </FormControl>

          <Box display="flex" flexDirection="column">
            <Button
              sx={{ my: 2, py: 1, textTransform: "none" }}
              variant="contained"
            >
              Thay đổi thông tin
            </Button>

            <Button
              sx={{ my: 2, py: 1, textTransform: "none" }}
              variant="contained"
            >
              Lưu thay đôi
            </Button>

            <Button
              sx={{ my: 2, py: 1, textTransform: "none" }}
              variant="contained"
            >
              Gởi
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default EventReview;
