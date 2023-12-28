import { TEventData } from "@/types";
import { IValueLabel } from "../types";

export const mockEventList: TEventData[] = [
  {
    id: "1",
    img: "/images/homepage/event1.jpg",
    title:
      "1 Event title that a little bit long. Nvm let make it really long after all",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et",
    location: "Đại học Bách Khoa TPHCM",
    date: "12/11/2023",
    participant: 500,
  },
  {
    id: "2",
    img: "/images/homepage/event2.jpg",
    title:
      "2 Event title that a little bit long. Nvm let make it really long after all",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et",
    location: "Đại học Bách Khoa TPHCM",
    date: "12/11/2023",
    participant: 500,
  },
  {
    id: "3",
    img: "/images/homepage/event3.jpg",
    title:
      "3 Event title that a little bit long. Nvm let make it really long after all",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et",
    location: "Đại học Bách Khoa TPHCM",
    date: "12/11/2023",
    participant: 500,
  },
  {
    id: "4",
    img: "/images/homepage/event4.jpg",
    title:
      "4 Event title that a little bit long. Nvm let make it really long after all",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et",
    location: "Đại học Bách Khoa TPHCM",
    date: "12/11/2023",
    participant: 500,
  },
  {
    id: "5",
    img: "/images/homepage/event5.jpg",
    title:
      "5 Event title that a little bit long. Nvm let make it really long after all",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et",
    location: "Đại học Bách Khoa TPHCM",
    date: "12/11/2023",
    participant: 500,
  },
];

export const mockEventCategory: IValueLabel<string>[] = [
  {
    value: "1",
    label: "Event 1",
  },
  {
    value: "2",
    label: "Event 2",
  },
  {
    value: "3",
    label: "Event 3",
  },
  {
    value: "4",
    label: "Event 4",
  },
  {
    value: "5",
    label: "Event 5",
  },
];
