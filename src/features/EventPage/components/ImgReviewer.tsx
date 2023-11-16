import {
  Box,
  Button,
  CircularProgress,
  Typography,
  Checkbox,
} from "@mui/material";
import { useRef, useState } from "react";

export const ImageReviewer = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSelectCheckbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {};

  return (
    <>
      <Box
        height={250}
        width={250}
        //   component={Button}
        border={1}
        m={1}
        flexDirection="column"
        sx={{
          borderColor: "green",
          position: "relative",
        }}
      >
        <Checkbox
          disabled
          checked={isChecked}
          sx={{
            position: "absolute",
            top: 1,
            right: 1,
          }}
        />
        <Box
          height={250}
          width={250}
          flexDirection="column"
          display="flex"
          justifyContent="center"
          p={3}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Button sx={{ my: 2 }} variant="contained">
            Chon lam anh bie
          </Button>
          <Button sx={{ my: 2 }} variant="contained">
            Tai xuong
          </Button>
          <Button sx={{ my: 2 }} variant="contained">
            Edit
          </Button>
        </Box>
      </Box>
    </>
  );
};
