// import { ReactComponent as AppLogo } from "logo.svg";
import { AppBar, Box, Button, IconButton, Typography } from "@mui/material";
import { INavbarItem } from "./types";
import { NavLink } from "react-router-dom";
import { NotificationsNone } from "@mui/icons-material";
import { NavbarItem } from "./NavbarItem";

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
