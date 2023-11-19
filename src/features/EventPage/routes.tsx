import { Navigate } from "react-router";
import { EventCreate, EventDetail, MyEvent } from "./pages";

export const eventsRoutes = (): any => {
  return [
    {
      path: "/events/create",
      name: "Create event",
      element: <EventCreate />,
    },
    {
      path: "/events",
      name: "My event",
      element: <MyEvent />,
    },
    {
      path: "/events/:id",
      name: "Event detail",
      element: <EventDetail />,
    },
  ];
};
