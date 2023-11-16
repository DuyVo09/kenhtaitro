// import { ReactComponent as AppLogo } from "logo.svg";
import { AppBar, Box, Button, IconButton, Typography } from "@mui/material";
import { INavbarItem } from "./types";
import { NavLink } from "react-router-dom";
import { NotificationsNone } from "@mui/icons-material";

const navbarItem: INavbarItem[] = [
  {
    path: "/home",
    label: "Trang chủ",
  },
  {
    path: "/events",
    label: "Sự kiện",
  },
  {
    path: "/calendar",
    label: "Lịch sự kiện",
  },
  {
    path: "/blogs",
    label: "Blog",
  },
  {
    path: "/about-us",
    label: "Về chúng tôi",
  },
  {
    path: "/contact",
    label: "Liên hệ",
  },
];

function NavbarHeader() {
  return (
    <AppBar
      sx={{ position: 'static', flexDirection: "row", alignItems: "center", bgcolor: "white" }}
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
          <Box
            component={NavLink}
            to={e.path}
            sx={{ mx: 2, textDecoration: "none" }}
          >
            <Typography color="black">{e.label}</Typography>
          </Box>
        ))}
      </Box>

      <Box px={2} display="flex" flex={1} justifyContent="end" alignItems="center">
        <Button>Đăng ký</Button>
        <Button>Đăng nhập</Button>
        <IconButton>
          <NotificationsNone />
        </IconButton>
      </Box>
    </AppBar>
  );
}

export default NavbarHeader;
