import { Outlet } from "react-router-dom";
import NavbarHeader from "./Header";

function MainLayout() {
    return ( <>
    <NavbarHeader />
    <Outlet />
    </> );
}

export default MainLayout;