import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);

export default appRouter;
