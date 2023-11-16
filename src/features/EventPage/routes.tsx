import { Navigate } from "react-router";
import { EventCreate, MyEvent } from "./pages";

export const eventsRoutes = (): any => {
  return [
    {
        path: "/events",
        name: "Option",
        element: <Navigate to="/events/my" />,
      },
    {
      path: "/events/create",
      name: "Create event",
      element: <EventCreate />,
    },
    {
      path: "/events/my",
      name: "My event",
      element: <MyEvent />,
    },
  ];
};
