"use client";
import {
  Box,
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
  const [keysearch, setKeySearch] = useState("");
  const handleSearch = () => {
    if (keysearch) {
      if (tabValue === 0) setTabValue(3);
      else if (tabValue === 1) setTabValue(4);
      else if (tabValue === 2) setTabValue(5);
    }
  }
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
              Đang xử  lý
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
          onChange={(e) => setKeySearch(e.target.value)}
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
              <Search sx={{ color: "#0986CA" }} 
                onClick={() => handleSearch()}
              />
            </InputAdornment>
          }
        />
      </Box>

      <Box my="70px">
        <CustomDataTable 
          tabValue={tabValue}
          keySearch={keysearch}
        />
      </Box>
    </Box>
  );
}
