// import { ReactComponent as AppLogo } from "logo.svg";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { INavbarItem } from "./types";
import { NavLink } from "react-router-dom";
import { NotificationsNone } from "@mui/icons-material";
import { NavbarItem } from "./NavbarItem";
import { useState } from "react";

const navbarItem: INavbarItem[] = [
  {
    path: "/home",
    label: "Trang chủ",
    children: null,
  },
  {
    path: "",
    label: "Sự kiện",
    children: [
      {
        path: "/events/create",
        label: "Tạo sự kiện",
        children: null,
      },
      {
        path: "/events",
        label: "Sự kiện của tôi",
        children: null,
      },
    ],
  },
  {
    path: "/calendar",
    label: "Lịch sự kiện",
    children: null,
  },
  {
    path: "/blogs",
    label: "Blog",
    children: null,
  },
  {
    path: "/about-us",
    label: "Về chúng tôi",
    children: null,
  },
  {
    path: "/contact",
    label: "Liên hệ",
    children: null,
  },
];

function NavbarHeader() {
  const [user, setUser] = useState(0);

  const handleLogin = () => {
    setUser(1);
  };

  const handleChangeUser = (e: any) => {
    setUser(e.target.value);
  };

  return (
    <AppBar
      sx={{
        position: "static",
        flexDirection: "row",
        alignItems: "center",
        bgcolor: "white",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={80}
        width={80}
        border={1}
        borderColor={"divider"}
      >
        <Typography color="black">Logo</Typography>
      </Box>

      <Box display="flex">
        {navbarItem.map((e) => (
          <NavbarItem path={e.path} label={e.label} children={e.children} />
        ))}
      </Box>

      <Box
        px={2}
        display="flex"
        flex={1}
        justifyContent="end"
        alignItems="center"
      >
        {user === 0 ? (
          <>
            <Button>Đăng ký</Button>
            <Button onClick={handleLogin}>Đăng nhập</Button>
          </>
        ) : (
          <Box display="flex" alignItems="center" p={3}>
            <Box>
              <FormControl>
                <RadioGroup
                  value={user}
                  onChange={handleChangeUser}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value={3}
                    control={<Radio />}
                    sx={{ color: "black" }}
                    label="Admin"
                  />
                  <FormControlLabel
                    value={2}
                    control={<Radio />}
                    sx={{ color: "black" }}
                    label="Enterprise"
                  />
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    sx={{ color: "black" }}
                    label="Organization"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Avatar sx={{ width: 24, height: 24 }} />
            <Typography
              justifyContent="center"
              textAlign="center"
              color="black"
            >
              User
            </Typography>
          </Box>
        )}
        <IconButton>
          <NotificationsNone />
        </IconButton>
      </Box>
    </AppBar>
  );
}

export default NavbarHeader;
