import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import CustomDataTable from "../components/CustomDataTable";

export function EventManage() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box px={20} display="flex" flexDirection="column">
      <Box
        my={5}
        border={1}
        display="flex"
        height={150}
        justifyContent="center"
        alignItems="center"
      >
        Ảnh bìa
      </Box>

      <Typography sx={{ my: 2 }}>Quản lý sự kiện</Typography>

      <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Đã liên hệ tài trợ" />
            <Tab label="Đang quan tâm" />
          </Tabs>

          <CustomDataTable />          
        </Box>
      </Box>
    </Box>
  );
}
