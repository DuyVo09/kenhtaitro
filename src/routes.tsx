import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import { homepageRoutes } from "features/Homepage";
import { eventsRoutes } from "features/EventPage";

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
      ...eventsRoutes(),
    ]
  },
]);

export default appRouter;
