"use client";
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import CustomDataTable from "../_components/CustomTable";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import classNames from "classnames";

export function TableSection() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Box display="flex" flexDirection="column" width="100%" maxWidth="1440px">
      <Box display="flex" alignItems="center" py={5}>
        <Box display="flex" flex={1}>
          <Box
            borderRight={1}
            borderColor="divider"
            p={1}
            width="250px"
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => setTabValue(0)}
          >
            <Typography
              className={classNames(
                "text-xl text-center capitalize",
                tabValue === 0 ? "font-bold text-primary" : ""
              )}
            >
              Đã đăng
            </Typography>
          </Box>
          <Box
            borderRight={1}
            borderColor="divider"
            p={1}
            width="250px"
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => setTabValue(1)}
          >
            <Typography
              className={classNames(
                "text-xl text-center uppercase",
                tabValue === 1 ? "font-bold text-primary" : ""
              )}
            >
              Đang sử lý
            </Typography>
          </Box>

          <Box
            p={1}
            width="250px"
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => setTabValue(2)}
          >
            <Typography
              className={classNames(
                "text-xl text-center uppercase",
                tabValue === 2 ? "font-bold text-primary" : ""
              )}
            >
              Bản nháp
            </Typography>
          </Box>
        </Box>
        <OutlinedInput
          id="event-search"
          placeholder="Tìm kiếm sự kiện"
          className="bg-[#BDE0FE]/50"
          sx={{
            borderRadius: 3,
            borderColor: "#0986CA",
            input: {
              "&::placeholder": {
                color: "#717171",
              },
            },
          }}
          endAdornment={
            <InputAdornment position="start">
              <Search sx={{ color: "#0986CA" }} />
            </InputAdornment>
          }
        />
      </Box>

      <Box my="70px">
        <CustomDataTable />
      </Box>
    </Box>
  );
}
