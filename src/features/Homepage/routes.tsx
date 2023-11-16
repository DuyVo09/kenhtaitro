import { HomeScreen } from "./pages";

export const homepageRoutes = (): any => {
    return [
        {
            path: "/home",
            name: "Homepage",
            element: <HomeScreen />
        }
    ]
}