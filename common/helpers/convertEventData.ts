import { TEventData } from "@/types";
import { TEventCardProps } from "@components/EventCard";

export const convertEventDataToCardProps = (
  eventData: TEventData
): TEventCardProps => {
  const { img, title, description, location, date, participant } = eventData;
  return { img, title, description, location, date, participant };
};
