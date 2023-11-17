import { Menu, Typography, MenuItem, Box } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { INavbarItem } from "./types";
import { useState } from "react";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

export function NavbarItem({ path, label, children }: INavbarItem) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (e: any) => {
    if (children) {
      e.preventDefault();
      setAnchorEl(e.currentTarget);
    } else {
      return;
    }
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuItem = (path: string) => {
    handleCloseMenu();
    navigate(path);
  }

  return (
    <>
      <Box
        component={NavLink}
        to={path}
        onClick={handleOpenMenu}
        display="flex"
        alignItems="center"
        sx={{ mx: 2, textDecoration: "none" }}
      >
        <Typography color="black">{label}</Typography>
        {children && (open ? <ArrowDropDown /> : <ArrowDropUp />)}
      </Box>

      {children && (
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          {children.map((e) => (
            <MenuItem key={e.label}>
              <Box
                component={NavLink}
                onClick={() => handleMenuItem(e.path)}
                to={e.path}
                sx={{ textDecoration: "none" }}
              >
                <Typography color="black">{e.label}</Typography>
              </Box>
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
}
