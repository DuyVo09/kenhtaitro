import { Navigate } from "react-router";
import { EventCreate, EventDetail, MyEvent } from "./pages";
import EventList from "./pages/EventList";
import { EventManage } from "./pages/EventManage";

export const eventsRoutes = (): any => {
  return [
    {
      path: "/events",
      name: "Create event",
      element: <EventList />,
    },
    {
      path: "/events/manage",
      name: "Manage event",
      element: <EventManage />,
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
    {
      path: "/events/:id",
      name: "Event detail",
      element: <EventDetail />,
    },
  ];
};
