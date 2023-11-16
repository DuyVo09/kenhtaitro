import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import { homepageRoutes } from "features/Homepage/routes";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />
      },
      ...homepageRoutes(),
    ]
  },
]);

export default appRouter;
