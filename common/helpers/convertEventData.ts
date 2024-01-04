import { PublishedEvent, TEventData } from "@/types";
import { TEventCardProps } from "@components/EventCard";

export const convertEventDataToCardProps = (
  eventData: PublishedEvent
): TEventCardProps => {
  let img: string = "";
  if (eventData.event_image && eventData.event_image.length != 0) {
    img = eventData.event_image[0];
  }
  const title: string = eventData.event_name;
  const description: string = eventData.event_description;
  const location: string = eventData.location;
  const date: string = eventData.start_date;
  const participant: number = eventData.total_reach;

  return { img, title, description, location, date, participant };
};
