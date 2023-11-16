import { Outlet } from "react-router-dom";
import NavbarHeader from "./Header";
import { Box } from "@mui/material";

function MainLayout() {
    return ( <>
    <NavbarHeader />
    <Box p={3}><Outlet /></Box>
    </> );
}

export default MainLayout;