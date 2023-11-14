import { ReactComponent as AppLogo } from "logo.svg";
import { AppBar, Box } from "@mui/material";
import { INavbarItem } from "./types";
import { NavLink } from "react-router-dom";

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
    <Box flexGrow={1}>
      <AppBar
        position="sticky"
        sx={{ flexDirection: "row", alignItems: "center" }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={80}
          width={80}
        >
          Logo
        </Box>

        <Box>
        {navbarItem.map((e) => (
          <NavLink to={e.path}>{e.label}</NavLink>
        ))}</Box>
      </AppBar>
    </Box>
  );
}

export default NavbarHeader;
